FROM mcr.microsoft.com/playwright:v1.47.0-focal

# Копирование вашего проекта
COPY . /app
WORKDIR /app

# Установка зависимостей
RUN npm install

# Запуск тестов
CMD ["npx", "playwright", "test"]
