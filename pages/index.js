import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import Image from "next/image";
import MainPage from "@/components/PralineBox";
import logo from "../utils/logo_heart.png";
import { StyledLogo } from "@/components/PralineForm/PralineForm.styled";

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
        <Heading>
          {/* <StyledLogo>
            <Image src="/logo_heart.png" width="40" height="40" alt="logo" />
          </StyledLogo> */}
          Pralinenschachtel Konfigurator
        </Heading>
        <MainPage />
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: 25px;
`;
