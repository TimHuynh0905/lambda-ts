FROM public.ecr.aws/lambda/nodejs:14 as builder
ARG ENTRY
WORKDIR /usr/app
COPY package.json ./
COPY tsconfig.json ./
COPY webpack.config.js ./
COPY src/ ./src/
RUN npm install
RUN npm run build:prod


FROM public.ecr.aws/lambda/nodejs:14
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /usr/app/build/* ./
CMD ["index.handler"]