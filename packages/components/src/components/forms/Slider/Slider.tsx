import React from 'react';
import {
  Slider as ReactAriaSlider,
  Label,
  SliderOutput,
  SliderTrack,
  SliderThumb,
  Text,
  FieldError
} from 'react-aria-components';
import styles from './Slider.module.scss';
import { SliderProps } from './Slider.interface';

/**
 * Slider component based on React Aria Slider
 *
 * A slider allows users to select one or more values within a range using a draggable thumb.
 * Supports single values, ranges, different orientations, and comprehensive accessibility features.
 * Built on top of React Aria's Slider for robust accessibility and interaction support.
 *
 * @example
 * ```tsx
 * // Basic slider
 * <Slider
 *   label="Volume"
 *   defaultValue={50}
 *   minValue={0}
 *   maxValue={100}
 * />
 *
 * // Range slider
 * <Slider
 *   label="Price Range"
 *   defaultValue={[20, 80]}
 *   minValue={0}
 *   maxValue={100}
 *   thumbLabels={['Min Price', 'Max Price']}
 *   formatOptions={{
 *     style: 'currency',
 *     currency: 'USD'
 *   }}
 * />
 *
 * // Vertical slider
 * <Slider
 *   label="Height"
 *   defaultValue={150}
 *   minValue={100}
 *   maxValue={200}
 *   orientation="vertical"
 *   formatOptions={{
 *     style: 'unit',
 *     unit: 'centimeter'
 *   }}
 * />
 *
 * // Controlled slider with validation
 * <Slider
 *   label="Quality"
 *   value={quality}
 *   onChange={setQuality}
 *   minValue={1}
 *   maxValue={10}
 *   step={1}
 *   isRequired
 *   isInvalid={quality < 5}
 *   errorMessage="Quality must be at least 5"
 *   description="Select quality level from 1 to 10"
 * />
 * ```
 */
export const Slider = <T extends number | number[]>({
  label,
  description,
  errorMessage,
  size = 'medium',
  variant = 'default',
  className = '',
  labelClassName = '',
  trackClassName = '',
  thumbClassName = '',
  outputClassName = '',
  descriptionClassName = '',
  errorClassName = '',
  isDisabled,
  isRequired,
  isInvalid,
  value,
  defaultValue,
  onChange,
  onChangeEnd,
  name,
  minValue = 0,
  maxValue = 100,
  step = 1,
  formatOptions,
  orientation = 'horizontal',
  showOutput = true,
  outputFormat,
  thumbLabels,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...rest
}: SliderProps<T>) => {
  // Combine class names
  const sliderClasses = [
    styles.slider,
    styles[size],
    styles[variant],
    styles[orientation],
    className
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.label,
    labelClassName
  ].filter(Boolean).join(' ');

  const trackClasses = [
    styles.track,
    styles[orientation],
    trackClassName
  ].filter(Boolean).join(' ');

  const thumbClasses = [
    styles.thumb,
    thumbClassName
  ].filter(Boolean).join(' ');

  const outputClasses = [
    styles.output,
    outputClassName
  ].filter(Boolean).join(' ');

  const descriptionClasses = [
    styles.description,
    descriptionClassName
  ].filter(Boolean).join(' ');

  const errorClasses = [
    styles.errorMessage,
    errorClassName
  ].filter(Boolean).join(' ');

  // Determine if this is a multi-thumb slider
  const isRange = Array.isArray(defaultValue) || Array.isArray(value);

  return (
    <ReactAriaSlider
      className={sliderClasses}
      isDisabled={isDisabled}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      formatOptions={formatOptions}
      orientation={orientation}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      data-invalid={isInvalid || undefined}
      data-required={isRequired || undefined}
      {...rest}
    >
      {(label || showOutput) && (
        <div className={styles.header}>
          {label && (
            <Label className={labelClasses}>
              {label}
              {isRequired && <span aria-hidden="true"> *</span>}
            </Label>
          )}

          {showOutput && (
            <SliderOutput className={outputClasses}>
              {({ state }) => {
                if (outputFormat) {
                  return outputFormat(state.values as T);
                }

                if (isRange) {
                  return state.values.map((val: number, i: number) =>
                    state.getThumbValueLabel(i)
                  ).join(' – ');
                }

                return state.getThumbValueLabel(0);
              }}
            </SliderOutput>
          )}
        </div>
      )}

      <SliderTrack className={trackClasses}>
        {({ state }) => (
          <>
            {/* Render thumbs based on whether it's a range slider */}
            {isRange ? (
              // Multi-thumb (range) slider
              state.values.map((_: number, i: number) => (
                <SliderThumb
                  key={i}
                  index={i}
                  className={thumbClasses}
                  name={name}
                  aria-label={thumbLabels?.[i]}
                />
              ))
            ) : (
              // Single thumb slider
              <SliderThumb
                className={thumbClasses}
                name={name}
              />
            )}
          </>
        )}
      </SliderTrack>

      {description && (
        <Text slot="description" className={descriptionClasses}>
          {description}
        </Text>
      )}

      <FieldError className={errorClasses}>
        {errorMessage}
      </FieldError>
    </ReactAriaSlider>
  );
};

// Convenience components for better typing
export const SingleSlider: React.FC<SliderProps<number>> = (props) => (
  <Slider<number> {...props} />
);

export const RangeSlider: React.FC<SliderProps<number[]>> = (props) => (
  <Slider<number[]> {...props} />
);
