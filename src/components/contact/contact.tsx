import styles from "./contact.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";

export default function Contact() {
  return (
    <ReactScrollElement name="contact" className={styles.contact}>
      <motion.div className={styles.headingRow} {...animationOptions}>
        <div className={styles.headingColumn}>
          <h2>Get In Touch</h2>
        </div>
      </motion.div>
      <motion.div className={styles.mainRow} {...animationOptions}>
        <div className={styles.mainColumn}>
          <p className={styles.email}>
            <a href="mailto:me@alexkio.com" target="_blank">
              me@alexkio.com
            </a>
          </p>
          <p className={styles.description}>
            I'm happy to connect, listen and help. Let's work together and build
            something awesome.{" "}
            <a href="mailto:me@alexkio.com" target="_blank">
              Email Me
            </a>
            .
          </p>
        </div>
      </motion.div>
      <motion.div className={styles.infos} {...animationOptions}>
        <div className={styles.professionalInfo}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/alexkio/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/alexmkio" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </ReactScrollElement>
  );
}
