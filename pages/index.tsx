import Header from "@/app/components/header/Header";
import Hero from "@/app/components/hero/Hero";
import Projects from "@/app/components/projects/Projects";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Musiichenko Dmytro</title>
        <meta name="description" content="Portfolio of Dmytro Musiichenko" />
        <meta property="og:title" content="Portfolio of Dmytro Musiichenko" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://my-portfolio-m4es7r0.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/639bhTJt/Untitled.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="290" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`max-xl:w-full max-[376px]:px-6 max-lg:px-8 w-[1280px] px-[90px] bg-[#fbfefd]`}
      >
        <div className="flex flex-col gap-[80px] py-[40px]">
          <section className="flex flex-col gap-10">
            <Header />
            <Hero />
          </section>
          <Projects />
        </div>
      </main>
    </>
  );
}
