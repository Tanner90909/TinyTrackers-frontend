import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStateProvider } from "../context/GlobalState";

import styles from "../styles/global.module.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <GlobalStateProvider>
      
        <Component {...pageProps} />
      
    </GlobalStateProvider>
  );
}
export default MyApp;
