import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import '../index.css'

const steps = [
  {
    id: '0',
    message: '👋 Welcome to Kids Shop! How can I help you today?',
    trigger: '1',
  },
  {
    id: '1',
    options: [
      { value: 'buy', label: 'I want to buy a product', trigger: 'buyProduct' },
      { value: 'help', label: 'I need help', trigger: 'help' },
    ],
  },
  {
    id: 'buyProduct',
    message: 'Great! What type of product are you looking for?',
    trigger: 'productType',
  },
  {
    id: 'productType',
    options: [
      { value: 'toy', label: '🎮 Toys', trigger: 'showToys' },
      { value: 'clothing', label: '👕 Clothing', trigger: 'showClothing' },
      { value: 'book', label: '📚 Books', trigger: 'showBooks' },
    ],
  },
  {
    id: 'showToys',
    message: 'Here are some popular toys: [list of toys]',
    end: true,
  },
  {
    id: 'showClothing',
    message: 'Here are some trendy clothing items: [list of clothing]',
    end: true,
  },
  {
    id: 'showBooks',
    message: 'Here are some best-selling books: [list of books]',
    end: true,
  },
  {
    id: 'help',
    message: 'Sure, how can I assist you?',
    end: true,
  },
];

const theme = {
  background: '#FFE4E1',
  headerBgColor: '#FF6347',
  headerFontSize: '24px',
  botBubbleColor: '#FFD700',
  headerFontColor: '#FFFFFF',
  botFontColor: '#000000',
  userBubbleColor: '#00CED1',
  userFontColor: '#000000',
};

const config = {
  botAvatar: "https://th.bing.com/th/id/OIP.tIubCelwRXPp83BRWjMUzQHaEo?rs=1&pid=ImgDetMain",
  floating: true,
};

function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Kids Shop"
          steps={steps}
          {...config}
        />
    </ThemeProvider>
  );
}

export default Chatbot;
