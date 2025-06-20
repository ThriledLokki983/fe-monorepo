import type { ComponentWithChildren, VariantProps } from '../../types/common-interfaces';

export interface SidebarProps extends ComponentWithChildren, VariantProps {
  collapsed?: boolean;
  width?: string;
  position?: 'left' | 'right';
}

export const Sidebar = ({
  collapsed = false,
  width = '250px',
  position = 'left',
  variant = 'default',
  children,
  className = '',
  ...props
}: SidebarProps) => {
  return (
    <aside
      className={`sidebar ${className}`}
      data-variant={variant}
      data-collapsed={collapsed}
      data-position={position}
      style={{ width: collapsed ? '60px' : width }}
      {...props}
    >
      <div className="sidebar__content">
        {children}
      </div>
    </aside>
  );
};
