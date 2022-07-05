const TelegramBot = require('node-telegram-bot-api');
// const { text } = require('stream/consumers');

const token = '5586136730:AAFYOqacGSsdROH8bv0BQpYgwI7HQE9X3FA';

const bot = new TelegramBot(token, { polling: true });

const start = () => {
  //   bot.setMyCommands([
  //     { command: '/start', description: 'Всём привет' },
  //     { command: '/pepping', description: 'Проверь себя на пепство' },
  //   ]);

  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
      await bot.sendMessage(chatId, `Всём привет`);
    }
    if (text === '/pepping' || text === '!пеппинг') {
      await bot.sendMessage(
        chatId,
        `Вы на ${Math.round(Math.random() * 100)}% пеп`
      );
    }
  });
};

start();
