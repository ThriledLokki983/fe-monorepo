import { SliderProps as ReactAriaSliderProps, ValidationResult } from 'react-aria-components';

/**
 * Props for the Slider component
 */
export interface SliderProps<T extends number | number[]> extends Omit<ReactAriaSliderProps<T>, 'children'> {
  /**
   * The label for the slider
   */
  label?: string;

  /**
   * Description text to help users understand the slider
   */
  description?: string;

  /**
   * Error message to display when the slider is invalid
   */
  errorMessage?: string | ((_validation: ValidationResult) => string);

  /**
   * Size variant for the slider
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the slider
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the slider container
   */
  className?: string;

  /**
   * Additional CSS class name for the label
   */
  labelClassName?: string;

  /**
   * Additional CSS class name for the slider track
   */
  trackClassName?: string;

  /**
   * Additional CSS class name for the slider thumb(s)
   */
  thumbClassName?: string;

  /**
   * Additional CSS class name for the slider output
   */
  outputClassName?: string;

  /**
   * Additional CSS class name for the description text
   */
  descriptionClassName?: string;

  /**
   * Additional CSS class name for the error text
   */
  errorClassName?: string;

  /**
   * Whether the slider is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether the slider is required
   * @default false
   */
  isRequired?: boolean;

  /**
   * Whether the slider is invalid
   * @default false
   */
  isInvalid?: boolean;

  /**
   * The current value of the slider (controlled)
   */
  value?: T;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: T;

  /**
   * Callback when the value changes
   */
  onChange?: (_value: T) => void;

  /**
   * Callback when the value change ends (user stops dragging)
   */
  onChangeEnd?: (_value: T) => void;

  /**
   * Name attribute for HTML forms (applied to thumb inputs)
   */
  name?: string;

  /**
   * Minimum allowed value
   * @default 0
   */
  minValue?: number;

  /**
   * Maximum allowed value
   * @default 100
   */
  maxValue?: number;

  /**
   * Step increment for the slider
   * @default 1
   */
  step?: number;

  /**
   * Format options for value formatting (Intl.NumberFormat options)
   */
  formatOptions?: Intl.NumberFormatOptions;

  /**
   * Orientation of the slider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Whether to show the value output
   * @default true
   */
  showOutput?: boolean;

  /**
   * Whether to show the value labels (for range sliders)
   * @default false
   */
  showValueLabels?: boolean;

  /**
   * Custom output format function
   */
  outputFormat?: (_value: T) => string;

  /**
   * Accessibility labels for thumbs (for multi-thumb sliders)
   */
  thumbLabels?: string[];

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * Accessibility labelled by reference
   */
  'aria-labelledby'?: string;

  /**
   * Accessibility described by reference
   */
  'aria-describedby'?: string;
}

/**
 * Specific props for single-value sliders
 */
export interface SingleSliderProps extends SliderProps<number> {
  value?: number;
  defaultValue?: number;
  onChange?: (_value: number) => void;
  onChangeEnd?: (_value: number) => void;
}

/**
 * Specific props for range sliders (two thumbs)
 */
export interface RangeSliderProps extends SliderProps<number[]> {
  value?: number[];
  defaultValue?: number[];
  onChange?: (_value: number[]) => void;
  onChangeEnd?: (_value: number[]) => void;
}
