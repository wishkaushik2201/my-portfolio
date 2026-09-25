# Vishal Sharma Portfolio

Personal portfolio built with React, TypeScript, and Vite.

## Run locally

```sh
npm ci
npm run dev
```

## Publish to Docker Hub

Create a Docker Hub repository named `vishal-portfolio` under your account and sign in locally:

```sh
docker login
```

Replace `YOUR_DOCKERHUB_USERNAME` with your Docker Hub username, then build and push a versioned image and the `latest` tag:

```sh
docker build -t YOUR_DOCKERHUB_USERNAME/vishal-portfolio:1.0.0 .
docker tag YOUR_DOCKERHUB_USERNAME/vishal-portfolio:1.0.0 YOUR_DOCKERHUB_USERNAME/vishal-portfolio:latest
docker push YOUR_DOCKERHUB_USERNAME/vishal-portfolio:1.0.0
docker push YOUR_DOCKERHUB_USERNAME/vishal-portfolio:latest
```

Run the published image at `http://localhost:8080`:

```sh
docker run --rm -p 8080:8080 YOUR_DOCKERHUB_USERNAME/vishal-portfolio:1.0.0
```

The image builds the site with Node.js and serves the static output using unprivileged Nginx on port 8080.