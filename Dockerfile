FROM amazon/aws-lambda-nodejs:12
COPY app ./
RUN npm install
CMD [ "index.handler" ]