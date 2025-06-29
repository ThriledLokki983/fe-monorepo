import React, { useState } from 'react';
import {
  Form as ReactAriaForm,
  Text
} from 'react-aria-components';
import styles from './Form.module.scss';
import { FormProps } from './Form.interface';

/**
 * Form component based on React Aria Form
 *
 * A form is a group of inputs that allows users to submit data to a server,
 * with support for providing field validation errors. Built on top of React Aria's
 * Form for robust accessibility, validation, and interaction support.
 *
 * @example
 * ```tsx
 * // Basic form
 * <Form onSubmit={handleSubmit}>
 *   <TextField name="email" label="Email" isRequired />
 *   <TextField name="password" label="Password" type="password" isRequired />
 *   <Button type="submit">Sign In</Button>
 * </Form>
 *
 * // Form with server-side validation errors
 * <Form
 *   validationErrors={{ email: 'This email is already taken' }}
 *   onSubmit={handleSubmit}
 * >
 *   <TextField name="email" label="Email" isRequired />
 *   <Button type="submit">Submit</Button>
 * </Form>
 *
 * // Card variant with custom validation behavior
 * <Form
 *   variant="card"
 *   validationBehavior="aria"
 *   label="Contact Form"
 *   description="Please fill out all required fields"
 * >
 *   <TextField name="name" label="Full Name" isRequired />
 *   <TextField name="email" label="Email" type="email" isRequired />
 *   <TextField name="message" label="Message" isMultiline rows={4} />
 *   <div>
 *     <Button type="submit">Send Message</Button>
 *     <Button type="reset" variant="secondary">Reset</Button>
 *   </div>
 * </Form>
 *
 * // Inline form
 * <Form variant="inline" onSubmit={handleSearch}>
 *   <TextField name="query" label="Search" placeholder="Enter search terms..." />
 *   <Button type="submit">Search</Button>
 * </Form>
 * ```
 */
export const Form: React.FC<FormProps> = ({
  children,
  size = 'medium',
  variant = 'default',
  className = '',
  label,
  description,
  showInlineErrors = true,
  validationBehavior = 'native',
  validationErrors,
  onSubmit,
  onReset,
  onInvalid,
  id,
  isDisabled = false,
  isLoading = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const [hasValidationErrors, setHasValidationErrors] = useState(false);

  const formClasses = [
    styles.form,
    styles[size],
    variant !== 'default' && styles[variant],
    isDisabled && styles.disabled,
    isLoading && styles.loading,
    hasValidationErrors && styles.invalid,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleSubmit = (event: React.FormEvent) => {
    setHasValidationErrors(false);
    onSubmit?.(event);
  };

  const handleReset = (event: React.FormEvent) => {
    setHasValidationErrors(false);
    onReset?.(event);
  };

  const handleInvalid = (event: React.FormEvent) => {
    setHasValidationErrors(true);
    onInvalid?.(event);
  };

  return (
    <ReactAriaForm
      {...props}
      className={formClasses}
      validationBehavior={validationBehavior}
      validationErrors={validationErrors}
      onSubmit={handleSubmit}
      onReset={handleReset}
      onInvalid={handleInvalid}
      id={id}
      aria-label={ariaLabel || label}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {label && (
        <Text
          elementType="h2"
          className={styles.formLabel}
        >
          {label}
        </Text>
      )}

      {description && (
        <Text
          slot="description"
          className={styles.formDescription}
        >
          {description}
        </Text>
      )}

      {showInlineErrors && hasValidationErrors && validationErrors && (
        <div
          role="alert"
          className={styles.formError}
          tabIndex={-1}
        >
          <h3>Unable to submit form</h3>
          <p>Please fix the validation errors below and re-submit the form.</p>
        </div>
      )}

      {children}
    </ReactAriaForm>
  );
};

// Export the main components and types
export { type FormProps, type FormValidationError } from './Form.interface';
