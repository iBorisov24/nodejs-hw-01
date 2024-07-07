import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const file = JSON.parse(await fs.readFile(PATH_DB, { encoding: 'utf-8' }));
    return `Current contacts legnth: ${file.length}`;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
