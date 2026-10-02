import { describe, it, expect } from 'vitest';
import { createRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button, buttonVariants } from './button';

describe('buttonVariants', () => {
  it('applies default variant and size when none are given', () => {
    const classes = buttonVariants();
    expect(classes).toContain('bg-primary');
    expect(classes).toContain('h-10 px-4 py-2');
  });

  it.each([
    ['destructive', 'bg-destructive'],
    ['outline', 'border-input'],
    ['secondary', 'bg-secondary'],
    ['ghost', 'hover:bg-accent'],
    ['link', 'underline-offset-4'],
  ] as const)('applies the %s variant', (variant, expected) => {
    const classes = buttonVariants({ variant });
    expect(classes).toContain(expected);
    expect(classes).not.toContain('bg-primary ');
  });

  it.each([
    ['sm', 'h-9'],
    ['lg', 'h-11'],
    ['icon', 'w-10'],
  ] as const)('applies the %s size', (size, expected) => {
    expect(buttonVariants({ size })).toContain(expected);
  });
});

describe('Button', () => {
  it('renders a <button> by default', () => {
    const html = renderToStaticMarkup(<Button>Click me</Button>);
    expect(html).toMatch(/^<button[^>]*>Click me<\/button>$/);
  });

  it('merges a custom className, letting it override conflicting classes', () => {
    const html = renderToStaticMarkup(<Button className="px-10 extra">Go</Button>);
    expect(html).toContain('px-10');
    expect(html).toContain('extra');
    expect(html).not.toContain('px-4');
  });

  it('forwards native button attributes', () => {
    const html = renderToStaticMarkup(
      <Button type="submit" disabled aria-label="save">
        Save
      </Button>
    );
    expect(html).toContain('type="submit"');
    expect(html).toContain('disabled');
    expect(html).toContain('aria-label="save"');
  });

  it('renders its child element instead of a <button> when asChild is set', () => {
    const html = renderToStaticMarkup(
      <Button asChild variant="link">
        <a href="/book">Book</a>
      </Button>
    );
    expect(html).toMatch(/^<a [^>]*href="\/book"[^>]*>Book<\/a>$/);
    expect(html).toContain('underline-offset-4');
    expect(html).not.toContain('<button');
  });

  it('accepts a ref', () => {
    const ref = createRef<HTMLButtonElement>();
    expect(() => renderToStaticMarkup(<Button ref={ref}>Ref</Button>)).not.toThrow();
  });

  it('has a display name for React devtools', () => {
    expect(Button.displayName).toBe('Button');
  });
});
