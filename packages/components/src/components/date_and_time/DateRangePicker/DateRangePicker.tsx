import {
  DateRangePicker as ReactAriaDateRangePicker,
  Label,
  Group,
  DateInput,
  DateSegment,
  Button,
  Popover,
  Dialog,
  RangeCalendar,
  Heading,
  CalendarGrid,
  CalendarCell,
  Text,
  FieldError
} from 'react-aria-components';
import { DateRangePickerProps } from './DateRangePicker.interface';
import styles from './DateRangePicker.module.scss';

export function DateRangePicker<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>(
  props: DateRangePickerProps<T>
) {
  const {
    label,
    description,
    errorMessage,
    className = '',
    children,
    ...restProps
  } = props;

  return (
    <ReactAriaDateRangePicker
      {...restProps}
      className={`${styles.dateRangePicker} ${className}`}
    >
      {label && <Label className={styles.label}>{label}</Label>}

      <Group className={styles.group}>
        <DateInput slot="start" className={styles.dateInput}>
          {segment => <DateSegment segment={segment} className={styles.dateSegment} />}
        </DateInput>
        <span aria-hidden="true" className={styles.separator}>–</span>
        <DateInput slot="end" className={styles.dateInput}>
          {segment => <DateSegment segment={segment} className={styles.dateSegment} />}
        </DateInput>
        <Button className={styles.button}>
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
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </Button>
      </Group>

      {description && (
        <Text slot="description" className={styles.description}>
          {description}
        </Text>
      )}

      {errorMessage && (
        <FieldError className={styles.error}>
          {errorMessage}
        </FieldError>
      )}

      <Popover className={styles.popover}>
        <Dialog className={styles.dialog}>
          <RangeCalendar className={styles.calendar}>
            <header className={styles.calendarHeader}>
              <Button slot="previous" className={styles.navButton}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6" />
                </svg>
              </Button>
              <Heading className={styles.heading} />
              <Button slot="next" className={styles.navButton}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </Button>
            </header>
            <CalendarGrid className={styles.calendarGrid}>
              {date => <CalendarCell date={date} className={styles.calendarCell} />}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>

      {children}
    </ReactAriaDateRangePicker>
  );
}
