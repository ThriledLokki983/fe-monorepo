import React from 'react';
import {
  NumberField as ReactAriaNumberField,
  Label,
  Group,
  Input,
  Button,
  Text,
  FieldError
} from 'react-aria-components';
import styles from './NumberField.module.scss';
import { NumberFieldProps } from './NumberField.interface';

/**
 * NumberField component based on React Aria NumberField
 *
 * A number field allows users to enter and modify numeric values with stepper buttons
 * for incrementing and decrementing. Supports internationalized number formatting,
 * validation, and accessibility features. Built on top of React Aria's NumberField
 * for robust accessibility and interaction support.
 *
 * @example
 * ```tsx
 * // Basic number field
 * <NumberField
 *   label="Age"
 *   placeholder="Enter your age"
 *   minValue={0}
 *   maxValue={120}
 * />
 *
 * // Currency field
 * <NumberField
 *   label="Price"
 *   defaultValue={29.99}
 *   formatOptions={{
 *     style: 'currency',
 *     currency: 'USD'
 *   }}
 * />
 *
 * // Percentage field
 * <NumberField
 *   label="Discount"
 *   defaultValue={0.15}
 *   formatOptions={{
 *     style: 'percent'
 *   }}
 * />
 *
 * // Controlled number field with validation
 * <NumberField
 *   label="Quantity"
 *   value={quantity}
 *   onChange={setQuantity}
 *   minValue={1}
 *   maxValue={100}
 *   step={1}
 *   isRequired
 *   isInvalid={quantity > 50}
 *   errorMessage="Quantity cannot exceed 50"
 * />
 * ```
 */
export const NumberField: React.FC<NumberFieldProps> = ({
  label,
  placeholder,
  description,
  errorMessage,
  size = 'medium',
  variant = 'default',
  className = '',
  labelClassName = '',
  groupClassName = '',
  inputClassName = '',
  incrementButtonClassName = '',
  decrementButtonClassName = '',
  descriptionClassName = '',
  errorClassName = '',
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  value,
  defaultValue,
  onChange,
  name,
  minValue,
  maxValue,
  step = 1,
  formatOptions,
  autoFocus = false,
  incrementButtonContent = '+',
  decrementButtonContent = '−',
  showStepperButtons = true,
  inputMode,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...rest
}) => {
  // Combine class names
  const numberFieldClasses = [
    styles.numberField,
    className
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.label,
    labelClassName
  ].filter(Boolean).join(' ');

  const groupClasses = [
    styles.group,
    styles[size],
    styles[variant],
    groupClassName
  ].filter(Boolean).join(' ');

  const inputClasses = [
    styles.input,
    styles[size],
    inputClassName
  ].filter(Boolean).join(' ');

  const stepperButtonClasses = [
    styles.stepperButton,
    styles[size]
  ].filter(Boolean).join(' ');

  const decrementButtonClasses = [
    stepperButtonClasses,
    styles.decrementButton,
    decrementButtonClassName
  ].filter(Boolean).join(' ');

  const incrementButtonClasses = [
    stepperButtonClasses,
    styles.incrementButton,
    incrementButtonClassName
  ].filter(Boolean).join(' ');

  const descriptionClasses = [
    styles.description,
    descriptionClassName
  ].filter(Boolean).join(' ');

  const errorClasses = [
    styles.errorMessage,
    errorClassName
  ].filter(Boolean).join(' ');

  return (
    <ReactAriaNumberField
      className={numberFieldClasses}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      isInvalid={isInvalid}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      formatOptions={formatOptions}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      {...rest}
    >
      {label && (
        <Label className={labelClasses}>
          {label}
          {isRequired && <span aria-hidden="true"> *</span>}
        </Label>
      )}

      <Group className={groupClasses}>
        {showStepperButtons && (
          <Button
            slot="decrement"
            className={decrementButtonClasses}
            aria-label="Decrease value"
          >
            {decrementButtonContent}
          </Button>
        )}

        <Input
          className={inputClasses}
          placeholder={placeholder}
          autoFocus={autoFocus}
          inputMode={inputMode}
        />

        {showStepperButtons && (
          <Button
            slot="increment"
            className={incrementButtonClasses}
            aria-label="Increase value"
          >
            {incrementButtonContent}
          </Button>
        )}
      </Group>

      {description && (
        <Text slot="description" className={descriptionClasses}>
          {description}
        </Text>
      )}

      <FieldError className={errorClasses}>
        {errorMessage}
      </FieldError>
    </ReactAriaNumberField>
  );
};
