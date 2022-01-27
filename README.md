# MyReads Project

## launch the app with

* Git clone ==> `https://github.com/omarsayed12/Lending-Book-App`

* install all project dependencies with
`npm install`

* start the development server with
`npm start`

* Local host if does not work when start: http://localhost:3000/

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src

    ├── Components
    │   ├── MainPage.js # This Is root Contain Books.js and Search.js
    │   ├── Book.js # This page Contain all Books display
    │   ├── Search.js # This page Contain the Book Search
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── App.js # This is the root of your app. Contains MainPage.js
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

[`BooksAPI.js`](src/BooksAPI.js)

## Function used to get Books BooksAPI

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `updte`

Method Signature:

```js
update(book, shelf)
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Resources and Documentation:

    * Create-react-app Documentation

    * React Router Documentation

    * stackoverflow

    * Project Rubric

    * Udacity JavaScript Style Guide

    * Project starter template

    *Udacity JavaScript Style Guide
