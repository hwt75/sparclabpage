import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Layout } from "./layouts/layout";
import './config' // config multiple language
import withSplashScreen from "./hoc/withSplashScreen";
import { Analytics } from '@vercel/analytics/react';
export const App = () => {
  return (
      <BrowserRouter>
        <Layout />
        <Analytics />
      </BrowserRouter>
  );
};

export default withSplashScreen(App);
