import reset from "@/styles/reset";
import { useState } from "react";
import type { AppProps } from "next/app";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { Global } from "@emotion/react";

import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <CookiesProvider>
            <Global styles={reset} />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </CookiesProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
