FROM node:20-slim AS builder
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
ENV PNPM_APPROVE_BUILD_SCRIPTS=true
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM docker.io/library/nginx:stable-alpine as runner

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5010

CMD ["nginx", "-g", "daemon off;"]
