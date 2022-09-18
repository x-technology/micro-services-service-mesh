FROM golang:1.19.1-alpine3.16 as builder

RUN apk add --no-cache make

WORKDIR /build
ADD . /build/

RUN go mod vendor
RUN make build


FROM alpine as service

#ADD helloworld /helloworld

COPY --from=builder /build/helloworld /helloworld

RUN chmod +x /helloworld

ENTRYPOINT [ "/helloworld" ]
