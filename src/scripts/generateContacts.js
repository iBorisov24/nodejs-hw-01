import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = [];

  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    newContacts.push(contact);
  }

  try {
    const oldContacts = await fs.readFile(PATH_DB, 'utf-8');
    const markup = JSON.parse(oldContacts);
    const newDB = markup.concat(newContacts);
    fs.writeFile(PATH_DB, JSON.stringify(newDB));
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
