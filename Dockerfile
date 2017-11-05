FROM alpine:edge
RUN apk add --no-cache nodejs
ADD . /build
RUN cd /build && npm install --unsafe-perm
RUN cd /build && npm start
