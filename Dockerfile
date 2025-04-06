# Step 1: Build React App
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve with Express
FROM node:18-slim
WORKDIR /app
COPY --from=build /app/build ./build
COPY server.js .
RUN npm install express
EXPOSE 8080
CMD ["node", "server.js"]