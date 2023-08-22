import type { HttpOption } from 'composables/useHttp'

export interface BusTimeType {
  year: string;
  month: string;
}

export interface BusOnTimeData {
  xLabels: [];
  y2ItemLabels: [];
  y1ItemLabels: [];
  y2Data: [];
  y1Data: [];
}

export async function getBusOnTime(params: BusTimeType) {
  return api.post<BusOnTimeData>('/frontstage/dashboard-data/bus_ontime', params)
}