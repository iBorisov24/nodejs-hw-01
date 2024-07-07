import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const file = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    return file;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
