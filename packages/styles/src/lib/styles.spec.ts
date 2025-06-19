import { tokens, breakpoints } from './styles.js';

describe('@mono/styles', () => {
  describe('design tokens', () => {
    it('should provide color tokens', () => {
      expect(tokens.colors.primary[600]).toBe('var(--color-primary-600)');
      expect(tokens.colors.neutral[50]).toBe('var(--color-neutral-50)');
    });

    it('should provide spacing tokens', () => {
      expect(tokens.spacing[4]).toBe('var(--space-4)');
      expect(tokens.spacing[8]).toBe('var(--space-8)');
    });

    it('should provide font size tokens', () => {
      expect(tokens.fontSize.base).toBe('var(--font-size-base)');
      expect(tokens.fontSize.xl).toBe('var(--font-size-xl)');
    });
  });

  describe('breakpoints', () => {
    it('should provide breakpoint values', () => {
      expect(breakpoints.sm).toBe('640px');
      expect(breakpoints.md).toBe('768px');
      expect(breakpoints.lg).toBe('1024px');
    });
  });
});
