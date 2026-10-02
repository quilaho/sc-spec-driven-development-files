import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Database from 'better-sqlite3';
import { mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';
import { migrate } from './migrate';

// Prevent the default client from opening agentclinic.db in the project root.
vi.mock('./client', () => ({ default: {} }));

describe('migrate', () => {
  let dir: string;
  let db: InstanceType<typeof Database>;

  // WAL is unsupported for :memory: databases, so use a real file in a temp dir.
  beforeEach(() => {
    dir = mkdtempSync(path.join(tmpdir(), 'agentclinic-'));
    db = new Database(path.join(dir, 'test.db'));
  });

  afterEach(() => {
    db.close();
    rmSync(dir, { recursive: true, force: true });
  });

  it('runs without throwing on a fresh database', () => {
    expect(() => migrate(db)).not.toThrow();
  });

  it('sets WAL journal mode', () => {
    migrate(db);
    const row = db.prepare('PRAGMA journal_mode').get() as { journal_mode: string };
    expect(row.journal_mode).toBe('wal');
  });

  it('is idempotent — running twice does not throw', () => {
    expect(() => {
      migrate(db);
      migrate(db);
    }).not.toThrow();
  });
});
