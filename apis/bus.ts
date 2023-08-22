
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

export async function getAccident(params: AccidentsType) {
  return api.post<FetchAccidentsData>('frontstage/dashboard-data/accidents', params)
}