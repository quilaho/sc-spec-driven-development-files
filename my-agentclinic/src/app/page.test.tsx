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

  describe('responsive layout', () => {
    const classesOf = (tag: string) => {
      const match = html.match(new RegExp(`<${tag}[^>]*class="([^"]*)"`));
      return match ? match[1].split(' ') : [];
    };

    it('uses tighter padding on phones and widens it from sm up', () => {
      expect(classesOf('main')).toEqual(expect.arrayContaining(['px-4', 'sm:p-8']));
    });

    it('scales the heading up from sm', () => {
      expect(classesOf('h1')).toEqual(expect.arrayContaining(['text-4xl', 'sm:text-5xl']));
    });

    it('scales the tagline up from sm', () => {
      expect(classesOf('p')).toEqual(expect.arrayContaining(['text-lg', 'sm:text-xl']));
    });

    it('makes the CTA full-width on phones and content-sized from sm up', () => {
      expect(classesOf('button')).toEqual(expect.arrayContaining(['w-full', 'sm:w-auto']));
    });
  });
});
