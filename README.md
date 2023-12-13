# REST API FOR CRUD OPERATIONS

This is a  client REST API.  
A Node.js and Express.js powered application that allow CRUD operations on users data by sending an HTTP requests to the server.
In my project the server is the local host.
The users data stored in JSON file and contains the following details : name, age and gender.


# Technologies used

-Node.js
-Express.js
-Postman


# Prerequisites

For using my project, ensure you have met the following requirements:

1. Node.js and npm 
2. Express.js - Node.js web application framework.
3. git - clone the project repository.
4. Text editor or IDE - view the project's source code. 
5. Postman - test and interact with the API endpoints.


# Installation

Clone the repository:
```
git clone https://github.com/MaoriMalca/MaoriMalca/REST-API-into-file.git
```
Navigate to the project directory
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
### Connect to the client API using Postman on port 5000.


# API endpoints:

#### Add new user data to file:

```POST/api/ ```
		
Example (on Postman):	
```
POST https://localhost:5000/api/
```
Required body params: 
 `name=[string]`
 `age=[number]`
 `gender=[string]`

#### Retrieve all the users data from file:

```GET/api ```
		
Example (on Postman):	
```
GET https://localhost:5000/api/
```

#### Update specific user data from file:

```PUT/api/:name ```
		
Example (on Postman):	
```
PUT https://localhost:5000/api/<name>
```
Required body params(new data): 
 `name=[string]`
 `age=[number]`
 `gender=[string]`
 
#### Delete specific user data from file:

```DELETE/api/:name ```
		
Example (on Postman):	
```
PUT https://localhost:5000/api/<name>
```






