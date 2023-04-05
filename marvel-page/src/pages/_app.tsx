import Header from "@/components/header";
import { PortalProvider } from "@/context/PortalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PortalProvider>
        <Header />
        <div id='portal' />
        <Component {...pageProps} />
      </PortalProvider>
    </>
  );
}
