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
            <a href="mailto:#0" target="_blank">
              hello@epitome.com
            </a>
          </p>
          <p className={styles.description}>
            I'm happy to connect, listen and help. Let's work together and build
            something awesome. Let's turn your idea to an even greater product.{" "}
            <a href="mailto:#0" target="_blank">
              Email Me
            </a>
            .
          </p>
        </div>
      </motion.div>
      <motion.div className={styles.infos} {...animationOptions}>
        <div className={styles.socialInfo}>
          <h3>Call Me</h3>
          <a href="tel:197-543-2345">+197 543 2345</a>
        </div>
        <div className={styles.professionalInfo}>
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#0" title="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#0" title="Twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="#0" title="Instagram">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </ReactScrollElement>
  );
}
