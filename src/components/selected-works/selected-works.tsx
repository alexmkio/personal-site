import Image from "next/image";
import { Element as ReactScrollElement } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";
import plusIcon from "../../../public/assets/icons/icon-plus.svg";
import cityBuilding from "../../../public/assets/images/city-building.webp";
import car from "../../../public/assets/images/the-beetle.webp";
import lamp from "../../../public/assets/images/lamp.webp";
import woodcraft from "../../../public/assets/images/woodcraft.webp";
import shutterbug from "../../../public/assets/images/shutterbug.webp";
import fuji from "../../../public/assets/images/fuji.webp";
import styles from "./selected-works.module.scss";

export default function SelectedWorks() {
  return (
    <ReactScrollElement name="works" className={styles["selected-works"]}>
      <motion.div className={styles["heading-row"]} {...animationOptions}>
        <div className={styles["heading-column"]}>
          <h2>Selected Works</h2>
          <p className={styles["section-description"]}>
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
                <Image src={cityBuilding} alt="alt text" />
                <Image
                  src={plusIcon}
                  alt="plus icon"
                  className={styles["plus-icon"]}
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
                <Image src={car} alt="alt text" />
                <Image
                  src={plusIcon}
                  alt="plus icon"
                  className={styles["plus-icon"]}
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
                <Image src={lamp} alt="alt text" />
                <Image
                  src={plusIcon}
                  alt="plus icon"
                  className={styles["plus-icon"]}
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
                <Image src={woodcraft} alt="alt text" />
                <Image
                  src={plusIcon}
                  alt="plus icon"
                  className={styles["plus-icon"]}
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
                <Image src={shutterbug} alt="alt text" />
                <Image
                  src={plusIcon}
                  alt="plus icon"
                  className={styles["plus-icon"]}
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
                <Image src={fuji} alt="alt text" />
                <Image
                  src={plusIcon}
                  alt="plus icon"
                  className={styles["plus-icon"]}
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
