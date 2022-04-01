import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
