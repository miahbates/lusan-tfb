import Head from "next/head";
import Navbar from "../components/nav/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Lusan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
}
