import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('tsconfig', () => {
  const raw = readFileSync(resolve(process.cwd(), 'tsconfig.json'), 'utf-8');
  const tsconfig = JSON.parse(raw);

  it('has strict mode enabled', () => {
    expect(tsconfig.compilerOptions.strict).toBe(true);
  });

  it('does not emit output files', () => {
    expect(tsconfig.compilerOptions.noEmit).toBe(true);
  });
});
