'use server'

import { dbConnect } from './connect.js';

export async function dbExecute(query) {
  try {
    const db = await dbConnect();

    const [rows, fields] = await db.execute(query);

    return rows;
  } catch (error) {
    return JSON.stringify(error);
  }
}
