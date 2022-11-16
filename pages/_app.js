import "../styles/globals.css";
import Layout from "./components/Layout";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>
        <Link href="/products">To the products per Link</Link>
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
