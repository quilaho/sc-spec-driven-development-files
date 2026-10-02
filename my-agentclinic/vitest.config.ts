import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  // tsconfig keeps jsx: "preserve" for Next.js, so compile JSX explicitly for tests.
  oxc: {
    jsx: { runtime: 'automatic' },
  },
  test: {
    environment: 'node',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
