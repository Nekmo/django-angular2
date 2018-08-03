FROM node:10
RUN printf "deb http://httpredir.debian.org/debian jessie-backports main non-free\ndeb-src http://httpredir.debian.org/debian jessie-backports main non-free" > /etc/apt/sources.list.d/backports.list
RUN apt update
RUN apt-get -y install libsass-dev -t jessie-backports
RUN mkdir /code
# WORKDIR /code
ADD . /code/
WORKDIR /code/demo/demo/ui
RUN npm start
