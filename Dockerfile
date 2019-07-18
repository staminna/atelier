# base image
FROM node:8.4

# set working directory
WORKDIR /Users/jorgenunes/webdev/modos

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.0 -g

# bundle app source
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]

