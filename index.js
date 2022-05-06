
const fs = require("fs");
const path = require("path")
const dbPath = path.join(__dirname, 'data', "todo")
console.log("dbPath", dbPath);

module.exports.add = (title) => {
    fs.readFile(dbPath, { flag: "a+" }, (error, data) => {
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
        list.push({
            title: title,
            done: false
        });
        const string = JSON.stringify(list)
        fs.writeFile(dbPath, string, (error2) => {
            if (error2) {
                console.log(error2);
                return;
            }
        });
    })
}