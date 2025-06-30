import {
  RangeCalendar as ReactAriaRangeCalendar,
  Heading,
  Button,
  CalendarGrid,
  CalendarCell
} from 'react-aria-components';
import { RangeCalendarProps } from './RangeCalendar.interface';
import styles from './RangeCalendar.module.scss';

export function RangeCalendar<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>(
  props: RangeCalendarProps<T>
) {
  const {
    className = '',
    children,
    ...restProps
  } = props;

  return (
    <ReactAriaRangeCalendar
      {...restProps}
      className={`${styles.rangeCalendar} ${className}`}
    >
      <header className={styles.calendarHeader}>
        <Button slot="previous" className={styles.navButton}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </Button>
        <Heading className={styles.heading} />
        <Button slot="next" className={styles.navButton}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </Button>
      </header>

      <CalendarGrid className={styles.calendarGrid}>
        {date => <CalendarCell date={date} className={styles.calendarCell} />}
      </CalendarGrid>

      {children}
    </ReactAriaRangeCalendar>
  );
}
