import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Sofia_Sans } from 'next/font/google';

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <main className={`${sofia.variable} font-sofia`}>
        <Component {...pageProps} />
        </main>
      </Provider>
    </Layout>
  );
}
