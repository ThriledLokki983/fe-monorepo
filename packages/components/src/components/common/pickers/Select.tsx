import React from 'react';
import {
  Button,
  Select as AriaSelect,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Text,
} from 'react-aria-components';
import { ChevronDown, Loader2 } from 'lucide-react';
import styles from './Select.module.scss';

export interface SelectOption {
  id: string | number;
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Label for the select */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Description text */
  description?: string;
  /** Error message */
  errorMessage?: string;
  /** Options to display */
  options?: SelectOption[];
  /** Selected option ID */
  selectedKey?: string | number | null;
  /** Default selected option ID */
  defaultSelectedKey?: string | number | null;
  /** Loading state */
  isLoading?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Style variant */
  variant?: 'default' | 'filled' | 'outlined';
  /** Custom className */
  className?: string;
  /** Disabled state */
  isDisabled?: boolean;
  /** Required field */
  isRequired?: boolean;
  /** Open state */
  isOpen?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Selection change handler */
  onSelectionChange?: (key: string | number | null) => void;
  /** Open change handler */
  onOpenChange?: (open: boolean) => void;
  /** Render custom placeholder */
  renderPlaceholder?: () => React.ReactNode;
  /** Render custom selected value */
  renderValue?: (selectedOption: SelectOption | null) => React.ReactNode;
}

export function Select({
  label,
  placeholder = 'Select an option...',
  description,
  errorMessage,
  options = [],
  selectedKey,
  defaultSelectedKey,
  isLoading = false,
  size = 'md',
  variant = 'default',
  className = '',
  isDisabled = false,
  isRequired = false,
  isOpen,
  defaultOpen,
  onSelectionChange,
  onOpenChange,
  renderPlaceholder,
  renderValue,
}: SelectProps) {
  // Find selected option for custom rendering
  const selectedOption = React.useMemo(() => {
    return options.find(option => option.id === selectedKey) || null;
  }, [options, selectedKey]);

  // Map size props to CSS class names
  const sizeClassMap = {
    sm: 'small',
    md: 'medium',
    lg: 'large'
  };

  const sizeClass = sizeClassMap[size];

  const selectClasses = `
    ${styles.select}
    ${styles[sizeClass]}
    ${styles[variant]}
    ${className}
  `.trim();

  const buttonClasses = `${styles.button} ${styles[sizeClass]}`;

  // Use type assertions for React 19 compatibility
  const SelectComponent = AriaSelect as React.ComponentType<any>;
  const LabelComponent = Label as React.ComponentType<any>;
  const ButtonComponent = Button as React.ComponentType<any>;
  const SelectValueComponent = SelectValue as React.ComponentType<any>;
  const TextComponent = Text as React.ComponentType<any>;
  const FieldErrorComponent = FieldError as React.ComponentType<any>;
  const PopoverComponent = Popover as React.ComponentType<any>;
  const ListBoxComponent = ListBox as React.ComponentType<any>;
  const ListBoxItemComponent = ListBoxItem as React.ComponentType<any>;

  // Create props object to avoid controlled/uncontrolled conflicts
  const selectProps: any = {
    className: selectClasses,
    onSelectionChange,
    isDisabled,
    isRequired,
    onOpenChange,
  };

  // Only add selectedKey OR defaultSelectedKey, never both
  if (selectedKey !== undefined) {
    selectProps.selectedKey = selectedKey;
  } else if (defaultSelectedKey !== undefined) {
    selectProps.defaultSelectedKey = defaultSelectedKey;
  }

  // Only add isOpen OR defaultOpen, never both
  if (isOpen !== undefined) {
    selectProps.isOpen = isOpen;
  } else if (defaultOpen !== undefined) {
    selectProps.defaultOpen = defaultOpen;
  }

  return (
    <SelectComponent {...selectProps}>
      {label && <LabelComponent className={styles.label}>{label}</LabelComponent>}

      <ButtonComponent className={buttonClasses}>
        <SelectValueComponent className={styles.value}>
          {({ isPlaceholder }: { isPlaceholder: boolean }) => {
            if (isPlaceholder) {
              return renderPlaceholder ? renderPlaceholder() : placeholder;
            }

            if (renderValue && selectedOption) {
              return renderValue(selectedOption);
            }

            return selectedOption?.label || placeholder;
          }}
        </SelectValueComponent>

        <span className={styles.icon} aria-hidden="true">
          {isLoading ? (
            <Loader2 className={styles.spinner} size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </span>
      </ButtonComponent>

      {description && (
        <TextComponent slot="description" className={styles.description}>
          {description}
        </TextComponent>
      )}

      {errorMessage && (
        <FieldErrorComponent className={styles.error}>
          {errorMessage}
        </FieldErrorComponent>
      )}

      <PopoverComponent className={styles.popover}>
        <ListBoxComponent className={styles.listbox} items={options}>
          {(option: SelectOption) => (
            <ListBoxItemComponent
              key={option.id}
              id={option.id}
              textValue={option.label}
              className={styles.item}
              isDisabled={option.disabled}
            >
              <div className={styles.optionContent}>
                <span className={styles.optionLabel}>
                  {option.label}
                </span>
                {option.description && (
                  <span className={styles.optionDescription}>
                    {option.description}
                  </span>
                )}
              </div>
            </ListBoxItemComponent>
          )}
        </ListBoxComponent>
      </PopoverComponent>
    </SelectComponent>
  );
}
