# Sky Angel Game

## Introduction

Sky Angel is a web-based game developed using HTML, CSS, and JavaScript with React.js. The game is designed to work on a tablet resolution of 1024x768 pixels and centers itself on larger screens. The game involves flying an aircraft through the sky, avoiding birds, and collecting parachutes and stars to increase fuel and score.

## Features

- **Aircraft Movement**: Use arrow keys to move the aircraft up, down, left, and right.
- **Fuel Management**: The aircraft starts with 10 fuel points, decreasing by 1 point per second. Collect parachutes to gain 10 fuel points.
- **Star Collection**: Collect stars to increase your score.
- **Bird Avoidance**: Avoid birds to keep the game going. Colliding with a bird ends the game.
- **Pause/Resume**: Pause the game by pressing the space bar or clicking the pause button.
- **Game Over**: The game ends when fuel reaches zero or the aircraft collides with a bird.
- **User Registration**: Upon game over, enter your name to save your score and view the ranking.
- **Ranking System**: View the ranking of players based on stars collected and flight time.
- **Increasing Difficulty**: The game gets harder as time increases, with more birds appearing and faster movement required.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anhminh10a2hoa/sky_angel
   ```
2. Navigate to the project directory:
   ```bash
   cd sky-angel
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- **Start Game**: Click the "Start Game" button to begin.
- **Controls**:
  - **Arrow Keys**: Move the aircraft.
  - **Space Bar**: Pause/Resume the game.
- **Game Over**: When the game ends, enter your name and click "Continue" to submit your score.

## Project Structure

```
sky-angel/
├── node_modules/
├── public/
├── src/
│   ├── __mocks__/
│   ├── __tests__/
│   ├── assets/
│   ├── components/
│   │   ├── Aircraft.tsx
│   │   ├── Bird.tsx
│   │   ├── Cloud.tsx
│   │   ├── GameOver.tsx
│   │   ├── Parachute.tsx
│   │   ├── RankingScreen.tsx
│   │   ├── Start.tsx
│   │   └── StartingScreen.tsx
│   ├── hooks/
│   │   └── useGameLogic.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── TS_setupTests.ts
│   └── TS_vite-env.d.ts
├── .eslintrc.json
├── .gitignore
├── .prettierc.json
├── eslint.config.js
├── index.html
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Dependencies

- **React**: ^19.0.0
- **React DOM**: ^19.0.0
- **Axios**: ^1.7.9
- **Vite**: ^6.1.0
- **TypeScript**: ~5.7.2
- **Jest**: ^29.7.0 (for testing)

## Scripts

- **Start Development Server**: `npm run dev`
- **Build Project**: `npm run build`
- **Lint Code**: `npm run lint`
- **Fix Linting Issues**: `npm run lint:fix`
- **Run Tests**: `npm run test`
- **Format Code**: `npm run format`

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
