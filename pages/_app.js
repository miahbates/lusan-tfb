import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(`App is changing to ${url} open is ${open}`);
      setOpen(!open);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <Layout open={open} setOpen={setOpen}>
      <Component {...pageProps} />
    </Layout>
  );
}
