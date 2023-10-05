FROM node:18 AS builder

WORKDIR /

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /dist usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]