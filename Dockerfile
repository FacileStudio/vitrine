# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

ARG SMTP_HOST
ENV SMTP_HOST=$SMTP_HOST

ARG SMTP_PORT
ENV SMTP_PORT=$SMTP_PORT

ARG SMTP_USER
ENV SMTP_USER=$SMTP_USER

ARG SMTP_PASS
ENV SMTP_PASS=$SMTP_PASS

ARG WEBHOOK_URL
ENV WEBHOOK_URL=$WEBHOOK_URL

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 3000

ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]