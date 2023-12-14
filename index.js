let expressMod = require('express');

let app = expressMod();

let routerMod = expressMod.Router();

let usersRepo = require('./repos/usersRepo');

app.use(expressMod.json());

app.use('/api', routerMod);

// read user repository(GET htpp request)
routerMod.get('/', function (req, res, next) {
    usersRepo.get(function (data) {
        res.json(
            {
                "status": 200,
                "statusText": "ReadOk",
                "message": "users data fetched successfully",
                "data": data
            });
    }, function (err) {
        next(err);
    });

});

//create user(POST htpp request)
routerMod.post('/', (req, res, next) => {
    usersRepo.insert(req.body, function (data) {
        res.json(
            {
                "status": 200,
                "statusText": "CreateOK",
                "message": "new user created successfully",
                "data": data
            });
    }, function (err) {
        next(err);
    });

});

//update user(PUT htpp request)
routerMod.put('/:name', function (req, res, next) {
    usersRepo.update(req.params.name, req.body, function (data) {
        res.json(
            {
                "status": 200,
                "statusText": "UpdateOK",
                "message": "user's name updated successfully",
                "data": data
            });
    }, function (err) {
        next(err);
    });

});

//delete user(DELETE htpp request)
routerMod.delete('/:name', function (req, res, next) {
    usersRepo.delete(req.params.name, function () {
        res.json(
            {
                "status": 200,
                "statusText": "DeleteOK",
                "message": "user" + req.params.name + "deleted successfully"
            });
    }, function (err) {
        next(err);
    });

});

app.listen(5000, function () {
    console.log("app running on http://localhost:5000".rainbow);
});