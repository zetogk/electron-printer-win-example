# electron-printer-win-example
Example of Electron app using printer package

1. Clone this repo.
2. ```npm install```
3. Go to node_modules/printer folder
* If your computer is 32 bits execute ```node-gyp rebuild --target=1.7.8 --arch=win32```
* If your computer is 64 bits execute ```node-gyp rebuild --target=1.7.8 --arch=x64```
* Note: --target should be equal to the Electron version.
4. Go to root folder of project and ```npm run start```
