import Link from "next/link";
import { HERO_TEXT } from "@/lib/constants";
import styles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLabel}>{HERO_TEXT.LABEL}</div>
        <h1 className={styles.heroTitle}>
          {HERO_TEXT.TITLE_PART_1}<br />
          <span className={styles.heroAccent}>{HERO_TEXT.TITLE_PART_2}</span>
        </h1>
        <p className={styles.heroDesc}>
          Відкрийте світ дизайнерських годинників від провідних швейцарських
          та японських майстрів. Кожен годинник — це витвір мистецтва.
        </p>
        <div className={styles.heroBtns}>
          <Link href="/catalog" className="btn btn-primary">
            Переглянути каталог
          </Link>
          <Link href="/news" className="btn btn-secondary">
            Читати новини
          </Link>
        </div>
      </div>
      <div className={styles.heroDecor}>
        <div className={styles.heroWatch}>⌚</div>
        <div className={styles.heroRing1} />
        <div className={styles.heroRing2} />
      </div>
    </section>
  );
}
