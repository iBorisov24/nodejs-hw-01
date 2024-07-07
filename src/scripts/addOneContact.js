import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  try {
    const file = await fs.readFile(PATH_DB, 'utf-8');
    const markup = JSON.parse(file);
    markup.push(newContact);
    fs.writeFile(PATH_DB, JSON.stringify(markup));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
