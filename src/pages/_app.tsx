import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { Libre_Baskerville } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import reset from "../styles/reset";
import theme from "../styles/theme";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const baskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
