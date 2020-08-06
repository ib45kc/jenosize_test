import { Action, action } from "easy-peasy";
export interface GeoSeriesModel {
  data: string;
  updateData: Action<GeoSeriesModel, number[]>;
}
const geoSeries: GeoSeriesModel = {
  data: "",
  updateData: action((state, payload) => {
    if (payload.length > 0) {
      state.data = payload.join(",");
    }
  }),
};

export default geoSeries;
