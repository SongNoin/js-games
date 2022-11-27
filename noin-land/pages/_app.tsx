import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/commons/layout/Header";
import styled from "styled-components";
import { colors } from "commons/constants/colors";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Body>
        <Header></Header>
        <Component {...pageProps} />
      </Body>
    </>
  );
}

const Body = styled.div`
  height: 100vh;
  background-color: ${colors.main05};
`;
