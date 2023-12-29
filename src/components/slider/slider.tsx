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
              We have worked on group projects together, where his strengths
              that stood out were empathy, hard work, reliability, explaining,
              and problem-solving. Alex is a bright, creative, detail-oriented
              person, for whom I have great respect when it comes to both
              personality and technical skills. Any workplace would be lucky to
              have him on their team.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/hayley.webp"
                width={512}
                height={512}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Hayley Witherell</strong>
                <span>Software Engineer, IDBS</span>
              </cite>
            </div>
          </article>
          <article>
            <p>
              Alex was able to really quickly pick up on what I could do to make
              my proposal successful. I left the meeting with concrete steps to
              move forward with my proposal and knowledge of new technologies to
              consider to make the features I was considering work! Alex has an
              ability to actively listen, pick up on the details of your needs,
              and articulate technical concepts very clearly. Alex is truly a
              collaborative and empathetic teammate.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/stephanie.webp"
                width={200}
                height={200}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Stephanie Magdic</strong>
                <span>Software Engineer, Recurly</span>
              </cite>
            </div>
          </article>
          <article>
            <p>
              He{"'"}s been reliable, knowledgeable, enthusiastic, and kind in
              all my interactions with him. Even when he had a full plate with
              his own studies, he could be counted on to reply quickly and
              thoroughly to any message or question sent his way. Not only would
              he provide excellent, understandable explanations of concepts, he
              would also follow up to ensure understanding or to answer any
              other questions that might have arisen.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/megan.webp"
                width={512}
                height={512}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Megan McBride</strong>
                <span>Software Developer, TOFWERK</span>
              </cite>
            </div>
          </article>
          <article>
            <p>
              He is a natural-born leader that guides with compassion and
              kindness. Whenever there is a question asked or help requested in
              our support slack channel, Alex is consistently the first person
              to respond and offer assistance.
            </p>
            <div className={styles.info}>
              <Image
                src="/assets/images/nina.webp"
                width={200}
                height={200}
                alt="Author image"
                className={styles.avatar}
              />
              <cite className={styles.cite}>
                <strong>Nina Brissey</strong>
                <span>Software Developer, Thoughtworks</span>
              </cite>
            </div>
          </article>
        </Slider>
      </motion.div>
    </section>
  );
}
