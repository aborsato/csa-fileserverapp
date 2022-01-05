# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build the Application
Run the command:
```bash
npm run build
```

## Run Locally
1. Add a file `api/local.settings.json`:
   ```json
   {
       "IsEncrypted": false,
       "Values": {
           "ApplicationStorage": "[Azure Storage Key]",
           "db_server": "abcdefg.postgres.database.azure.com",
           "db_user": "",
           "db_password": "",
           "db_database": ""
       }
   }
   ```

1. Run the command to start the Static Web App server
   ```bash
   swa start build --api-location api
   ```

## Run the Function API Locally:
1. Add a file `api/local.settings.json` (see previous)
1. Start the API
   ```bash
   cd api
   func start
   ```
1. Call the API
   ```bash
   curl -H "Content-Type: application/json" -X GET http://localhost:7071/api/files
   curl -H "Content-Type: application/json" -X POST -d '{"blobName":"file"}' http://localhost:7071/api/sas
   ```

## Database
Create a table to store the files metadata (used by the API to retrieve files by user)
```sql
CREATE TABLE files (
	id serial PRIMARY KEY,
	name VARCHAR ( 255 ) UNIQUE NOT NULL,
	owner VARCHAR ( 50 ) NOT NULL,
	created_on TIMESTAMP NOT NULL
);
```
