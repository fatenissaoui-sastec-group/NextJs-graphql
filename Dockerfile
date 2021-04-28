# Install dependencies only when needed
FROM node:alpine AS deps

ARG NODE_ENV

#RUN apk add  openssh-client
#RUN apk add  git
RUN apk add  libc6-compat

WORKDIR /app

#ADD .ssh/id_rsa /root/.ssh/id_rsa
#RUN chmod 600 /root/.ssh/id_rsa
#RUN echo "StrictHostKeyChecking no " > /root/.ssh/config

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app

ARG BASE_PATH
ENV BASE_PATH $BASE_PATH

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN printenv | sed 's/\([^=]*=\)\(.*\)/\1"\2"/' > .env
RUN npm run build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV $NODE_ENV

COPY --from=builder /app/ ./

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]