"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import styles from "./slider.module.scss";
import { animationOptions } from "../../utils/constants";

export default function Carousel() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    autoplaySpeed: 1500,
    fade: true,
    cssEase: "linear",
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | React.PromiseLikeOfReactNode
        | null
        | undefined
    ) => <ul className={styles.slickDots}>{dots}</ul>,
    customPaging: (i: number) => (
      <button className={styles.slickButton}>{i + 1}</button>
    ),
  };
  return (
    <section className={styles.testimonials}>
      <motion.div className={styles.headingRow} {...animationOptions}>
        <Slider {...settings} className={styles.headingColumn}>
          <article>
            <p>
              Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.
              Voluptas tempore rem. Explicabo a quaerat sint autem dolore
              ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil
              nostrum. Laudantium quia consequatur molestias delectus culpa.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/user-01.webp"
                width={300}
                height={300}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Tim Cook</strong>
                <span>CEO, Apple</span>
              </cite>
            </div>
          </article>
          <article>
            <p>
              Excepturi nam cupiditate culpa doloremque deleniti repellat.
              Veniam quos repellat voluptas animi adipisci. Nisi eaque
              consequatur. Voluptatem dignissimos ut ducimus accusantium
              perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/user-02.webp"
                width={300}
                height={300}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Sundar Pichai</strong>
                <span>CEO, Google</span>
              </cite>
            </div>
          </article>
          <article>
            <p>
              Repellat dignissimos libero. Qui sed at corrupti expedita voluptas
              odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque
              officia cum exercitationem sunt voluptatum accusamus. Quasi
              voluptas eius distinctio. Voluptatem dignissimos ut.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/user-03.webp"
                width={300}
                height={300}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Satya Nadella</strong>
                <span>CEO, Microsoft</span>
              </cite>
            </div>
          </article>
        </Slider>
      </motion.div>
    </section>
  );
}
