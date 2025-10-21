# 🎮 Wordle (Lingo)

A fun and interactive word-guessing game inspired by Wordle and Lingo! Built with React, this game challenges players to guess a 5-letter word within 6 attempts, with color-coded feedback to guide you.

## ✨ Features

- **Interactive Gameplay**: Type letters directly on your keyboard to make guesses
- **Visual Feedback**: 
  - 🟩 Green: Correct letter in the correct position
  - 🟨 Yellow: Correct letter in the wrong position
  - ⬜ Grey: Letter not in the word
- **Smart Keypad**: On-screen keyboard that updates colors based on your guesses
- **Real-time Validation**: 
  - Prevents duplicate words
  - Ensures 5-letter words only
  - Tracks your guess history
- **Win/Loss Modal**: Shows game results when you win or run out of attempts
- **Animated Tiles**: Smooth flip animations when revealing guess results

## 🛠️ Technologies Used

- **React** (v17.0.2) - UI library
- **React Hooks** - State management (useState, useEffect, useCallback)
- **JSON Server** - Mock REST API for words and letters data
- **CSS3** - Custom animations and responsive design
- **Create React App** - Project setup and build tools

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v12 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/astabile/react-wordle.git
   cd react-wordle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install json-server** (if not already installed)
   ```bash
   npm install -g json-server
   ```
   Or use it locally with npx (no global installation needed)

## 🎯 How to Run

You need to run **two servers** simultaneously:

### 1. Start the JSON Server (Backend)
```bash
npx json-server ./data/db.json --port 3004
```
This serves the word list and keyboard letters from `data/db.json`

### 2. Start the React App (Frontend)
Open a new terminal window and run:
```bash
npm start
```
The app will open at [http://localhost:3000](http://localhost:3000)

## 🎮 How to Play

1. The game will randomly select a 5-letter word from the database
2. Type your guess using your keyboard (letters only)
3. Press **Enter** to submit your guess
4. Press **Backspace** to delete the last letter
5. Use the color-coded feedback to guide your next guess:
   - **Green tiles**: Right letter, right spot
   - **Yellow tiles**: Right letter, wrong spot
   - **Grey tiles**: Letter not in the word
6. You have **6 attempts** to guess the word correctly
7. The game ends when you guess correctly or run out of attempts

## 📁 Project Structure

```
react-wordle/
├── data/
│   └── db.json              # Word solutions and keyboard letters
├── public/
├── src/
│   ├── components/
│   │   ├── Grid.js         # Game grid display
│   │   ├── Row.js          # Individual row of letter tiles
│   │   ├── Keypad.js       # On-screen keyboard
│   │   ├── Modal.js        # Win/loss modal
│   │   └── Wordle.js       # Main game component
│   ├── hooks/
│   │   └── useWordle.js    # Custom hook for game logic
│   ├── App.js              # Root component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles and animations
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 🎨 Key Components

- **useWordle Hook**: Manages all game logic including:
  - Letter validation and coloring
  - Guess formatting and submission
  - Keyboard event handling
  - Game state (turns, guesses, history)

- **Grid Component**: Displays 6 rows of 5 letter tiles each

- **Keypad Component**: Shows the interactive keyboard with color feedback

- **Modal Component**: Displays win/loss messages

## 🔧 Customization

### Adding More Words
Edit `data/db.json` and add new words to the `solutions` array:
```json
{
  "id": 16,
  "word": "react"
}
```

### Changing the Port
- JSON Server: Change the port in the run command
- Update the fetch URLs in `App.js` and `Keypad.js` accordingly

### Styling
- Modify `src/index.css` for global styles and animations
- Update color variables for different themes

## 🐛 Troubleshooting

**Keys not registering?**
- Make sure to click on the page (not the console) to give it focus

**Can't fetch words?**
- Ensure JSON server is running on the correct port (3004)
- Check that `data/db.json` exists and is valid JSON

**Port already in use?**
- Change the port: `npx json-server ./data/db.json --port 3005`
- Update fetch URLs in the code

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the original [Wordle](https://www.nytimes.com/games/wordle/index.html) by Josh Wardle
- Lingo TV show format
- Built as a learning project to practice React hooks and state management

## 👨‍💻 Author

Created by [Alejandro Stábile](https://github.com/astabile)

---

**Enjoy the game! 🎉** If you like it, please give it a ⭐️
