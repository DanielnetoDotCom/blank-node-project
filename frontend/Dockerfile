FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=development

COPY . .

RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install

RUN npm install -g vite
RUN npm install -g @rollup/rollup-linux-x64-gnu

ENV PORT=4001
ENV VITE_API_BASE_URL=http://backend:4000

EXPOSE 4001

CMD ["sh", "-c", "npm run dev"]
