const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, 'data', "todo");
module.exports = {
    readFromFile: function (path = dbPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, { flag: "a+" }, (error, data) => {
                if (error) {
                    console.log(error);
                    return
                }
                let list;
                try {
                    list = JSON.parse(data.toString())
                } catch (error) {
                    list = [];
                }
                resolve(list);
            })
        })
    },
    writeToFile: function (data, path = dbPath) {
        let dataString;
        if (typeof data !== "string") {
            dataString = JSON.stringify(data);
        } else {
            dataString = data;
        }
        return new Promise((resolve, reject) => {
            fs.writeFile(path, dataString, err => {
                if (err) {
                    reject(err);
                }
                resolve();
            })
        })
    },
    catFile: async function (path = dbPath) {
        let dbFile = await this.readFromFile()
        console.log(dbFile);
    }
}