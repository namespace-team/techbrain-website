const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define the input and output directories
const ejsDirectory = path.join(__dirname, 'views', 'ejs');
const htmlDirectory = path.join(__dirname, 'views', 'html');

// Function to compile the index.ejs file
const compileIndexEjs = () => {
  const indexEjsFilePath = path.join(__dirname, 'index.ejs');
  if (fs.existsSync(indexEjsFilePath)) {
    const ejsContent = fs.readFileSync(indexEjsFilePath, 'utf-8');
    const htmlFilePath = path.join(htmlDirectory, 'index.html');

    fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });

    const html = ejs.render(ejsContent, { filename: indexEjsFilePath });

    fs.writeFileSync(htmlFilePath, html, 'utf-8');

    console.log(`Compiled ${indexEjsFilePath} to ${htmlFilePath}`);
  } else {
    console.error('index.ejs file not found.');
  }
};

compileIndexEjs();
