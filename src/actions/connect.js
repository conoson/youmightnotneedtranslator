'use server'

import mysql from 'mysql2/promise';

let connection = null;
export async function dbConnect(){
  if (connection) {
    console.log('aleready Connection');
    return connection
  } else {
    console.log('new Connection');
  }
  
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
    });

    return connection;
  } catch (error) {
    throw new error;
  }
}