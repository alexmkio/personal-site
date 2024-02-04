import Image from "next/image";
import styles from "./footer.module.scss";
import { animateScroll } from "react-scroll";
import upArrow from "../../../public/assets/icons/icon-arrow-up.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column} />
        <a
          onClick={() =>
            animateScroll.scrollToTop({
              duration: 800,
              smooth: true,
            })
          }
        >
          <div className={styles.goToTop}>
            <Image src={upArrow} alt="up arrow" className={styles.arrow} />
          </div>
        </a>
      </div>
    </footer>
  );
}
