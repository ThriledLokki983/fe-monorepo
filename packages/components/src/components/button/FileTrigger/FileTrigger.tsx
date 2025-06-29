import React from 'react';
import { FileTrigger as ReactAriaFileTrigger } from 'react-aria-components';
import { FileTriggerProps } from './FileTrigger.interface';

export const FileTrigger: React.FC<FileTriggerProps> = (props) => {
  const {
    children,
    className,
    ...restProps
  } = props;

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className'];

  // Filter out props that are already handled explicitly
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria FileTrigger props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const filteredProps = getFilteredProps();

  // FileTrigger doesn't render its own element, so className should be applied to the child
  // We'll wrap the children to apply the className if provided
  const wrappedChildren = className && React.isValidElement(children)
    ? React.cloneElement(children, {
        className: `${children.props.className || ''} ${className}`.trim()
      } as any)
    : children;

  return (
    <ReactAriaFileTrigger
      {...filteredProps}
    >
      {wrappedChildren}
    </ReactAriaFileTrigger>
  );
};

export default FileTrigger;
