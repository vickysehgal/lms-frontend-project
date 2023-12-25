# LMS Frontend

# Setup Instructions

1. Clone the project
   ...
   git clone https://github.com/vickysehgal/lms-frontend-project.git
   ...

2. Move into the directory
   ...
   cd lms-frontend-project
   ...

3. install dependencies
   ...
   npm i
   ...

4. run the server
   ...
   npm run dev
   ...

## setup instruction for tailwind
.....
tailwind official website to install tailwind : https://tailwindcss.com/docs/guides/vite
.....

## Adding plugins and Dependencies
.....
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
.....

## Library to sort imports order wise
.....
1. npm i eslint-plugin-simple-import-sort
....

....
2. then add this in eslintrc.cjs file:
plugins: ['react-refresh','simple-import-sort'],
rules: {
'simple-import-sort/imports': 'error',
}
....

....
3. then add this in settings.json to enable auto import sort on file save in vscode
....
open 'settings.json' and add the below following 

 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
....
now just use command 'ctrl + s' to sort imports automatically
.....

4. Add this rule inside 'eslintrc.cjs' file if it gives "is missing in prop validation" 
.....
Also add this in your eslintrc.json or .js file

"rules": {
    "react/prop-types": "off"
  }
.....  
