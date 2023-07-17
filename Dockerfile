FROM node:19-buster

RUN export DEBIAN_FRONTEND=noninteractive \
 && apt-get update \
 && apt-get install -yq --no-install-recommends sudo curl wget iproute2 net-tools iputils-ping expect build-essential \
 && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
 && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
 && apt-get update && apt-get -y install google-chrome-stable \
 && apt-get -y autoremove \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /root

ADD . ./

RUN npm install
