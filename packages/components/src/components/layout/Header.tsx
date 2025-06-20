import type { ComponentWithChildren, VariantProps } from '../../types/common-interfaces';

export interface HeaderProps extends ComponentWithChildren, VariantProps {
  title?: string;
  showNavigation?: boolean;
}

export const Header = ({
  title,
  variant = 'default',
  showNavigation = true,
  children,
  className = '',
  ...props
}: HeaderProps) => {
  return (
    <header
      className={`header ${className}`}
      data-variant={variant}
      {...props}
    >
      {title && <h1 className="header__title">{title}</h1>}
      {showNavigation && (
        <nav className="header__navigation">
          {children}
        </nav>
      )}
    </header>
  );
};
