# Bookshelf App

A simple React application to add books to your bookshelf with toast notifications.


https://github.com/MohdAadil01/Marquee-Assessment/assets/125737087/bdb9b6ef-d2f3-4a78-b2aa-dcbe4f82eebe


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add books to your bookshelf
- Display toast notifications upon adding a book

## Installation

To get started with the Bookshelf App, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/bookshelf-app.git
    cd bookshelf-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the application in your web browser.
2. You will see a list of books.
3. Click the "Add to Bookshelf" button to add a book to your bookshelf.
4. A toast notification will appear, confirming the addition.

## Project Structure

- **src/**
  - **components/**
    - `BookCard.js`: Component to display individual books.
    - `BookSearch.js`: Component for searching books.
    - `Bookshelf.jsx`: Component for displaying the bookshelf.
    - `Navbar.jsx`: Component for the navigation bar.
  - **pages/**
    - `SearchPage.jsx`: Page for searching and adding books.
    - `BookshelfPage.jsx`: Page for displaying the bookshelf.

  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.

## Dependencies

- React
- react-toastify
