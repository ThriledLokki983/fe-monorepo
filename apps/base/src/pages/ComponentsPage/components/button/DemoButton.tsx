import { Button } from '@mono/components';
import styles from './DemoButton.module.scss';

export const DemoButton = () => {
  return (
    <div className={styles.componentShowcase}>
      <div className={styles.variantGroup}>
        <h4>Variants</h4>
        <div className={styles.componentRow}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div className={styles.variantGroup}>
        <h4>Sizes</h4>
        <div className={styles.componentRow}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
      <div className={styles.variantGroup}>
        <h4>States</h4>
        <div className={styles.componentRow}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isDisabled>isDisabled (React Aria)</Button>
        </div>
      </div>
      <div className={styles.variantGroup}>
        <h4>Event Handling</h4>
        <div className={styles.componentRow}>
          <Button onClick={() => alert('onClick fired!')}>onClick (React)</Button>
          <Button onPress={() => alert('onPress fired!')}>onPress (React Aria)</Button>
        </div>
      </div>
    </div>
  );
}
