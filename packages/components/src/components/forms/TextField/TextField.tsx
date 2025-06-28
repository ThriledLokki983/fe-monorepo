import React from 'react';
import {
  TextField as ReactAriaTextField,
  Label,
  Input,
  TextArea,
  Text,
  FieldError
} from 'react-aria-components';
import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.interface';

/**
 * TextField component based on React Aria TextField
 *
 * A text field allows users to enter and edit text. It supports both single-line
 * and multi-line input, with comprehensive validation, accessibility, and theming.
 * Built on top of React Aria's TextField for robust accessibility and interaction support.
 *
 * @example
 * ```tsx
 * // Basic text field
 * <TextField
 *   label="Full Name"
 *   placeholder="Enter your full name"
 * />
 *
 * // Required field with description
 * <TextField
 *   label="Email Address"
 *   type="email"
 *   placeholder="you@example.com"
 *   description="We'll use this to send you updates"
 *   isRequired
 * />
 *
 * // Multi-line text area
 * <TextField
 *   label="Message"
 *   placeholder="Tell us what you think..."
 *   isMultiline
 *   rows={4}
 * />
 *
 * // Controlled text field with validation
 * <TextField
 *   label="Username"
 *   value={username}
 *   onChange={setUsername}
 *   isInvalid={!isValidUsername}
 *   errorMessage="Username must be at least 3 characters"
 * />
 * ```
 */
export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  description,
  errorMessage,
  size = 'medium',
  variant = 'default',
  className = '',
  labelClassName = '',
  inputClassName = '',
  descriptionClassName = '',
  errorClassName = '',
  isMultiline = false,
  rows = 3,
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  value,
  defaultValue,
  onChange,
  name,
  type = 'text',
  inputMode,
  pattern,
  minLength,
  maxLength,
  autoComplete,
  autoFocus,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const textFieldClasses = [
    styles.textField,
    styles[size],
    variant !== 'default' && styles[variant],
    isInvalid && styles.invalid,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [styles.textFieldLabel, labelClassName]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    isMultiline ? styles.textFieldTextArea : styles.textFieldInput,
    inputClassName
  ]
    .filter(Boolean)
    .join(' ');

  const descriptionClasses = [styles.textFieldDescription, descriptionClassName]
    .filter(Boolean)
    .join(' ');

  const errorClasses = [styles.textFieldError, errorClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaTextField
      {...props}
      className={textFieldClasses}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      isInvalid={isInvalid}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {label && (
        <Label className={labelClasses}>
          {label}
          {isRequired && <span className={styles.required} aria-hidden="true">*</span>}
        </Label>
      )}

      {isMultiline ? (
        <TextArea
          className={inputClasses}
          placeholder={placeholder}
          rows={rows}
          autoFocus={autoFocus}
        />
      ) : (
        <Input
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          inputMode={inputMode}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
        />
      )}

      {description && (
        <Text slot="description" className={descriptionClasses}>
          {description}
        </Text>
      )}

      <FieldError className={errorClasses}>
        {errorMessage}
      </FieldError>
    </ReactAriaTextField>
  );
};

// Export the main components and types
export { type TextFieldProps } from './TextField.interface';
