# split_em_all
An open source app to split your expenses between your friends :fries: :pizza: :beers:

### Keep an eye in the Progress:

Nothing = _TODO_  
Marked = _DOING_  
Strikethrough = _DONE_  

- [x] ~~Login~~
- [x] ~~Signin~~
- [x] Home
- [ ] Profile
- [ ] Order
- [ ] Order.InsertProduct
- [ ] AddData
- [ ] AddData.Product
- [ ] AddData.Subject
- [ ] Database Functions (Backend)
- [ ] Database Core (Backend)

<p align="center">
  <b>Current UI (2017-12-29):</b>
  <br><br>
  <img src="https://github.com/Forbrig/split_em_all/blob/master/UI%20state/2017-12-29.gif">
</p>

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

* **Bonus:** You may add syntax highlight for [_ATOM_](https://atom.io/), [babel package](https://atom.io/packages/language-babel) is one that fits great.

```
$ apm install language-babel
```
Then in atom on the botton left click in the current language and select ``Babel ES6 Javascript``.

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

## License


This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
