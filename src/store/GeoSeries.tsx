import { Action, action } from "easy-peasy";
export interface GeoSeriesModel {
  data: string;
  updateData: Action<GeoSeriesModel, string>;
}
const geoSeries: GeoSeriesModel = {
  data: "",
  updateData: action((state, payload) => {
    state.data = payload;
  }),
};

export default geoSeries;
