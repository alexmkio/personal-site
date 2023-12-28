import styles from "./about.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";

export default function About() {
  return (
    <ReactScrollElement name="about" className={styles.about}>
      <div>
        <motion.div className={styles.headingRow} {...animationOptions}>
          <div className={styles.headingColumn}>
            <h2>About Me</h2>
          </div>
        </motion.div>
        <motion.div className={styles.aboutMeRow} {...animationOptions}>
          <div className={styles.aboutMeColumn}>
            <p>
              I am a compassionate and forward-thinking software engineer,
              driven by a passion for problem-solving. Whether backpacking
              across mountain ranges or navigating the dynamic landscape of
              software engineering, I consistently embrace opportunities for
              growth and learning.
            </p>
            <p>
              Having graduated from the University of Florida in 2009 with a
              Bachelor of Arts in Political Science, I transitioned into a
              career as a software developer by completing the certificate
              program in Front-End Engineering at the Turing School of Software
              and Design. Proficient in Test-Driven Development, HTML, CSS,
              JavaScript, TypeScript, and React, I am committed to delivering
              well-tested, responsive, and accessible web experiences.
            </p>
            <p>
              In my current role as a Developer at Rightpoint, I have played a
              pivotal role in diverse projects, including the Iron Mountain
              website redesign and the development of the Ogletree Deakins
              client portal. My expertise spans Next.js, Storybook, Radix,
              Framer Motion, Contentful, React Hook Form with Yup, React Query,
              and more, reflecting a commitment to staying at the forefront of
              cutting-edge technologies.
            </p>
            <p>
              What I find most exhilarating about software engineering is the
              infinite array and variety of challenges that present themselves.
              I thrive on breaking down complex problems into manageable
              components and chipping away until a solution emerges. Currently I
              {"'"}m pursuing a certification with Contentful and expanding my
              skills in React Native, Ruby, and Go. I am excited about the
              endless possibilities that lie ahead in this ever-evolving field.
              Let's connect and explore how we can create impactful and
              innovative solutions together.
            </p>
          </div>
        </motion.div>
        <div className={styles.aboutMeButtons}>
          <motion.div {...animationOptions}>
            <ReactScrollLink
              className={styles.btnStroke}
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
            >
              Contact Me
            </ReactScrollLink>
          </motion.div>
          <motion.div {...animationOptions}>
            <Link
              href="/resume.pdf"
              target="_blank"
              className={styles.btnPrimary}
            >
              View CV
            </Link>
          </motion.div>
        </div>
      </div>

      <div>
        <motion.div className={styles.headingRow} {...animationOptions}>
          <div className={styles.headingColumn}>
            <h2>Work & Education</h2>
          </div>
        </motion.div>
        <div className={styles.experienceRow}>
          <motion.div className={styles.experienceColumn} {...animationOptions}>
            <div className={styles.timeline}>
              <div className={styles.iconWrap}>
                <span className={styles.workIcon}></span>
              </div>
              <div className={styles.block}>
                <div className={styles.bullet}></div>
                <div className={styles.header}>
                  <p className={styles.timeframe}>January 2022 - Present</p>
                  <h3 className={styles.name}>Rightpoint</h3>
                  <h4>Software Developer</h4>
                </div>
                <p className={styles.timeframe}>June 2023 - Present</p>
                <p>
                  <a
                    href="https://www.rightpoint.com/work/iron-mountain"
                    target="_blank"
                  >
                    Iron Mountain website redesign
                  </a>
                  . We're creating a large component library using Next.js,
                  Storybook, and Framer Motion. This library will be consumed by
                  an instance of Sitecore Experience Manager and deployed across
                  sixty international websites, some of which feature
                  right-to-left orientation.
                </p>
                <p className={styles.timeframe}>January 2023 - June 2023</p>
                <p>
                  <a
                    href="https://ogletree.com/media-center/press-releases/2023-08-21/ogletree-deakins-unveils-client-portal/"
                    target="_blank"
                  >
                    Ogletree Deakins' secure client portal
                  </a>
                  . A Next.js application utilizing Contentful CMS, NextAuth,
                  RTL & Jest, Sass, React Hook Form with Yup, React Table
                  (Tanstack), React Query w/ Axios, & Radix UI components to
                  deliver a secure front door to the firm{"'"}s valuable
                  client-facing tools and content..
                </p>
                <p className={styles.timeframe}>
                  February 2022 - December 2022
                </p>
                <p>
                  Talent support role on{" "}
                  <a href="https://www.unqork.com/" target="_blank">
                    Unqork
                  </a>
                  's Design Services team. Unqork is a "no-code" application
                  development solution used by the likes of Goldman Sachs,
                  Liberty Mutual, and the Cities of New York, Chicago and
                  Washington DC.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet}></div>
                <div className={styles.header}>
                  <p className={styles.timeframe}>December 2017 - March 2021</p>
                  <h3 className={styles.name}>University of Florida</h3>
                  <h4>Manager of Operations</h4>
                </div>
                <p>
                  I was responsible for overseeing the daily operations of
                  several National Institutes of Health (NIH) programs, which
                  included assisting in process development and refinement,
                  creating SOPs and procedure manuals, training employees,
                  conducting quality-control audits, handling client services,
                  and inventory management.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet}></div>
                <div className={styles.header}>
                  <p className={styles.timeframe}>June 2016 - November 2017</p>
                  <h3 className={styles.name}>Rocky Mountain Labs</h3>
                  <h4>Laboratory Support Specialist</h4>
                </div>
                <p>
                  My responsibilities encompassed the comprehensive design of a
                  startup clinical pathology clinic, involving the creation of a
                  networked office suite that interfaced clinical equipment with
                  the Schuylab Laboratory Information System. Additionally, I
                  developed a secure and responsive company website, deployed a
                  locally-hosted PBX telephony system, and customized Vtiger
                  Customer Relationship Management (CRM) software to facilitate
                  inventory management, scheduling, invoicing, and marketing. I
                  also designed courier service routes and procedure manuals for
                  streamlined operational efficiency.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.experienceColumn} {...animationOptions}>
            <div className={styles.timeline}>
              <div className={styles.iconWrap}>
                <span className={styles.educationIcon}></span>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet}></div>
                <div className={styles.header}>
                  <p className={styles.timeframe}>March 2021 - October 2021</p>
                  <h3 className={styles.name}>
                    Turing School of Software & Design
                  </h3>
                  <h4>Certificate in Front-End Software Engineering</h4>
                </div>
                <p>
                  Turing is the sole{" "}
                  <a
                    href="https://ope.ed.gov/dapip/#/institution-profile/251075"
                    target="_blank"
                  >
                    accredited
                  </a>{" "}
                  web development bootcamp in the U.S., offering intensive
                  seven-month-long software development programs. Their
                  Front-End program focuses on communication, collaboration,
                  technical proficiency, and workflow best practices,
                  incorporating user stories, wireframing, issue management,
                  continuous integration/continuous deployment (CI/CD),
                  test-driven development (TDD), and code review. The tech stack
                  for the Front-End program includes HTML, CSS, JavaScript,
                  TypeScript, React, and Cypress.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet}></div>
                <div className={styles.header}>
                  <p className={styles.timeframe}>January 2007 - May 2009</p>
                  <h3 className={styles.name}>University of Florida</h3>
                  <h4>Bachelor's Degree</h4>
                </div>
                <p>
                  I graduated from the University of Florida with a Bachelor of
                  Arts in Political Science and a minor in African Studies.
                  During my academic tenure, I was an active member of our
                  award-winning Model United Nations team and served as a board
                  member for the Beta Gamma Chapter of Pi Sigma Alpha, the
                  National Political Science Honor Society.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ReactScrollElement>
  );
}
