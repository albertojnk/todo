FROM golang:1.14.1-stretch

RUN go get github.com/cespare/reflex

COPY reflex.conf /

ENTRYPOINT ["reflex", "-c", "/reflex.conf"]
