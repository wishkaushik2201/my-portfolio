# Vishal Sharma Portfolio

Personal portfolio built with React, TypeScript, and Vite.

## Run locally

Start PostgreSQL and Redis from the backend project:

```powershell
cd ..\python-project
Copy-Item .env.example .env
docker compose up -d db redis
```

In another terminal, start the API:

```powershell
cd ..\python-project
.\.venv\Scripts\Activate.ps1
pip install -r backend\requirements.txt
uvicorn --app-dir backend app.main:app --reload --port 8000
```

Then start this frontend from `react-project`:

```sh
npm ci
npm run dev
```

The Vite dev server proxies `/api` requests to the API at `http://127.0.0.1:8000`.
Portfolio data is loaded from `GET /api/portfolio`, and the contact form submits to
`POST /api/contact`. API documentation is available at
<http://localhost:8000/api/docs>.

## Publish to Docker Hub

Create a Docker Hub repository named `vishal_portfolio` under the `wishkaushik` account and sign in locally:

```sh
docker login
```

Build the verified local image, tag it for Docker Hub, and publish it:

```sh
docker build -t vishal-portfolio:1.0.2 .
docker tag vishal-portfolio:1.0.2 wishkaushik/vishal_portfolio:tagname
docker push wishkaushik/vishal_portfolio:tagname
```

Run the published image at `http://localhost:8080`:

```sh
docker run --rm -p 8080:8080 wishkaushik/vishal_portfolio:tagname
```

The image builds the site with Node.js and serves the static output using unprivileged Nginx on port 8080.