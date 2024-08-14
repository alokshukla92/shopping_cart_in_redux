const fs = require('fs');
const path = require('path');

const folders = [
  'src/components',
  'src/redux/slices',
  'src/pages'
];

const files = [
  'src/components/ProductList.js',
  'src/components/Cart.js',
  'src/redux/slices/cartSlice.js',
  'src/redux/store.js',
  'src/pages/HomePage.js',
  'src/App.js',
  'src/index.js'
];

// Function to create folders
const createFolders = () => {
  folders.forEach(folder => {
    if (!fs.existsSync(folder)){
      fs.mkdirSync(folder, { recursive: true });
      console.log(`Created folder: ${folder}`);
    }
  });
};

// Function to create files
const createFiles = () => {
  files.forEach(file => {
    fs.writeFileSync(file, '', 'utf8');
    console.log(`Created file: ${file}`);
  });
};

// Execute the functions
createFolders();
createFiles();
