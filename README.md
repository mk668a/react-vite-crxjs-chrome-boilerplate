# React + Vitejs + CRXJS Chrome Extension Boilerplate

This project is a boilerplate for creating a Google Chrome Extension with React + Vitejs + CRXJS.

## run

1. run docker

`docker compose up -d --build`

2. Turn on developer mode in the Chrome [Extension page](chrome://extensions/) and load dist file

### restart

`docker restart extension`

### logs

`docker logs extension -f`

### stop

`docker stop extension`

### background(service-worker) development

Clicking on service worker link in [chrome://extensions/](chrome://extensions/) launches the developer tool

## build

Access within docker environment

`docker compose exec extension ash`

Run build command

`/usr/src/app # yarn build`
