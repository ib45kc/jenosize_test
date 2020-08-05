import { createStore, createTypedHooks, persist } from "easy-peasy";
import restaurant, { RestaurantModel } from "./Restaurant";
import geoSeries, { GeoSeriesModel } from "./GeoSeries";

const {
  useStoreDispatch,
  useStore,
  useStoreActions,
  useStoreState,
} = createTypedHooks<StoreModel>();

export { useStoreDispatch, useStoreActions, useStore, useStoreState };

export interface StoreModel {
  restaurant: RestaurantModel;
  geoSeries: GeoSeriesModel;
}

const store: StoreModel = {
  restaurant,
  geoSeries,
};
export default createStore(
  persist(store, {
    whitelist: ["restaurant", "geoSeries"],
    storage: "localStorage",
  })
);
