# build environment
FROM node:alpine as build
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm install
RUN npm run build
RUN pwd

# production environment
FROM nginx:stable-alpine
COPY --from=build ./build /var/www/public

# If you are using react-router, uncomment below line
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]