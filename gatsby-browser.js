import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import { CartProvider } from "./src/context/CartContext";
import Layout from "./src/components/Layout";
import { Store } from "gatsby";
import store from "./store";
import { Provider } from "react-redux";
import { I18nextProvider } from 'react-i18next'
import i18n from './src/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './src/helpers';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './src/pages/main.css';


export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <GoogleOAuthProvider clientId="84382277177-tk0ct3n22t6pcshpjjadnbohq97rv2hv.apps.googleusercontent.com">
    <I18nextProvider i18n={i18n}>
      <Layout {...props}>{element}</Layout>
    </I18nextProvider>
  </GoogleOAuthProvider>;
};

export const wrapRootElement = ({ element }) => (
  <GoogleOAuthProvider clientId="84382277177-tk0ct3n22t6pcshpjjadnbohq97rv2hv.apps.googleusercontent.com">
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <GlobalProvider>
          <Provider store={store}>
            <CartProvider>{element}</CartProvider>
            {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
          </Provider>
        </GlobalProvider></ChakraProvider>
    </I18nextProvider>
  </GoogleOAuthProvider>
);
