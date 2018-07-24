FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
# WORKDIR /code
ADD . /code/
WORKDIR /code/demo
RUN pip install -r requirements.txt
# ADD demo/requirements.txt /code/
# RUN pip install -r requirements.txt
# ADD . /code/
