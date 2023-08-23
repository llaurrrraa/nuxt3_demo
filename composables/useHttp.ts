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
export async function api<T>(url: UrlType, option: any) {

    const  { data } = await useFetch<ResOptions<T>>(url, {
    
    // request interceptors
    onRequest({ options }) {options.params = paramsSerializer(options.params);
      const { public: { apiUrl } } = useRuntimeConfig();
      options.baseURL = apiUrl;
    },
    ...option,
  });

  if(!data.value?.success || data.value?.code !=200) {
    switch (data.value?.code) {
      case 401:
        console.error('您的登入狀態已過期，請重新登入。');
        break;
      case 402:
      case 404:
      case 500:
        console.error('error code:',data.value?.code);
        console.error('error message:',data.value?.s_message);
        break;
      default:
        break;
    }
  }
  if(data.value?.success && data.value?.code === 200) {
    return data.value?.payload
  }
};
