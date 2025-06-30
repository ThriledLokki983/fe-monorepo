import React from 'react';
import { LinkProps as ReactAriaLinkProps } from 'react-aria-components';

export type LinkVariant = 'default' | 'primary' | 'secondary' | 'muted';
export type LinkSize = 'small' | 'medium' | 'large';

// Base props for all Link variants
interface BaseLinkProps {
  variant?: LinkVariant;
  size?: LinkSize;
  children: React.ReactNode;
  className?: string;
  // Data attributes
  [key: `data-${string}`]: string | number | boolean | undefined;
}

// Native link props when href is provided
interface NativeLinkProps extends BaseLinkProps, Omit<ReactAriaLinkProps, 'children' | 'className'> {
  href: string;
  // Should not have onPress when href is provided for clarity
  onPress?: never;
}

// JavaScript handled link props when no href is provided
interface JavaScriptLinkProps extends BaseLinkProps, Omit<ReactAriaLinkProps, 'children' | 'className' | 'href'> {
  href?: never;
  // onPress is optional to allow for demo/static cases
  onPress?: () => void;
}

export type LinkProps = NativeLinkProps | JavaScriptLinkProps;
