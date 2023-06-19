import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { Libre_Baskerville } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import reset from "../styles/reset";
import theme from "../styles/theme";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const baskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={reset} />
          <main className={baskerville.className}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </main>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
