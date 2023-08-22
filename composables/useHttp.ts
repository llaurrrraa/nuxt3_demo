// https://github.com/unjs/ofetch/blob/main/src/fetch.ts
import type { FetchResponse, SearchParameters } from 'ofetch';

// UseFetchOptions type 文件: https://nuxt.com/docs/api/composables/use-fetch
import type { UseFetchOptions } from 'nuxt/app';

import type { Ref } from 'vue';

export interface ResOptions<T> {
  payload: T;
  code: number;
  s_message: string;
  success: boolean
}

type UrlType = string | Request | Ref<string | Request > | (() => string | Request)

export type HttpOption<T> = UseFetchOptions<ResOptions<T>>

// array 參數序列化
function paramsSerializer(params?: SearchParameters) {
  if (!params) return;
  const query = JSON.parse(JSON.stringify(params));
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      // toRaw -> 把 reactive 變成非響應式
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v));
      delete query[key];
    }
  })
  return query
}

// fetch
function fetch<T>(url: UrlType, option: any) {
  return useFetch<ResOptions<T>>(url, {
    // request interceptors
    onRequest({ options }) {
      options.params = paramsSerializer(options.params);
      const { public: { apiUrl } } = useRuntimeConfig();
      options.baseURL = apiUrl;
    },
    // response interceptors
    onResponse({ response }) {
      if( response.status === 200 ) {
        return response._data
      }
      if(response._data.code !== 200) {
        console.log('response error:', response);
      }
      return response._data
    },
    onRequestError({ response }) {
      console.log('request error:', response);
      return Promise.reject(response?._data ?? null)
    },
    ...option,
  })
}

export const api = {
  get: <T>(url: UrlType, params?: any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'get', params, ...option})
  },
  post: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'post', body, ...option })
  },
  put: <T>(url: UrlType, body?:any, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'put', body, ...option })
  },
  delete: <T>(url: UrlType, body?:any, option?: HttpOption<T>) => {
    return fetch<T>(url, {method: 'delete', body, ...option})
  }
}

