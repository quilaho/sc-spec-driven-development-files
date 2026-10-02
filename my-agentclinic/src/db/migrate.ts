import type Database from 'better-sqlite3';
import db from './client';

export function migrate(database: InstanceType<typeof Database> = db) {
  database.exec(`
    PRAGMA journal_mode = WAL;
  `);
}
