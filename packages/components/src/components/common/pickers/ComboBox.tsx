import React from 'react';
import {
  Button,
  ComboBox as AriaComboBox,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Text,
} from 'react-aria-components';
import { ChevronDown, Loader2 } from 'lucide-react';
import styles from './ComboBox.module.scss';

export interface ComboBoxOption {
  id: string | number;
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
}

export interface ComboBoxProps {
  /** Label for the combobox */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Description text */
  description?: string;
  /** Error message */
  errorMessage?: string;
  /** Options to display */
  options?: ComboBoxOption[];
  /** Selected option ID */
  selectedKey?: string | number | null;
  /** Default selected option ID */
  defaultSelectedKey?: string | number | null;
  /** Input value */
  inputValue?: string;
  /** Default input value */
  defaultInputValue?: string;
  /** Allow custom values not in options */
  allowsCustomValue?: boolean;
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
  /** Selection change handler */
  onSelectionChange?: (_key: string | number | null) => void;
  /** Input change handler */
  onInputChange?: (_value: string) => void;
  /** Custom filter function */
  filter?: (_items: ComboBoxOption[], _inputValue: string) => ComboBoxOption[];
}

export function ComboBox({
  label,
  placeholder,
  description,
  errorMessage,
  options = [],
  selectedKey,
  defaultSelectedKey,
  inputValue,
  defaultInputValue,
  allowsCustomValue = false,
  isLoading = false,
  size = 'md',
  variant = 'default',
  className = '',
  isDisabled = false,
  isRequired = false,
  onSelectionChange,
  onInputChange,
  filter,
}: ComboBoxProps) {
  const [localInputValue, setLocalInputValue] = React.useState(defaultInputValue || '');
  const [filteredOptions, setFilteredOptions] = React.useState<ComboBoxOption[]>(options);

  // Determine controlled vs uncontrolled input value
  const currentInputValue = inputValue !== undefined ? inputValue : localInputValue;

  // Default filter function
  const defaultFilter = React.useCallback(
    (items: ComboBoxOption[], filterText: string) => {
      return items.filter((item) =>
        item.label.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    []
  );

  // Update filtered options when input or options change
  React.useEffect(() => {
    const filterFn = filter || defaultFilter;
    setFilteredOptions(filterFn(options, currentInputValue));
  }, [options, currentInputValue, filter, defaultFilter]);

  const handleInputChange = (value: string) => {
    if (inputValue === undefined) {
      setLocalInputValue(value);
    }
    onInputChange?.(value);
  };

  // Map size props to CSS class names
  const sizeClassMap = {
    sm: 'small',
    md: 'medium',
    lg: 'large'
  };

  const sizeClass = sizeClassMap[size];

  const comboBoxClasses = `
    ${styles.combobox}
    ${styles[sizeClass]}
    ${styles[variant]}
    ${className}
  `.trim();

  const containerClasses = `${styles.container} ${styles[sizeClass]}`;

  // Use type assertions for React 19 compatibility
  const ComboBoxComponent = AriaComboBox as React.ComponentType<any>;
  const LabelComponent = Label as React.ComponentType<any>;
  const InputComponent = Input as React.ComponentType<any>;
  const ButtonComponent = Button as React.ComponentType<any>;
  const TextComponent = Text as React.ComponentType<any>;
  const FieldErrorComponent = FieldError as React.ComponentType<any>;
  const PopoverComponent = Popover as React.ComponentType<any>;
  const ListBoxComponent = ListBox as React.ComponentType<any>;
  const ListBoxItemComponent = ListBoxItem as React.ComponentType<any>;

  // Create props object to avoid controlled/uncontrolled conflicts
  const comboBoxProps: any = {
    className: comboBoxClasses,
    allowsCustomValue,
    inputValue: currentInputValue,
    defaultInputValue,
    onInputChange: handleInputChange,
    onSelectionChange,
    isDisabled,
    isRequired,
  };

  // Only add selectedKey OR defaultSelectedKey, never both
  if (selectedKey !== undefined) {
    comboBoxProps.selectedKey = selectedKey;
  } else if (defaultSelectedKey !== undefined) {
    comboBoxProps.defaultSelectedKey = defaultSelectedKey;
  }

  return (
    <ComboBoxComponent {...comboBoxProps}>
      {label && <LabelComponent className={styles.label}>{label}</LabelComponent>}

      <div className={containerClasses}>
        <InputComponent
          className={styles.input}
          placeholder={placeholder}
        />
        <ButtonComponent className={styles.button}>
          {isLoading ? (
            <Loader2 className={styles.spinner} size={16} aria-hidden="true" />
          ) : (
            <ChevronDown size={16} aria-hidden="true" />
          )}
        </ButtonComponent>
      </div>

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
        <ListBoxComponent className={styles.listbox} items={filteredOptions}>
          {(item: ComboBoxOption) => (
            <ListBoxItemComponent
              key={item.id}
              id={item.id}
              textValue={item.label}
              className={styles.item}
            >
              <div className={styles.optionContent}>
                <span className={styles.optionLabel}>
                  {item.label}
                </span>
                {item.description && (
                  <span className={styles.optionDescription}>
                    {item.description}
                  </span>
                )}
              </div>
            </ListBoxItemComponent>
          )}
        </ListBoxComponent>
      </PopoverComponent>
    </ComboBoxComponent>
  );
}
