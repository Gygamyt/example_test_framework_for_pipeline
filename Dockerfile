FROM mcr.microsoft.com/playwright:v1.47.0-focal

# Копирование вашего проекта
COPY . /app
WORKDIR /app

RUN mkdir -p /app/playwright-report

# Установка зависимостей
RUN npm install

# Запуск тестов с указанием директории для отчетов
CMD ["npx", "playwright", "test", "--reporter=html", "--output=/app/playwright-report"]