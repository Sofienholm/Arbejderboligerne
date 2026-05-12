import { motion } from "framer-motion";
import styles from "./styles/Screen0.module.css";
import starStyles from "../FamilyIntroScreens.module.css";

import holger from "../../../assets/images/familie/holger-cirkel.svg";
import jytte from "../../../assets/images/familie/jytte-cirkel.svg";
import niels from "../../../assets/images/familie/niels-cirkel.svg";
import hanne from "../../../assets/images/familie/hanne-cirkel.svg";

import star2 from "../../../assets/images/illustrations/star2.svg";
import star4 from "../../../assets/images/illustrations/star4.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star13 from "../../../assets/images/illustrations/star13.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

const familyMembers = [
  {
    name: "Holger Hansen",
    age: "28 år",
    role: "TYPOGRAF VED HORSENS FOLKEBLAD",
    image: holger,
  },
  {
    name: "Jytte Hansen",
    age: "26 år",
    role: "HJEMMEGÅENDE",
    image: jytte,
  },
  {
    name: "Niels Hansen",
    age: "8 år",
    role: "GÅR I 2 KLASSE",
    image: niels,
  },
  {
    name: "Hanne Hansen",
    age: "6 år",
    role: "GÅR I 0 KLASSE",
    image: hanne,
  },
];

export default function Screen0() {
  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s1_s8}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s2}`}
        initial={{ y: "-120%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s13}`}
        initial={{ x: "120%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star13} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s16}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star16} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s4}`}
        initial={{ y: "120%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star4} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        FAMILIEN HANSEN
      </motion.h1>

      <div className={styles.familyList}>
        {familyMembers.map((person, index) => (
          <motion.div
            key={person.name}
            className={styles.person}
            initial={{ x: "120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8 + index * 0.35,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <img src={person.image} alt={person.name} />

            <div>
              <h2>{person.name}</h2>
              <h3>{person.age}</h3>
              <p>{person.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.swipeText}
        initial={{ y: "120%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <p>
          SWIPE FOR AT LÆRER MERE <br />
          OM DERES HVERDAG OG LIV
        </p>
        <span>↑</span>
      </motion.div>
    </section>
  );
}