export interface AccidentsType {
  year: number|string;
  district: string;
}

export interface FetchAccidentsData {
  data: [][];
  xLabels: [];
  itemLabels: [];
  total: [][];
}

export const getAccident = async ( params: any ) => {
  return await api('frontstage/dashboard-data/accidentss', {
    method: 'post',
    body: params
  })
}

export const getBusOnTime = async ( params: any ) => {
  return await api('frontstage/dashboard-data/{xxxxxxxx}_option', {
    method: 'post',
    body: params
  })
}