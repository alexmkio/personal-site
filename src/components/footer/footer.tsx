import styles from "./footer.module.scss";
import { animateScroll } from "react-scroll";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <span>© Copyright Epitome 2019</span>
          <span>
            Design by <a href="https://www.styleshout.com/">StyleShout</a>
          </span>
        </div>
        <div className={styles.goToTop}>
          <a
            className={styles.arrow}
            onClick={() =>
              animateScroll.scrollToTop({
                duration: 800,
                smooth: true,
              })
            }
          />
        </div>
      </div>
    </footer>
  );
}
