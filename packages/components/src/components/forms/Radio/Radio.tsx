import React from 'react';
import { Radio as ReactAriaRadio } from 'react-aria-components';
import styles from './Radio.module.scss';
import { RadioProps, RadioIndicatorProps } from './Radio.interface';

/**
 * Default radio indicator component
 */
export const DefaultRadioIndicator: React.FC<RadioIndicatorProps> = ({
  className = '',
  size = 'medium',
  variant = 'default'
}) => {
  const indicatorClasses = [
    styles.radioIndicator,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={indicatorClasses} />;
};

/**
 * Radio component based on React Aria Radio
 *
 * A radio button allows users to select a single option from a group of mutually
 * exclusive choices. It should be used within a RadioGroup for proper accessibility
 * and behavior.
 *
 * @example
 * ```tsx
 * // Basic radio button (within RadioGroup)
 * <Radio value="option1">
 *   Option 1
 * </Radio>
 *
 * // Radio with different sizes
 * <Radio value="small" size="small">
 *   Small radio
 * </Radio>
 *
 * // Disabled radio
 * <Radio value="disabled" isDisabled>
 *   Disabled option
 * </Radio>
 *
 * // Radio with variant
 * <Radio value="success" variant="success">
 *   Success option
 * </Radio>
 * ```
 */
export const Radio: React.FC<RadioProps> = ({
  children,
  size = 'medium',
  variant = 'default',
  className = '',
  indicatorClassName = '',
  labelClassName = '',
  isSelected,
  defaultSelected,
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
  const radioClasses = [
    styles.radio,
    styles[size],
    isInvalid && styles.invalid,
    isDisabled && styles.disabled,
    isReadOnly && styles.readOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [styles.radioLabel, labelClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaRadio
      {...props}
      className={radioClasses}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      isRequired={isRequired}
      name={name}
      value={value}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <>
        <DefaultRadioIndicator
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
    </ReactAriaRadio>
  );
};

// Export the main components
export { type RadioProps, type RadioIndicatorProps } from './Radio.interface';
