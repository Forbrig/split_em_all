# split_em_all
An open source app to split your expenses between your friends :fries: :pizza: :beers:

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* To get the default background for developing a react-native app follow this guide [react-native getting started](https://facebook.github.io/react-native/docs/getting-started.html) and select the tab _Building Projects with Native Code_.

### Installing
* Tested on Linux [Fedora](https://getfedora.org/).

* After you have set your development kit, you may install some components that aren't downloaded default from react-native.

* Install [_tabNavigation_](https://reactnavigation.org/docs/navigators/tab) on source folder (_split_em_all/SplitemApp_):

```
$ npm install --save react-navigation
```

* Install [_prop-types_](https://www.npmjs.com/package/prop-types) on source folder (_split_em_all/SplitemApp_):

```
$ npm install --save prop-types
```

#### Android Virtual Machine

**PS: [_ATOM_](https://atom.io/) seems to lock the project files not allowing [_NodeJS_](https://nodejs.org) to work properly so make sure to have it closed before you run the next command.**

After you have your VM running from android-studio AVD Manager start the Javascript server:

```
$ npm start
```

Load the app on VM: 
```
$ react-native run-android
```

## Android APK

**in progress**

## Authors

* **Vitor G. Forbrig** - [Forbrig](https://github.com/Forbrig)
