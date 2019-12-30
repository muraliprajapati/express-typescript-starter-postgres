FROM node:8

ARG APP_BUILD_DATE
ARG NODE_ENV
ARG DB_URI
ARG DB_NAME
ARG SESSION_SECRET

ENV PORT 8000

EXPOSE 8000

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

ADD package.json  /app/

RUN npm install -g pm2
RUN npm install

COPY . /app/
ENV APP_BUILD_DATE=${BUILD_DATE} \
  NODE_ENV=${NODE_ENV} \
  DB_URI=${DB_URI} \
  DB_NAME=${DB_NAME} \
  SESSION_SECRET=${SESSION_SECRET}

# ADD init.sh .
# RUN chmod +x init.sh
# ENTRYPOINT ["./init.sh"]
# cmd to start service
CMD ["npm", "start"]
