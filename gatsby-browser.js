import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import { CartProvider } from "./src/context/CartContext";
import Layout from "./src/components/Layout";
import { Store } from "gatsby";
import store from "./store";
import { Provider } from "react-redux";
import { I18nextProvider } from 'react-i18next'
import i18n from './src/i18n';
import { GoogleAuthProvider } from "./src/context/GoogleAuthContext";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <GoogleAuthProvider>
    <I18nextProvider i18n={i18n}>
      <GlobalProvider>
        <Provider store={store}>
          <CartProvider>{element}</CartProvider>
          {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
        </Provider>
      </GlobalProvider>
    </I18nextProvider>
  </GoogleAuthProvider>
);
