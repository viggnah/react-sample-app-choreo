#FROM node:16-alpine as builder
# Set the working directory to /app inside the container
#WORKDIR /app
# Copy app files
#COPY build build
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
#RUN npm ci 
# Build the app
#RUN npm run build

# Bundle static assets with nginx
# FROM nginx:1.22.1-alpine as production
FROM nginxinc/nginx-unprivileged:1.22.1-alpine as production
WORKDIR /app
ENV NODE_ENV production
# Copy built assets from 
COPY build /usr/share/nginx/html
# Add your routing config to nginx
COPY deployment-artifacts/app-default.conf /etc/nginx/conf.d/app-default.conf
# Expose port
EXPOSE 8080
# add user
USER 10014
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
