"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./styles/HeroImg.module.scss";

const slides = [
  {
    src: "/heroPhoto1.jpg",
    title: "Elit Aluminyum",
    desc: "Cephe sistemlerinde öncü.",
  },
  {
    src: "/heroPhoto2.jpg",
    title: "Estetik ve Güvenlik",
    desc: "Yenilikçi çözümler sunar.",
  },
];

export default function HeroImg() {
  return (
    <Swiper loop={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={styles.heroSlide}>
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority
              style={{ objectFit: "cover", zIndex: 0 }}
            />
            <div className={styles.textOverlay}>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
