export const DemoMenuUsage = `
import { Menu } from '@mono/components';

export const BasicMenu = () => {
  return (
    <Menu
      aria-label="Actions"
      onAction={(key) => alert(\`Action: \${key}\`)}
    >
      <Menu.Item key="new">New</Menu.Item>
      <Menu.Item key="copy">Copy</Menu.Item>
      <Menu.Item key="cut">Cut</Menu.Item>
      <Menu.Item key="paste">Paste</Menu.Item>
    </Menu>
  );
};
`;
