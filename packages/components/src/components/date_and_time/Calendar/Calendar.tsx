import {
  Calendar as ReactAriaCalendar,
  Heading,
  Button,
  CalendarGrid,
  CalendarCell,
  Text
} from 'react-aria-components';
import { CalendarProps } from './Calendar.interface';
import styles from './Calendar.module.scss';

export function Calendar<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>(
  props: CalendarProps<T>
) {
  const {
    errorMessage,
    className = '',
    children,
    ...restProps
  } = props;

  return (
    <ReactAriaCalendar
      {...restProps}
      className={`${styles.calendar} ${className}`}
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

      {errorMessage && (
        <Text slot="errorMessage" className={styles.error}>
          {errorMessage}
        </Text>
      )}

      {children}
    </ReactAriaCalendar>
  );
}
