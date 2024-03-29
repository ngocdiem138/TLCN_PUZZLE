import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import { CartProvider } from "./src/context/CartContext";
import Layout from "./src/components/Layout";
import { Provider } from "react-redux";
// import { Store } from "gatsby";
import store from "./store";
// import { BrowserRouter } from 'react-router-dom';
// import App from "./src/pages/App/App";
import { IntlProvider } from 'react-intl';
import './src/pages/main.css';
import { ToastProvider } from 'react-toast-notifications';


export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <ToastProvider placement='bottom-center'>
    <Layout {...props}>{element}</Layout>;
  </ToastProvider>
};

export const wrapRootElement = ({ element }) => (
  <ToastProvider placement='bottom-center'>
    <IntlProvider locale="en">
      <GlobalProvider>
        <Provider store={store}>
          <CartProvider>{element}</CartProvider>
          {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
        </Provider>
      </GlobalProvider>
    </IntlProvider>
  </ToastProvider>
);
