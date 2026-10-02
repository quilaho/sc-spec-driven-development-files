import { describe, it, expect, vi } from 'vitest';
import path from 'path';

const { DatabaseMock } = vi.hoisted(() => ({
  DatabaseMock: vi.fn(function (this: { file: string }, file: string) {
    this.file = file;
  }),
}));

vi.mock('better-sqlite3', () => ({ default: DatabaseMock }));

describe('db client', () => {
  it('opens agentclinic.db in the working directory', async () => {
    const { default: db } = await import('./client');
    expect(DatabaseMock).toHaveBeenCalledOnce();
    expect(DatabaseMock).toHaveBeenCalledWith(path.join(process.cwd(), 'agentclinic.db'));
    expect(db).toBeInstanceOf(DatabaseMock);
  });

  it('exports a single shared instance', async () => {
    const first = (await import('./client')).default;
    const second = (await import('./client')).default;
    expect(first).toBe(second);
    expect(DatabaseMock).toHaveBeenCalledOnce();
  });
});
