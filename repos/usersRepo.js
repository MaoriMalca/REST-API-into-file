let fsMod = require('fs');

const { stringify } = require('querystring');

let FILE_PATH = './assets/users.json';

let usersRepo =
{
    get: function (resolve, reject) {
        fsMod.readFile(FILE_PATH, function (error, data) {
            if (error) {
                reject(error);
            }

            else {
                resolve(JSON.parse(data));
            }
        })
    },
    insert: function (user, resolve, reject) {
        fsMod.readFile(FILE_PATH, function (error, data) {
            if (error) {
                reject(error);
            }

            else {
                let usersArr = JSON.parse(data);

                if (user) {
                    usersArr.push(user);
                }

                fsMod.writeFile(FILE_PATH, JSON.stringify(usersArr), function (error) {
                    if (error) {
                        reject(error);
                    }

                    else {
                        resolve(user);
                    }
                });
            }
        })
    },
    update: function (userName, newUserName, resolve, reject) {
        fsMod.readFile(FILE_PATH, function (error, data) {
            if (error) {
                reject(error);
            }

            else {
                let usersArr = JSON.parse(data);
                let user = usersArr.find((u) => u.name == userName);
                Object.assign(user, newUserName);

                fsMod.writeFile(FILE_PATH, JSON.stringify(usersArr), function (error) {
                    if (error) {
                        reject(error);
                    }

                    else {
                        resolve(user);
                    }
                });
            }
        })
    },
    delete: function (userName, resolve, reject) {
        fsMod.readFile(FILE_PATH, function (error, data) {
            if (error) {
                reject(error);
            }

            else {
                let usersArr = JSON.parse(data);
                let index = usersArr.findIndex((u) => u.name == userName);

                if (index > -1) {
                    usersArr.splice(index, 1);
                }

                else {
                    let ex = new Error("user not found");
                    reject(ex);
                    return;
                }

                fsMod.writeFile(FILE_PATH, JSON.stringify(usersArr), function (error) {
                    if (error) {
                        reject(error);
                    }

                    else {
                        resolve();
                    }
                });
            }
        })
    }
}

module.exports = usersRepo;