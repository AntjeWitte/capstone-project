import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import PralineForm from "../components/PralineForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const pralineData = Object.fromEntries(formData);

  //   const response = await fetch("/api/pralines", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(pralineData),
  //   });

  //   if (!response.ok) {
  //     console.error(response.status);
  //     return;
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const data = Object.fromEntries(formData);
  //     handleAddIngredient(data);
  //   }

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
        <PralineForm />
        {/* onSubmit={handleSubmit} value=""  */}
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
