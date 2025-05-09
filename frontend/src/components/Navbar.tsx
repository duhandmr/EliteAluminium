import Link from "next/link";

import styles from "./styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">ANA SAYFA</Link>
        </li>
        <li>
          <Link href="/kurumsal">KURUMSAL</Link>
        </li>
        <li>
          <Link href="/hizmetler">HİZMETLERİMİZ</Link>
        </li>
        <li>
          <Link href="/projeler">PROJELERİMİZ</Link>
        </li>
        <li>
          <Link href="/galeri">GALERİ</Link>
        </li>
        <li>
          <Link href="/cozum-ortaklar">ÇÖZÜM ORTAKLARIMIZ</Link>
        </li>
        <li>
          <Link href="/belgeler">BELGELERİMİZ</Link>
        </li>
        <li>
          <Link href="/iletisim">İLETİŞİM</Link>
        </li>
      </ul>
    </nav>
  );
}
