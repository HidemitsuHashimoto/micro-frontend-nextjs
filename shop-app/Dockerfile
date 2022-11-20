FROM node:16-alpine AS install-dependencies
WORKDIR /app
COPY . .
RUN npm install

FROM node:16-alpine AS build
WORKDIR /app
COPY --from=install-dependencies /app/node_modules /node_modules
COPY . .
EXPOSE 3000
RUN npm run build
CMD npm run start