FROM public.ecr.aws/lambda/nodejs:14 as builder
WORKDIR /usr/app
COPY package.json ./
COPY tsconfig.json ./
COPY webpack.config.js ./
COPY webpack.config.prod.js ./
COPY src/ ./src/
ARG ENTRY
RUN npm install
RUN npm run build:prod -- --env ENTRY=$ENTRY


FROM public.ecr.aws/lambda/nodejs:14
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /usr/app/build/* ./
CMD ["index.handler"]