# A Split View / Panel PhoneGap template using Vue.js and Framework7 to develop with Typescript

Vue.js, Framework7, and Cordova / PhoneGap Template with Babel, Webpack and Hot Reloading

![example image iOS](https://github.com/lcaprini/phonegap-template-vue-f7-ts-split-panel/raw/master/example-split-iOS.png)
![example image android](https://github.com/lcaprini/phonegap-template-vue-f7-ts-split-panel/raw/master/example-split-android.png)

## Getting Started

### Prerequisites

To use this template, you'll need Node.js v5 or newer.

### Installation

To use this as a template, use Cordova 6.0.0+ and create a new project:

```
cordova create MyAppName --template=https://github.com/lcaprini/phonegap-template-vue-f7-ts-split-panel
```

or

```
phonegap create MyAppName --template https://github.com/lcaprini/phonegap-template-vue-f7-ts-split-panel
```

then

```
cd MyAppName
npm install
```

### Run the app in the browser / simulator

Run this to start the development webpack server:

```
npm run dev
```

You can then open the app in your browser by visiting [localhost:8080](http://localhost:8080)

Open it in the iOS Simulator by running (in another terminal):

`cordova platform add ios` or `phonegap platform add ios`

then

```
npm run cordova-run-ios
```

Or in the Android emulator with:

`cordova platform add android` or `phonegap platform add android`

then

```
npm run cordova-run-android
```

(both of which are just calling `cordova run ios` and `cordova run android`)


### Build the app for production

To build the app without the development hot module reloading server:

```
npm run build
```

After that, the normal Cordova / PhoneGap commands can be used such as `phonegap serve`, or `cordova run ios`, etc.
