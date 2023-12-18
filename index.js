let expressMod = require('express');

let app = expressMod();

let routerMod = expressMod.Router();

let usersRepo = require('./repos/usersRepo');

let axiosMod = require('axios');

let WEATHER_API_KEY = 'cfadc03f13974489873103026231812';

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

// get specific user's weather - by city (GET htpp request)
routerMod.get('/:name', async function (req, res, next) {
    usersRepo.getUserWeather(req.params.name, async function (data) {
        try {
            // Make a GET request to the external weather API
            const response = await axiosMod.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${data.city}`);

            // Extract relevant data from the response
            const weatherData = {
                temperature: response.data.current.temp_c,
                condition: response.data.current.condition.text,
            };
            res.json(
                {
                    "status": 200,
                    "city": data.city,
                    "temperature": weatherData.temperature,
                    "message": weatherData.condition
                });
        }
        catch (error) {
            console.error('Error fetching weather data:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
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
    console.log("app running on http://localhost:5000");
});