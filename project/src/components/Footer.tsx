import Link from "next/link";
import styles from "./Footer.module.css";
import { APP_NAME, APP_TAGLINE, APP_COPYRIGHT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>⌚ {APP_NAME}</div>
          <p className={styles.tagline}>{APP_TAGLINE}</p>
        </div>
        <div className={styles.links}>
          <div className={styles.group}>
            <div className={styles.groupTitle}>Каталог</div>
            <Link href="/catalog?category=classic">Класичні</Link>
            <Link href="/catalog?category=sport">Спортивні</Link>
            <Link href="/catalog?category=chronograph">Хронографи</Link>
            <Link href="/catalog?category=diver">Дайверські</Link>
          </div>
          <div className={styles.group}>
            <div className={styles.groupTitle}>Інформація</div>
            <Link href="/news">Новини</Link>
            <Link href="/auth/login">Вхід</Link>
            <Link href="/auth/register">Реєстрація</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span>{APP_COPYRIGHT}</span>
        </div>
      </div>
    </footer>
  );
}
