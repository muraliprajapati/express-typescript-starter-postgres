FROM node:10

ENV PORT 8000

EXPOSE 8000

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app
COPY package.json /app/
RUN yarn install

COPY build /app/build/
COPY .env.example /app/build/
COPY .env.example /app/
RUN touch .env

# ADD init.sh .
# RUN chmod +x init.sh
# ENTRYPOINT ["./init.sh"]

# cmd to start service
ENV NODE_ENV=production
CMD ["node", "build/src/index.js"]
