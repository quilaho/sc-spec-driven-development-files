import db from './client';

export function migrate() {
  db.exec(`
    PRAGMA journal_mode = WAL;
  `);
}
