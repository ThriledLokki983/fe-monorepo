import React from 'react';
import {
  RadioGroup as ReactAriaRadioGroup,
  Label,
  Text,
  FieldError,
} from 'react-aria-components';
import styles from './RadioGroup.module.scss';
import {
  RadioGroupProps,
  RadioGroupLabelProps,
  RadioGroupDescriptionProps,
  RadioGroupErrorProps,
} from './RadioGroup.interface';

/**
 * Default label component for radio groups
 */
export const DefaultRadioGroupLabel: React.FC<RadioGroupLabelProps> = ({
  children,
  className = '',
  size = 'medium'
}) => {
  const labelClasses = [
    styles.radioGroupLabel,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Label className={labelClasses}>{children}</Label>;
};

/**
 * Default description component for radio groups
 */
export const DefaultRadioGroupDescription: React.FC<RadioGroupDescriptionProps> = ({
  children,
  className = '',
  size = 'medium'
}) => {
  const descriptionClasses = [
    styles.radioGroupDescription,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Text slot="description" className={descriptionClasses}>
      {children}
    </Text>
  );
};

/**
 * Default error component for radio groups
 */
export const DefaultRadioGroupError: React.FC<RadioGroupErrorProps> = ({
  children,
  className = '',
  size = 'medium'
}) => {
  const errorClasses = [
    styles.radioGroupError,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <FieldError className={errorClasses}>{children}</FieldError>;
};

/**
 * RadioGroup component based on React Aria RadioGroup
 *
 * A radio group allows users to select a single item from a list of mutually exclusive options.
 * It provides accessibility features, validation support, and flexible styling.
 *
 * @example
 * ```tsx
 * // Basic radio group
 * <RadioGroup label="Favorite sport">
 *   <Radio value="soccer">Soccer</Radio>
 *   <Radio value="baseball">Baseball</Radio>
 *   <Radio value="basketball">Basketball</Radio>
 * </RadioGroup>
 *
 * // Controlled radio group
 * <RadioGroup
 *   label="Payment method"
 *   value={selectedPayment}
 *   onChange={setSelectedPayment}
 * >
 *   <Radio value="credit">Credit Card</Radio>
 *   <Radio value="debit">Debit Card</Radio>
 *   <Radio value="paypal">PayPal</Radio>
 * </RadioGroup>
 *
 * // Required radio group with validation
 * <RadioGroup
 *   label="Choose an option"
 *   isRequired
 *   errorMessage="Please select an option"
 * >
 *   <Radio value="yes">Yes</Radio>
 *   <Radio value="no">No</Radio>
 * </RadioGroup>
 *
 * // Horizontal layout
 * <RadioGroup
 *   label="Quick options"
 *   orientation="horizontal"
 * >
 *   <Radio value="yes">Yes</Radio>
 *   <Radio value="no">No</Radio>
 *   <Radio value="maybe">Maybe</Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  label,
  description,
  errorMessage,
  size = 'medium',
  orientation = 'vertical',
  className = '',
  labelClassName = '',
  descriptionClassName = '',
  errorClassName = '',
  radiosClassName = '',
  value,
  defaultValue,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  onChange,
  name,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const groupClasses = [
    styles.radioGroup,
    styles[size],
    styles[orientation],
    isInvalid && styles.invalid,
    isDisabled && styles.disabled,
    isReadOnly && styles.readOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const radiosClasses = [
    styles.radios,
    styles[orientation],
    radiosClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaRadioGroup
      {...props}
      className={groupClasses}
      value={value}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      isInvalid={isInvalid}
      onChange={onChange}
      name={name}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {label && (
        <DefaultRadioGroupLabel
          size={size}
          className={labelClassName}
        >
          {label}
          {isRequired && <span className={styles.required} aria-hidden="true">*</span>}
        </DefaultRadioGroupLabel>
      )}

      {description && (
        <DefaultRadioGroupDescription
          size={size}
          className={descriptionClassName}
        >
          {description}
        </DefaultRadioGroupDescription>
      )}

      <div className={radiosClasses}>
        {children}
      </div>

      <FieldError className={[styles.radioGroupError, styles[size], errorClassName].filter(Boolean).join(' ')}>
        {errorMessage}
      </FieldError>
    </ReactAriaRadioGroup>
  );
};

// Export the main components
export {
  type RadioGroupProps,
  type RadioGroupLabelProps,
  type RadioGroupDescriptionProps,
  type RadioGroupErrorProps,
} from './RadioGroup.interface';
