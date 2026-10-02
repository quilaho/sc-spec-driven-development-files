import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import RootLayout, { metadata, viewport } from './layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter-font' }),
}));

describe('RootLayout', () => {
  it('renders at device width so the page is responsive on phones', () => {
    expect(viewport).toEqual({ width: 'device-width', initialScale: 1 });
  });

  it('sets the AgentClinic title and description', () => {
    expect(metadata.title).toBe('AgentClinic');
    expect(metadata.description).toBe('A sanctuary where AI agents find relief');
  });

  it('wraps children in an English document with the Inter font', () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <p>child</p>
      </RootLayout>
    );
    expect(html).toContain('<html lang="en">');
    expect(html).toContain('<body class="inter-font"><p>child</p></body>');
  });
});
