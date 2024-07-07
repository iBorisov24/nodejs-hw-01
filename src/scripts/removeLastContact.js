import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const removeLastContact = async () => {
  try {
    const promiseFile = await fs.readFile(PATH_DB, 'utf-8');
    const file = JSON.parse(promiseFile);

    if (file.length !== 0) {
      const lastElement = file.length - 1;
      const markup = file.slice(0, lastElement);
      fs.writeFile(PATH_DB, JSON.stringify(markup));
    } else console.error('sorry, array dont have any contact');
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
