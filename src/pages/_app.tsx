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

import styled from "@emotion/styled";

import axios from "axios";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function App({ Component, pageProps }: AppProps) {
  // ssr 적용시를 위한 useState
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
            <Container>
              <NavBar />
              <Component {...pageProps} />
              <Footer />
            </Container>
          </CookiesProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
`;
