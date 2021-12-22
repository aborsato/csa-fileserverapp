# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build
Run the command:
```bash
npm run build
```

## Run Locally
Run the command:
```bash
swa start build --api-location api
```

Run the function:
```bash
cd api
func start
curl -H "Content-Type: application/json" -X POST -d '{"blobName":"file"}' http://localhost:7071/api/sas
