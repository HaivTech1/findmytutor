import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import Head from "next/head";

import CustomToast from "@/components/CustomToast";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import siteSettings from "@/hooks/siteSettings";

import "@/styles/globals.css";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <SessionProvider session={session}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{siteSettings.title}</title>
        </Head>

        <main className={poppin.className}>
          <Component {...pageProps} />
        </main>
        <CustomToast />
      </SessionProvider>
    </StateProvider>
  );
}
