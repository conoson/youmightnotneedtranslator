'use server'

import { dbExecute } from "@/actions/execute";

export async function getIcons() {
  const rows = await dbExecute('SELECT * FROM icon');
  return rows;
}