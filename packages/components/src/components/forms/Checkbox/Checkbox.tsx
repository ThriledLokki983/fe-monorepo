import React from 'react';
import { Checkbox as ReactAriaCheckbox } from 'react-aria-components';
import styles from './Checkbox.module.scss';
import { CheckboxProps, CheckboxIndicatorProps } from './Checkbox.interface';

/**
 * Default checkbox indicator component
 */
export const DefaultCheckboxIndicator: React.FC<CheckboxIndicatorProps> = ({
  className = '',
  size = 'medium',
  variant = 'default'
}) => {
  const indicatorClasses = [
    styles.checkboxIndicator,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={indicatorClasses}>
      <svg viewBox="0 0 18 18" aria-hidden="true" className={styles.checkboxIcon}>
        {/* Check icon for selected state */}
        <polyline points="1 9 7 14 15 4" className={styles.checkIcon} />
        {/* Indeterminate icon */}
        <rect x={1} y={7.5} width={15} height={3} className={styles.indeterminateIcon} />
      </svg>
    </div>
  );
};

/**
 * Checkbox component based on React Aria Checkbox
 *
 * A checkbox allows users to select multiple items from a list of individual items,
 * or to mark one individual item as selected. It supports checked, unchecked, and
 * indeterminate states with full accessibility features.
 *
 * @example
 * ```tsx
 * // Basic checkbox
 * <Checkbox>
 *   Subscribe to newsletter
 * </Checkbox>
 *
 * // Controlled checkbox
 * <Checkbox
 *   isSelected={isSelected}
 *   onChange={setSelected}
 * >
 *   Accept terms and conditions
 * </Checkbox>
 *
 * // Indeterminate checkbox
 * <Checkbox isIndeterminate>
 *   Select all items
 * </Checkbox>
 *
 * // Invalid checkbox
 * <Checkbox isInvalid isRequired>
 *   You must agree to continue
 * </Checkbox>
 * ```
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  size = 'medium',
  variant = 'default',
  className = '',
  indicatorClassName = '',
  labelClassName = '',
  isSelected,
  defaultSelected,
  isIndeterminate,
  isDisabled,
  isReadOnly,
  isInvalid,
  isRequired,
  onChange,
  name,
  value,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const checkboxClasses = [
    styles.checkbox,
    styles[size],
    isInvalid && styles.invalid,
    isDisabled && styles.disabled,
    isReadOnly && styles.readOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [styles.checkboxLabel, labelClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaCheckbox
      {...props}
      className={checkboxClasses}
      isSelected={isSelected}
      defaultSelected={defaultSelected}
      isIndeterminate={isIndeterminate}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      isRequired={isRequired}
      onChange={onChange}
      name={name}
      value={value}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <>
        <DefaultCheckboxIndicator
          className={indicatorClassName}
          size={size}
          variant={variant}
        />
        {children && (
          <span className={labelClasses}>
            {children}
            {isRequired && <span className={styles.required} aria-hidden="true">*</span>}
          </span>
        )}
      </>
    </ReactAriaCheckbox>
  );
};

// Export the main components
export { type CheckboxProps, type CheckboxIndicatorProps } from './Checkbox.interface';
