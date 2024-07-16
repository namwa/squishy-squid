# Squishy Squid landing page

This site is built with HTML, Tailwind CSS and a hand built Static Site Generator (SSG).

## To start the project

1. Inside `src` directory, run ```npm install``` to install dependencies.
2. To compile Tailwind CSS for production, run ```npm run build```. The minify CSS will be generated
in `static/css/output.css`.

## Production

- Run ```sitebuild genroutes``` on the root directory to generate routes mapping to be used in Firebase hosting.

- Copy the generated routes to firebase.json

## Development

- Run ```sitebuild serve``` on the root diretory.

- To watch for styles changes, `cd` to `src` directory and run ```npm run watch```.
