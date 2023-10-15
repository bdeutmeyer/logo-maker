const prompts = [
    {
      type: 'input',
      message: 'Please enter the text you would like your logo to display (no more than 3 characters).',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What text color would you like (color keyword or hexadecimal number)?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape would you like?',
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      message: 'What color would you like the shape to be (color keyword or hexadecimal number)?',
      name: 'shapeColor',
    },
  ];

  module.exports = prompts;