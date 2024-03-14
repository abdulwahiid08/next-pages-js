import "@/styles/globals.css";

import Navbar from "@/components/layouts/Navbar";
import MasterApp from "@/components/layouts/MasterApp";

export default function App({ Component, pageProps }) {
  return (
    <MasterApp>
      <Component {...pageProps} />
    </MasterApp>
  );
}
