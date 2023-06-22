import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="#intro" className={styles.link}>
              Intro
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="#philosophy" className={styles.link}>
              Philosophy
            </Link>
          </li>
          <li>
            <Link href="#works" className={styles.link}>
              Works
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.link}>
              Say Hello
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
