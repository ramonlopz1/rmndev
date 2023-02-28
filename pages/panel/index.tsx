import Head from "next/head";
import Header from "../../components/templates/Header";
import Footer from "../../components/templates/Footer";
import { useSession } from "next-auth/react";
import Unauthorized from "../unauthorized";
import Link from "next/link";

export default function Panel(): JSX.Element {
  const { status } = useSession();

  const contentStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "calc(100vh - 170px)",
    flex: 1,
    gap: "20px",
  };

  const btnStyle = {
    backgroundColor: "var(--purple0)",
    height: "100px",
    width: "140px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer"
  };

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Painel</title>
        </Head>
        <Header />
        <div style={{ ...contentStyle }}>
          <a style={{ ...btnStyle }}>
            <Link href="/panel/upload">Upload</Link>
          </a>
          <a style={{ ...btnStyle }}>
            <Link href="/panel/upload">List</Link>
          </a>
          <a style={{ ...btnStyle }}>
            <Link href="/panel/upload">Delete</Link>
          </a>
        </div>
        <Footer />
      </>
    );
  } else {
    return <Unauthorized />;
  }
}
