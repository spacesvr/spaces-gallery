import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const LinkTreeSpace = dynamic(import("scenes/LinkTree"), { ssr: false });

const linkData = [
  {
    link: "",
    desc: "Spotify (1)",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "",
    desc: "YouTube (2)",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "",
    desc: "Apple Music (3)",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "",
    desc: "Link 4",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "",
    desc: "Link 5",
    src: "/assets/gradient2.jpg",
  },
  {
    link: "",
    desc: "Link 6",
    src: "/assets/gradient2.jpg",
  },
];

const socials = {
  instagram: "https://www.instagram.com/musehq/",
  twitter: "https://twitter.com/musehq_",
  web: "spaces.gallery",
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>LinkTree 001</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LinkTreeSpace
        linkData={linkData}
        socials={socials}
        map="city"
        far={100}
        scenePos={[0, -20, 0]}
        fogNear={0}
        fogFar={50}
        fogColor={"#000000"}
        hMapScale={30}
        xzMapScale={100}
        floorColor="black"
        night
      />
    </>
  );
};

export default LinkTree;
