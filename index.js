
const fs = require("fs");
const path = require("path")
const dbPath = path.join(__dirname, 'data', "todo")
const db = require("./db");

module.exports.add = async (title) => {
    const toDoData = await db.readFromFile(dbPath);
    toDoData.push({ title, done: false });
    db.writeToFile(toDoData, dbPath);
}