import React from 'react';
import {
  SearchField as ReactAriaSearchField,
  Label,
  Input,
  Button,
  Text,
  FieldError
} from 'react-aria-components';
import styles from './SearchField.module.scss';
import { SearchFieldProps } from './SearchField.interface';

/**
 * SearchField component based on React Aria SearchField
 *
 * A search field allows users to enter and clear a search query. It provides
 * built-in clear functionality, keyboard shortcuts (Enter to submit, Escape to clear),
 * and comprehensive validation and accessibility features.
 * Built on top of React Aria's SearchField for robust accessibility and interaction support.
 *
 * @example
 * ```tsx
 * // Basic search field
 * <SearchField
 *   label="Search Products"
 *   placeholder="Enter search terms..."
 * />
 *
 * // Search with submit handler
 * <SearchField
 *   label="Search"
 *   placeholder="Type to search..."
 *   onSubmit={(value) => console.log('Searching for:', value)}
 *   onClear={() => console.log('Search cleared')}
 * />
 *
 * // Controlled search field
 * <SearchField
 *   label="Search Users"
 *   value={searchQuery}
 *   onChange={setSearchQuery}
 *   onSubmit={handleSearch}
 * />
 *
 * // Search field with validation
 * <SearchField
 *   label="Product Search"
 *   isRequired
 *   isInvalid={!isValidSearch}
 *   errorMessage="Please enter at least 3 characters"
 * />
 * ```
 */
export const SearchField: React.FC<SearchFieldProps> = ({
  label,
  placeholder,
  description,
  errorMessage,
  size = 'medium',
  variant = 'default',
  className = '',
  labelClassName = '',
  inputClassName = '',
  clearButtonClassName = '',
  descriptionClassName = '',
  errorClassName = '',
  isDisabled,
  isReadOnly,
  isRequired,
  isInvalid,
  value,
  defaultValue,
  onChange,
  onSubmit,
  onClear,
  name,
  autoComplete,
  autoFocus,
  showClearButton = true,
  clearButtonContent = '✕',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const searchFieldClasses = [
    styles.searchField,
    styles[size],
    variant !== 'default' && styles[variant],
    isInvalid && styles.invalid,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [styles.searchFieldLabel, labelClassName]
    .filter(Boolean)
    .join(' ');

  const inputWrapperClasses = [styles.searchFieldInputWrapper]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [styles.searchFieldInput, inputClassName]
    .filter(Boolean)
    .join(' ');

  const clearButtonClasses = [
    styles.searchFieldClearButton,
    clearButtonClassName
  ]
    .filter(Boolean)
    .join(' ');

  const descriptionClasses = [styles.searchFieldDescription, descriptionClassName]
    .filter(Boolean)
    .join(' ');

  const errorClasses = [styles.searchFieldError, errorClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaSearchField
      {...props}
      className={searchFieldClasses}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      isInvalid={isInvalid}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onSubmit={onSubmit}
      onClear={onClear}
      name={name}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {({ state }) => (
        <>
          {label && (
            <Label className={labelClasses}>
              {label}
              {isRequired && <span className={styles.required} aria-hidden="true">*</span>}
            </Label>
          )}

          <div className={inputWrapperClasses}>
            <Input
              className={inputClasses}
              placeholder={placeholder}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
            />

            {showClearButton && state.value !== '' && !isReadOnly && !isDisabled && (
              <Button className={clearButtonClasses}>
                {clearButtonContent}
              </Button>
            )}
          </div>

          {description && (
            <Text slot="description" className={descriptionClasses}>
              {description}
            </Text>
          )}

          <FieldError className={errorClasses}>
            {errorMessage}
          </FieldError>
        </>
      )}
    </ReactAriaSearchField>
  );
};

// Export the main components and types
export { type SearchFieldProps } from './SearchField.interface';
