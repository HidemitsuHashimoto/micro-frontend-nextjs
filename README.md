# micro-frontend-nextjs

## How to use with Docker (Recomended)
### Change main config
First you need check main-app/next.config.js and change remotes host accordingly your Operation System.

```
remotes: {
  // For Windows use host.docker.internal
  shop: `shop@http://host.docker.internal:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
  // For Linux use 172.17.0.1
  // shop: `shop@http://172.17.0.1:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
},
```

### Enter the host folder and just use docker compose command

```shell
docker compose up -d
```

Test the Main App to see import Shop App components.

Main app is running in 3001 port.

Shop app is running in 3000 port.

---
## How to use in local
### Install dependencies

Yo need to install dependencies in each project folder.

### Enter in shop-app folder
```shell
cd shop-app
```
### Install dependencies
```shell
npm i
```
---
### Enter in main-app folder
```shell
cd main-app
```
### Install dependencies
```shell
npm i
```
---


### Enter in main-app folder
```shell
cd main-app
```
### Run app
```shell
npm run dev
```

### Enter in shop-app folder
```shell
cd shop-app
```
### Run app
```shell
npm run dev
```