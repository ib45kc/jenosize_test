import { Action, action } from "easy-peasy";

export interface RestaurantModel {
  data: google.maps.places.PlaceResult[];
  updateData: Action<RestaurantModel, google.maps.places.PlaceResult[]>;
}
const restaurant: RestaurantModel = {
  data: [],
  updateData: action((state, payload) => {
    state.data = payload;
  }),
};

export default restaurant;
