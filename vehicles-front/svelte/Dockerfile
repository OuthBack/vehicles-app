FROM node:16.14.0 

WORKDIR /app
COPY . .

RUN npm i -g pnpm && pnpm install

RUN pnpm install
RUN pnpm build
ENTRYPOINT ["pnpm", "preview", "--host"]

