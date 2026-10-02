import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'agentclinic.db');

const db = new Database(DB_PATH);

export default db;
