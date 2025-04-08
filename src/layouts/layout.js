import * as React from "react";
import { Header } from "./header";
import { Routes } from "./routes";
import { Footer } from "./footer";
import "./layout.scss";
import { ScrollProvider } from "./ScrollContext";

export const Layout = () => {
  return (
    <ScrollProvider>
      <div className="App">
        <Header />
        <div className="body-content"><Routes /></div>
        <Footer />
      </div>
    </ScrollProvider>
  );
};
