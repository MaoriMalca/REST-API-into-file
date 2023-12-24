# REST API and HTTP PROTOCOL FOR implementing CRUD OPERATIONS into JSON file

# Project's objectives:

phase 1:
- learn and implement REST API and HTTP protocol
- getting familiar with backend technologies like Node, Express
- using package management technologies like NPM 
- learn testing tools like Postman 
- all the while practicing version control with git

phase 2:
- fetch data from external APIs in Node.js using Axios lib


# Installation

Clone the repository:
```
git clone https://github.com/MaoriMalca/MaoriMalca/REST-API-into-file.git
```
Navigate to the project directory:
```
cd REST-API-into-file
```
Install dependencies:
```
npm install
```

# Usage

### Runnig the server:

start the sever:
```
npm start
```
If the server is running successfully, you will get the following output:

```
app running on http://localhost:5000
``````

### Connect to the client API using Postman on port 5000.


# API endpoints:

#### Add new user data to file:

```POST/api/ ```
		
Example (on Postman):	
```
POST http://localhost:5000/api/
```
Required body params: 
 `name=[string]`
 `age=[number]`
 `gender=[string]`


#### Retrieve all the users data from file:

```GET/api/ ```
		
Example (on Postman):	
```
GET http://localhost:5000/api/
```

#### Update specific user data (based on 'name' filed) from file:

```PUT/api/:name ```
		
Example (on Postman):	
```
PUT http://localhost:5000/api/<name>
```
Required body params(new data): 
 `name=[string]`
 `age=[number]`
 `gender=[string]`

 
#### Delete specific user data (based on 'name' filed) from file:

```DELETE/api/:name ```
		
Example (on Postman):	
```
DELETE http://localhost:5000/api/<name>
```
