import Image from "next/image";
import styles from "./page.module.scss";
import Banner from "./_sections/Banner";
import Intro from "./_sections/Intro";
import Gallery from "./_sections/Gallery";

export default function Home() {
  return (
    <>
      <Banner />
      <Intro />

      <Gallery />
    </>
  );
}
