# The steps to create a new project

1. copy the `tsStarterProject` directory from the git commit.

2. change the project to a name of your choosing.

3. `cd` to your project's root directory (same as `package.json` and `tsconfig.json` files).

4. install the packages listed in the `devDependency` property by running `npm install` OR `npm i` in the terminal.

5. run `tsc` (typescript compiler) program using `npx tsc` OR `npx tsc -w` (so it will watch the changes and recompile automatically).  
   Another option is to run using the `package.json`->`scripts` property by running `npm run dev`,
   Which will run in the terminal the code it specifies which is `tsc -w` (`npx` is not needed through script)