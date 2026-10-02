import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import Home from './page';

describe('Home page', () => {
  const html = renderToStaticMarkup(<Home />);

  it('renders the AgentClinic heading', () => {
    expect(html).toMatch(/<h1[^>]*>AgentClinic<\/h1>/);
  });

  it('renders the tagline', () => {
    expect(html).toContain('A sanctuary where AI agents find relief');
  });

  it('renders a large "Book an Appointment" button', () => {
    expect(html).toMatch(/<button[^>]*class="[^"]*h-11[^"]*"[^>]*>Book an Appointment<\/button>/);
  });
});
