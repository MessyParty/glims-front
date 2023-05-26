import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
