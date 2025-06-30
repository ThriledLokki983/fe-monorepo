import { Icon } from "@mono/components";
import styles from './DemoIcon.module.scss';

export const DemoIcon = () => {
  return (
    <div className={styles.componentShowcase}>
      <div className={styles.variantGroup}>
        <h4>Available Icons</h4>
        <div className={styles.componentRow}>
          <div className={styles.iconDemo}>
            <Icon name="home" />
            <span>home</span>
          </div>
          <div className={styles.iconDemo}>
            <Icon name="user" />
            <span>user</span>
          </div>
          <div className={styles.iconDemo}>
            <Icon name="settings" />
            <span>settings</span>
          </div>
          <div className={styles.iconDemo}>
            <Icon name="heart" />
            <span>heart</span>
          </div>
          <div className={styles.iconDemo}>
            <Icon name="star" />
            <span>star</span>
          </div>
        </div>
      </div>
      <div className={styles.variantGroup}>
        <h4>Sizes</h4>
        <div className={styles.componentRow}>
          <Icon name="home" size={16} />
          <Icon name="home" size={24} />
          <Icon name="home" size={32} />
          <Icon name="home" size={48} />
        </div>
      </div>
    </div>
  );
}
