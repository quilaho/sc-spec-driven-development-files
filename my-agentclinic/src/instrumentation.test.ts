import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { register } from './instrumentation';

const { migrateMock } = vi.hoisted(() => ({ migrateMock: vi.fn() }));

vi.mock('./db/migrate', () => ({ migrate: migrateMock }));

describe('register', () => {
  beforeEach(() => {
    migrateMock.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('runs migrations in the Node.js runtime', async () => {
    vi.stubEnv('NEXT_RUNTIME', 'nodejs');
    await register();
    expect(migrateMock).toHaveBeenCalledOnce();
  });

  it('skips migrations in the Edge runtime', async () => {
    vi.stubEnv('NEXT_RUNTIME', 'edge');
    await register();
    expect(migrateMock).not.toHaveBeenCalled();
  });

  it('skips migrations when no runtime is set', async () => {
    vi.stubEnv('NEXT_RUNTIME', undefined);
    await register();
    expect(migrateMock).not.toHaveBeenCalled();
  });
});
