import styles from "./selected-works.module.scss";
import Image from "next/image";
import { Element as ReactScrollElement } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";

export default function SelectedWorks() {
  return (
    <ReactScrollElement name="works" className={styles.selectedWorks}>
      <motion.div className={styles.headingRow} {...animationOptions}>
        <div className={styles.headingColumn}>
          <h2>Selected Works</h2>
          <p className={styles.sectionDescription}>
            Here are some of my selected works I have done lately. Feel free to
            check them out.
          </p>
        </div>
      </motion.div>
      <div className={styles.masonry}>
        <motion.div className={styles.brick} {...animationOptions}>
          <div className={styles.item}>
            <div className={styles.thumb}>
              <Link href="#intro">
                <Image
                  src="/assets/images/city-building.jpg"
                  width={600}
                  height={600}
                  alt="alt text"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>City Building</h3>
              <p className={styles.subtitle}>Branding</p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.brick} {...animationOptions}>
          <div className={styles.item}>
            <div className={styles.thumb}>
              <Link href="#intro">
                <Image
                  src="/assets/images/the-beetle.jpg"
                  width={600}
                  height={600}
                  alt="alt text"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>The Beetle</h3>
              <p className={styles.subtitle}>Web Development</p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.brick} {...animationOptions}>
          <div className={styles.item}>
            <div className={styles.thumb}>
              <Link href="#intro">
                <Image
                  src="/assets/images/lamp.jpg"
                  width={600}
                  height={600}
                  alt="alt text"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>Lamp</h3>
              <p className={styles.subtitle}>Web Design</p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.brick} {...animationOptions}>
          <div className={styles.item}>
            <div className={styles.thumb}>
              <Link href="#intro">
                <Image
                  src="/assets/images/woodcraft.jpg"
                  width={600}
                  height={600}
                  alt="alt text"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>Woodcraft</h3>
              <p className={styles.subtitle}>Web Design</p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.brick} {...animationOptions}>
          <div className={styles.item}>
            <div className={styles.thumb}>
              <Link href="#intro">
                <Image
                  src="/assets/images/shutterbug.jpg"
                  width={600}
                  height={600}
                  alt="alt text"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>Shutterbug</h3>
              <p className={styles.subtitle}>Branding</p>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.brick} {...animationOptions}>
          <div className={styles.item}>
            <div className={styles.thumb}>
              <Link href="#intro">
                <Image
                  src="/assets/images/fuji.jpg"
                  width={600}
                  height={600}
                  alt="alt text"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>Fuji</h3>
              <p className={styles.subtitle}>Web Design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </ReactScrollElement>
  );
}
