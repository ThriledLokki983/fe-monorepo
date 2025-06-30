import React from 'react';
import { Switch as ReactAriaSwitch } from 'react-aria-components';
import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.interface';

/**
 * Switch component based on React Aria Switch
 *
 * A switch allows users to turn a setting on or off. It provides accessibility features,
 * form integration, and flexible styling with various sizes and variants.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch>
 *   Wi-Fi
 * </Switch>
 *
 * // Controlled switch
 * <Switch
 *   isSelected={isEnabled}
 *   onChange={setIsEnabled}
 * >
 *   Notifications
 * </Switch>
 *
 * // Switch with different sizes
 * <Switch size="small">Small switch</Switch>
 * <Switch size="medium">Medium switch</Switch>
 * <Switch size="large">Large switch</Switch>
 *
 * // Switch with variants
 * <Switch variant="success" isSelected>Success</Switch>
 * <Switch variant="warning" isSelected>Warning</Switch>
 * <Switch variant="error" isSelected>Error</Switch>
 *
 * // Disabled switch
 * <Switch isDisabled>Disabled switch</Switch>
 *
 * // Required switch
 * <Switch isRequired>Required setting</Switch>
 * ```
 */
export const Switch: React.FC<SwitchProps> = ({
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
  isRequired,
  isInvalid,
  onChange,
  name,
  value,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const switchClasses = [
    styles.switch,
    styles[size],
    styles[variant],
    isInvalid && styles.invalid,
    isDisabled && styles.disabled,
    isReadOnly && styles.readOnly,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const indicatorClasses = [
    styles.switchIndicator,
    indicatorClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [
    styles.switchLabel,
    labelClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaSwitch
      {...props}
      className={switchClasses}
      isSelected={isSelected}
      defaultSelected={defaultSelected}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      onChange={onChange}
      name={name}
      value={value}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <div className={indicatorClasses} />
      {children && (
        <span className={labelClasses}>
          {children}
          {isRequired && <span className={styles.required} aria-hidden="true">*</span>}
        </span>
      )}
    </ReactAriaSwitch>
  );
};

// Export the interface
export { type SwitchProps } from './Switch.interface';
