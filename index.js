const inquirer = require('inquirer');
const fs = require('fs');

const generateSVG = ({ color, shape, text }) =>
  `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" />
  <text x="10" y="50" font-size="16" fill="white">${text}</text>
</svg>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color for the logo (e.g., #FFF):',
    },
    {
      type: 'input',
      name: 'shape',
      message: 'Enter the shape for the logo (circle, square, or triangle):',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
    },
  ]);

  const svgContent = generateSVG(answers.color, answers.shape, answers.text);

  const outputDir = path.resolve(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const outputPath = path.join(outputDir, 'logo.svg');
  fs.writeFileSync(outputPath, svgContent);

  console.log('Logo generated successfully and saved as logo.svg.');