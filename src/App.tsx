import React from "react";
import "./App.css";
import { AppRouter } from "./router";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter basename="Jenosize">
        <Header
          logoImage={`https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/27336327_1917418864953711_5419900157294476822_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFzUvAnCksNAUq3TWiBzX6IDm6t3IzmRP0Obq3cjOZE_cs-au-pv5WrZwyStUHfTF1J0Eh3tJ3-Yq8UBK6pgBLq&_nc_ohc=g9hlhej0eJgAX_i4rLQ&_nc_ht=scontent.fbkk9-2.fna&oh=01cc39af9de621c562ad035a09d12400&oe=5F4DCC29`}
        />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}
