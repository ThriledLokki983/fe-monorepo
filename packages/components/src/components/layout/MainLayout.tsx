import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import type { ComponentWithChildren, VariantProps } from '../../types/common-interfaces';

export interface MainLayoutProps extends ComponentWithChildren, VariantProps {
  headerTitle?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
  sidebarCollapsed?: boolean;
  headerContent?: ReactNode;
  sidebarContent?: ReactNode;
}

export const MainLayout = ({
  headerTitle,
  showHeader = true,
  showSidebar = false,
  sidebarCollapsed = false,
  headerContent,
  sidebarContent,
  variant = 'default',
  children,
  className = '',
  ...props
}: MainLayoutProps) => {
  return (
    <div
      className={`main-layout ${className}`}
      data-variant={variant}
      data-has-sidebar={showSidebar}
      {...props}
    >
      {showHeader && (
        <Header title={headerTitle} variant={variant}>
          {headerContent}
        </Header>
      )}

      <div className="main-layout__body">
        {showSidebar && (
          <Sidebar collapsed={sidebarCollapsed} variant={variant}>
            {sidebarContent}
          </Sidebar>
        )}

        <main className="main-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
};
