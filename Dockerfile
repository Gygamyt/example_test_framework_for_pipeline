FROM mcr.microsoft.com/playwright:v1.47.0-focal

# Копирование вашего проекта
COPY . /app
WORKDIR /app

# Установка зависимостей
RUN npm install

# Создание директории для отчетов
RUN mkdir -p /app/playwright-report

# Запуск тестов с указанием директории для отчетов
CMD ["npx", "playwright", "test", "--reporter=html", "--output=/app/playwright-report"]