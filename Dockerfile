# Dockerfile
FROM mcr.microsoft.com/playwright:v1.47.0-focal

COPY . /app
WORKDIR /app

RUN npm install

# Используем ENTRYPOINT и CMD для поддержки параметров запуска
ENTRYPOINT ["npx", "playwright", "test"]
CMD ["--reporter=html"]
