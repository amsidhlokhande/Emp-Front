### STAGE 1: Build ###
FROM node as Build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx
COPY --from=Build /usr/src/app/dist/Emp-Front /usr/share/nginx/html

