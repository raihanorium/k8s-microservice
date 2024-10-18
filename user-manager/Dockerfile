FROM node:20 as build
WORKDIR /app
COPY package*.json /
RUN npm install
COPY . .
RUN ENV=production npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh
EXPOSE 80