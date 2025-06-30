import {
  DateField as ReactAriaDateField,
  Label,
  DateInput,
  DateSegment,
  Text,
  FieldError
} from 'react-aria-components';
import { DateFieldProps } from './DateField.interface';
import styles from './DateField.module.scss';

export function DateField<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>(
  props: DateFieldProps<T>
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
    <ReactAriaDateField
      {...restProps}
      className={`${styles.dateField} ${className}`}
    >
      {label && <Label className={styles.label}>{label}</Label>}

      <DateInput className={styles.dateInput}>
        {segment => <DateSegment segment={segment} className={styles.dateSegment} />}
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
    </ReactAriaDateField>
  );
}
