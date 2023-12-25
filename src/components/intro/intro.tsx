import styles from "./intro.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import Link from "next/link";

export default function Intro() {
  return (
    <ReactScrollElement name="intro" className={styles.intro}>
      <div className={styles.introContent}>
        <div className={styles.introText}>
          <h1>Hello, I'm John Doe</h1>
          <h2>
            Digital Designer <br />
            and Web Developer <br />
            Based In Somewhere.
          </h2>
        </div>
        <div className={styles.introScroll}>
          <Link href="#about">Scroll For More</Link>
        </div>
        <div className={styles.introGrid}></div>
        <div className={styles.introPic}></div>
      </div>
    </ReactScrollElement>
  );
}
