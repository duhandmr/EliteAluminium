"use client";

import Link from "next/link";
import styles from "./styles/TopHeader.module.scss";

import {
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader__left}>
        <Link href="#">
          <FaInstagram size={16} />
        </Link>
        <Link href="#">
          <FaTwitter size={16} />
        </Link>
        <Link href="#">
          <FaFacebook size={16} />
        </Link>
        <Link href="#">
          <FaLinkedin size={16} />
        </Link>
      </div>

      <div className={styles.topHeader__right}>
        <div className={styles["topHeader__right-item"]}>
          <FaPhone size={16} />
          <p>0 (212) 000 00 00</p>
        </div>
        <div className={styles["topHeader__right-item"]}>
          <FaMailBulk size={16} />
          <p>info@elitaluminyum.com</p>
        </div>
      </div>
    </div>
  );
}
