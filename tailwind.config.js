/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Активируем поддержку тем
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff', // Белый фон для светлой темы
          dark: '#121212',  // Темно-серый фон для темной темы
        },
        primary: {
          light: '#00A86B', // Зелёный для светлой темы
          dark: '#008B8B',  // Бирюзовый для темной темы
        },
        secondary: {
          light: '#F0F0F0', // Светло-серый для светлой темы
          dark: '#1F1F1F',  // Темно-серый для темной темы
        },
        text: {
          light: '#000000', // Черный текст для светлой темы
          dark: '#FFFFFF',  // Белый текст для темной темы
        },
      },
    },
  },
  plugins: [],
};
