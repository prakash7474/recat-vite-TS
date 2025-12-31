# Time Tracker

A beautiful and interactive time tracking application built with Preact, Vite, and TypeScript. Track your daily activities with pastel-colored charts and get insights into your time distribution.

## Features

- **Activity Tracking**: Add activities with corresponding hours spent
- **Visual Charts**: Beautiful pastel charts powered by Chart.js
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Luxury Theme**: Elegant glass-morphism UI with smooth animations
- **Activity Icons**: Emojis for different activity types (sleep, work, exercise, etc.)
- **Real-time Updates**: Charts update instantly as you add activities

## Tech Stack

- **Frontend Framework**: Preact
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **UI Components**: Custom components with class-variance-authority

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd work_chart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter an activity name (e.g., sleep, work, exercise)
2. Specify the number of hours spent on that activity
3. Click "Add Activity" to add it to your tracker
4. View the time distribution chart and activity summary

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
work_chart/
├── public/
│   ├── bg.svg
│   └── work_chart_logo.png
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── EnhancedTimeChart.tsx
│   │       ├── input.tsx
│   │       ├── TimeChart.tsx
│   │       └── Timeforrm.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── enhanced-home.tsx
│   │   └── home.tsx
│   ├── styles/
│   │   ├── enhanced.css
│   │   └── luxury-theme.css
│   ├── app.css
│   ├── app.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
