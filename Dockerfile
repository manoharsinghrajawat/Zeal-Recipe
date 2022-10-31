FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./
# Bundle app source
COPY . .

RUN yarn install
RUN yarn build
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 5000
CMD [ "yarn", "start" ]