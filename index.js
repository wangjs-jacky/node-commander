
const fs = require("fs");
const path = require("path")
const dbPath = path.join(__dirname, 'data', "todo")
const db = require("./db");

module.exports.add = async (title) => {
    const todoList = await db.readFromFile(dbPath);
    todoList.push({ title, done: false });
    db.writeToFile(todoList, dbPath);
}

module.exports.clear = () => {
    db.writeToFile([]);
}

module.exports.showAllTasks = async () => {
    const todoList = await db.readFromFile(dbPath);
    todoList.forEach((todo, index) => {
        console.log(`${todo.done ? "[x]" : "[_]"} ${index}-${todo.title}`);
    })
}