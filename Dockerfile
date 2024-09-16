# Dockerfile
FROM mcr.microsoft.com/playwright:v1.47.0-focal

COPY . /app
WORKDIR /app

RUN npm install

CMD ["npx", "playwright", "test", "--reporter=html"]
