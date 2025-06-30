import React from 'react';
import {
  CheckboxGroup as ReactAriaCheckboxGroup,
  Label,
  Text,
  FieldError,
} from 'react-aria-components';
import styles from './CheckboxGroup.module.scss';
import {
  CheckboxGroupProps,
  CheckboxGroupLabelProps,
  CheckboxGroupDescriptionProps,
  CheckboxGroupErrorProps,
} from './CheckboxGroup.interface';

/**
 * Default label component for checkbox groups
 */
export const DefaultCheckboxGroupLabel: React.FC<CheckboxGroupLabelProps> = ({
  children,
  className = '',
  size = 'medium'
}) => {
  const labelClasses = [
    styles.checkboxGroupLabel,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Label className={labelClasses}>{children}</Label>;
};

/**
 * Default description component for checkbox groups
 */
export const DefaultCheckboxGroupDescription: React.FC<CheckboxGroupDescriptionProps> = ({
  children,
  className = '',
  size = 'medium'
}) => {
  const descriptionClasses = [
    styles.checkboxGroupDescription,
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
 * Default error component for checkbox groups
 */
export const DefaultCheckboxGroupError: React.FC<CheckboxGroupErrorProps> = ({
  children,
  className = '',
  size = 'medium'
}) => {
  const errorClasses = [
    styles.checkboxGroupError,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <FieldError className={errorClasses}>{children}</FieldError>;
};

/**
 * CheckboxGroup component based on React Aria CheckboxGroup
 *
 * A checkbox group allows users to select multiple items from a list of options.
 * It provides accessibility features, validation support, and flexible styling.
 *
 * @example
 * ```tsx
 * // Basic checkbox group
 * <CheckboxGroup label="Favorite sports">
 *   <Checkbox value="soccer">Soccer</Checkbox>
 *   <Checkbox value="baseball">Baseball</Checkbox>
 *   <Checkbox value="basketball">Basketball</Checkbox>
 * </CheckboxGroup>
 *
 * // Controlled checkbox group
 * <CheckboxGroup
 *   label="Interests"
 *   value={selectedInterests}
 *   onChange={setSelectedInterests}
 * >
 *   <Checkbox value="music">Music</Checkbox>
 *   <Checkbox value="sports">Sports</Checkbox>
 *   <Checkbox value="travel">Travel</Checkbox>
 * </CheckboxGroup>
 *
 * // Required checkbox group with validation
 * <CheckboxGroup
 *   label="Required selections"
 *   isRequired
 *   errorMessage="Please select at least one option"
 * >
 *   <Checkbox value="terms">Accept terms</Checkbox>
 *   <Checkbox value="privacy">Accept privacy policy</Checkbox>
 * </CheckboxGroup>
 *
 * // Horizontal layout
 * <CheckboxGroup
 *   label="Quick options"
 *   orientation="horizontal"
 * >
 *   <Checkbox value="yes">Yes</Checkbox>
 *   <Checkbox value="no">No</Checkbox>
 *   <Checkbox value="maybe">Maybe</Checkbox>
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
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
  checkboxesClassName = '',
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
    styles.checkboxGroup,
    styles[size],
    styles[orientation],
    isInvalid && styles.invalid,
    isDisabled && styles.disabled,
    isReadOnly && styles.readOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const checkboxesClasses = [
    styles.checkboxes,
    styles[orientation],
    checkboxesClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaCheckboxGroup
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
        <DefaultCheckboxGroupLabel
          size={size}
          className={labelClassName}
        >
          {label}
          {isRequired && <span className={styles.required} aria-hidden="true">*</span>}
        </DefaultCheckboxGroupLabel>
      )}

      {description && (
        <DefaultCheckboxGroupDescription
          size={size}
          className={descriptionClassName}
        >
          {description}
        </DefaultCheckboxGroupDescription>
      )}

      <div className={checkboxesClasses}>
        {children}
      </div>

      <FieldError className={[styles.checkboxGroupError, styles[size], errorClassName].filter(Boolean).join(' ')}>
        {errorMessage}
      </FieldError>
    </ReactAriaCheckboxGroup>
  );
};

// Export the main components
export {
  type CheckboxGroupProps,
  type CheckboxGroupLabelProps,
  type CheckboxGroupDescriptionProps,
  type CheckboxGroupErrorProps,
} from './CheckboxGroup.interface';
