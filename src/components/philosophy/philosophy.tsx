import styles from "./philosophy.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";

export default function Philosophy() {
  return (
    <ReactScrollElement name="philosophy" className={styles.philosophy}>
      <div className={styles.overlay}></div>
      <motion.div className={styles.headingRow} {...animationOptions}>
        <div className={styles.headingColumn}>
          <h2>Development Philosophy</h2>
          <p className={styles.sectionDescription}>
            I am passionate about creating engaging and accessible software that
            is scalable, performant, and robust.
          </p>
        </div>
      </motion.div>
      <div className={styles.philosophyList}>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Collaborative</h3>
            <p>
              I firmly believe that the cornerstone of any project's success
              lies in the art of effective communication and collaboration. I
              show up to every Agile ceremony prepared and engaged, am readily
              available to my team, and I consistently advocate for both the
              client and my peers.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Accessible</h3>
            <p>
              Companies that prioritize accessibility demonstrate social
              responsibility and inclusivity. Using semantic HTML, incorporating
              ARIA roles and attributes where applicable, providing focus
              states, and ensuring ample color contrast are some of the ways
              that I ensure my applications are accessible to all users
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Scalable</h3>
            <p>
              Writing modular code ensures that a codebase remains maintainable,
              adaptable, and efficient as a project grows. Employing a
              component-based architecture and upholding principles such as
              "Don't Repeat Yourself" (DRY) and the Single Responsibility
              Principle are key strategies I employ to achieve this goal.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Performant</h3>
            <p>
              Optimized code directly impacts the user experience and search
              engine visibility leading to increased conversion rates.
              Minimizing HTTP requests, incorporating SSR, SSG, and ISR when
              applicable, leveraging SWR, optimizing assets, writing efficient
              CSS, code splitting and minification all contribute to these
              positive outcomes.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Tested</h3>
            <p>
              Tests provide confidence in code correctness, save time and costs,
              contribute to project scalability, and serve as living
              documentation. Additionally, they play a crucial role in
              preventing regressions and assuring a positive user experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Responsive</h3>
            <p>
              Responsive design anticipates and accommodates the diversity of
              devices, future-proofing websites and applications. This ensures a
              consistent and positive user experience across various devices and
              screen sizes.
            </p>
          </div>
        </motion.div>
      </div>
    </ReactScrollElement>
  );
}
