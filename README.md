# Quote Generator

A simple, elegant web application that displays random inspirational quotes with the ability to generate new quotes, tweet them, copy to clipboard, and even have them read aloud.

![Quote Generator Screenshot](https://res.cloudinary.com/dtogfz0uu/image/upload/v1741469995/Screenshot_2025-03-09_030912_uq9avh.png)

## Features

- 🔄 Generate random inspirational quotes
- 🐦 Share quotes directly on Twitter
- 📋 Copy quotes to clipboard with one click
- 🔊 Text-to-speech functionality to hear quotes

## Technologies Used

- HTML5
- CSS3 (with Flexbox for responsive layout)
- JavaScript (ES6+)
- External APIs:
  - ZenQuotes.io for quote generation
  - Twitter Web Intent for sharing
  - Web Speech API for text-to-speech

## How It Works

The application fetches random quotes from the ZenQuotes API and displays them on the screen. Users can:

1. Click "New Quote" to fetch and display a new random quote
2. Click "Tweet" to share the current quote on Twitter
3. Click "Copy" to copy the quote and author to clipboard
4. Click "Speak" to have the browser read the quote aloud

## Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/quote-generator.git
```

2. Navigate to the project directory:
```
cd quote-generator
```

3. Open `index.html` in your browser, or use a local development server.

## Usage

Simply open the application in a modern web browser. The app will automatically load a random quote on startup. Use the buttons to interact with the quote:

- **New Quote**: Fetches and displays a new random quote
- **Tweet**: Opens Twitter with the quote pre-populated in a new tweet
- **Copy**: Copies the current quote and author to your clipboard
- **Speak**: Uses your browser's text-to-speech capabilities to read the quote aloud

## Customization

You can easily customize the appearance by modifying the `styles.css` file:

- Change the background gradient in the `body` selector
- Modify the quote container styling in the `.quote-container` selector
- Adjust button colors in the `button` selector

## Browser Compatibility

This application works best in modern browsers that support:
- ES6+ JavaScript
- Fetch API
- Web Speech API
- Clipboard API

## Credits

- Quotes provided by [ZenQuotes API](https://zenquotes.io/)
- Icons by [Font Awesome](https://fontawesome.com/)

## License

[MIT License](LICENSE)

## Future Improvements

- Add ability to filter quotes by category
- Implement local storage to save favorite quotes
- Add dark/light theme toggle
- Create a quotes collection page

---

Made with ❤️ by mayurCoder2004
