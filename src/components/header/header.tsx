import { Link as ReactScrollLink } from "react-scroll";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="intro"
              spy={true}
              smooth={true}
              duration={800}
            >
              Intro
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="about"
              spy={true}
              smooth={true}
              duration={800}
            >
              About
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="philosophy"
              spy={true}
              smooth={true}
              duration={800}
            >
              Philosophy
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="works"
              spy={true}
              smooth={true}
              duration={800}
            >
              Works
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
            >
              Say Hello
            </ReactScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
