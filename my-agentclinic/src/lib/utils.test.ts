import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('returns a single class unchanged', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('merges multiple classes', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('ignores falsy values', () => {
    expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar');
  });

  it('deduplicates conflicting Tailwind classes, keeping the last', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('merges conditional classes', () => {
    const active = true;
    expect(cn('base', active && 'active')).toBe('base active');
  });
});
