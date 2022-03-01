import { useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { SideBarContext } from "../context/SideBarContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SideBarContext.Provider value={{isCollapsed , setIsCollapsed}} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SideBarContext.Provider>
  );
}

export default MyApp;
