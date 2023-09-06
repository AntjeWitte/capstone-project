import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import MainPage from "@/components/PralineBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Heading>Pralinenschachtel Konfigurator 🍱</Heading>
        <MainPage />
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
