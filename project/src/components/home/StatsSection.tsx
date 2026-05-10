import { STATS } from "@/lib/constants";
import styles from "@/app/page.module.css";

interface StatsSectionProps {
  hasFeaturedProducts: boolean;
  brandsCount: number;
  categoriesCount: number;
}

export default function StatsSection({ hasFeaturedProducts, brandsCount, categoriesCount }: StatsSectionProps) {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <div className={styles.statNum}>{hasFeaturedProducts ? STATS.PREMIUM_MODELS_COUNT : "0"}</div>
            <div className={styles.statLabel}>Преміум моделей</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>{brandsCount}</div>
            <div className={styles.statLabel}>Провідних брендів</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>{categoriesCount}</div>
            <div className={styles.statLabel}>Категорій</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>{STATS.AUTHENTICITY_PERCENTAGE}</div>
            <div className={styles.statLabel}>Автентичні товари</div>
          </div>
        </div>
      </div>
    </section>
  );
}
