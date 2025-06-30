export const tooltipUsageExample = `import React from 'react';
import { Button } from '@mono/components';
import { Tooltip, TooltipWrapper, CompoundTooltip } from '@mono/components';

export const TooltipExample: React.FC = () => {
  return (
    <div>
      {/* Basic tooltip */}
      <TooltipWrapper>
        <Button>Hover me</Button>
        <Tooltip>This is a simple tooltip</Tooltip>
      </TooltipWrapper>

      {/* Tooltip with custom placement */}
      <TooltipWrapper>
        <Button>Save</Button>
        <Tooltip placement="top">Save document</Tooltip>
      </TooltipWrapper>

      {/* Tooltip without arrow */}
      <TooltipWrapper>
        <Button>Settings</Button>
        <Tooltip showArrow={false}>Open settings panel</Tooltip>
      </TooltipWrapper>

      {/* Large tooltip with custom delay */}
      <TooltipWrapper delay={500}>
        <Button>Help</Button>
        <Tooltip size="large">
          This is a larger tooltip with more detailed information
          that can span multiple lines.
        </Tooltip>
      </TooltipWrapper>

      {/* Focus-only tooltip */}
      <TooltipWrapper trigger="focus">
        <Button>Focus only</Button>
        <Tooltip>Only appears on keyboard focus</Tooltip>
      </TooltipWrapper>

      {/* Compound tooltip (convenience component) */}
      <CompoundTooltip
        trigger={<Button>Compound</Button>}
        content="This uses the compound component for convenience"
        placement="bottom"
        size="medium"
      />

      {/* Controlled tooltip */}
      <TooltipWrapper
        isOpen={isOpen}
        onOpenChange={setOpen}
        delay={200}
      >
        <Button>Controlled</Button>
        <Tooltip>This tooltip's state is controlled</Tooltip>
      </TooltipWrapper>
    </div>
  );
};`;
