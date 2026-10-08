FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ARG VITE_API_URL=/api
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine

USER root
RUN apk upgrade --no-cache
USER nginx

LABEL org.opencontainers.image.title="Vishal Sharma Portfolio" \
	org.opencontainers.image.description="Personal software engineering portfolio for Vishal Sharma"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080