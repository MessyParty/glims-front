import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import { Libre_Baskerville } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

const baskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <main className={baskerville.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </RecoilRoot>
  );
}
