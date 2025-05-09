import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <TopHeader />
      <Navbar />
    </header>
  );
}
