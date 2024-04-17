import "@/styles/globals.css";

import Navbar from "@/components/layouts/Navbar";
import MasterApp from "@/components/layouts/MasterApp";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <MasterApp>
        <Component {...pageProps} />
      </MasterApp>
    </SessionProvider>
  );
}
