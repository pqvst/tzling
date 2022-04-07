#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');


const IMAGE_FILES = ['.png', '.jpeg', '.jpg']
const MAX_SIZE = 1600;
const DRY_RUN = false;

(async function () {

  const root = path.join(__dirname, '../assets/img');

  // Find all image files (recursively) in the assets img folder
  const files = (await walk(root))
    .filter(e => {
      const ext = e.substr(e.lastIndexOf('.'));
      return IMAGE_FILES.includes(ext);
    });

  // Check if any files need to be resized. If so, perform size
  for (let file of files) {
    if (file.includes('.tmp')) {
      continue;
    }
    const img = sharp(file);
    const metadata = await img.metadata();
    const { width, height } = metadata;
    if (width > MAX_SIZE || height > MAX_SIZE) {
      console.log(file, width, height);
      if (!DRY_RUN) {
        const tmp = file + '.tmp';
        await sharp(file).resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true }).rotate().toFile(tmp);
        await fs.rename(tmp, file);
      }
    }
  }

})();



async function walk(dir, list = []) {
  const files = await fs.readdir(dir);

  for (file of files) {
    const filename = path.join(dir, file);
    const stat = await fs.stat(filename);

    if (stat.isDirectory()) {
      list = await walk(filename, list);
    } else {
      list.push(filename);
    }
  }

  return list;
}
