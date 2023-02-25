import Head from "next/head";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import { useSession } from "next-auth/react";
import Unauthorized from "../unauthorized";
import Content from "../../components/imageView/Content";

export default function ImageView(): JSX.Element {

  return (
    <>
      <Head>
        <title>Painel</title>
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
