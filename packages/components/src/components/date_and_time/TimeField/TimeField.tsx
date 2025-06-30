import {
  TimeField as ReactAriaTimeField,
  Label,
  DateInput,
  DateSegment,
  Text,
  FieldError
} from 'react-aria-components';
import { TimeFieldProps } from './TimeField.interface';
import styles from './TimeField.module.scss';

export function TimeField<T extends import('react-aria-components').TimeValue = import('react-aria-components').TimeValue>(
  props: TimeFieldProps<T>
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
    <ReactAriaTimeField
      {...restProps}
      className={`${styles.timeField} ${className}`}
    >
      {label && <Label className={styles.label}>{label}</Label>}

      <DateInput className={styles.timeInput}>
        {segment => <DateSegment segment={segment} className={styles.timeSegment} />}
      </DateInput>

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

      {children}
    </ReactAriaTimeField>
  );
}
