import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>

      </Provider>
      <Component {...pageProps} />
    </Layout>
  );
}
