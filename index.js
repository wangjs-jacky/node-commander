
const fs = require("fs");
const path = require("path")
const dbPath = path.join(__dirname, 'data', "todo")
const db = require("./db");
const inquirer = require("inquirer");

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
    printTasks(todoList);
}

function createTask(todoList) {
    inquirer.prompt({
        type: "input",
        name: "title",
        message: "输入任务标题"
    }).then(({ title }) => {
        todoList.push({
            title: title,
            done: false
        })
        db.writeToFile(todoList)
    })
}

function operateTask(todoList, index) {
    const question = {
        type: "list",
        name: "actionIndex",
        message: "请选择操作",
        choices: [
            { name: "退出", value: "quit" },
            { name: "已完成", value: "markAsDone" },
            { name: "未完成", value: "markAsUndone" },
            { name: "改标题", value: "updateTitle" },
            { name: "删除", value: "remove" }
        ]
    }
    inquirer.prompt(question).then(({ actionIndex }) => {
        switch (actionIndex) {
            case "quit":
                break;
            case "markAsDone":
                todoList[index]["done"] = true;
                db.writeToFile(todoList);
                break;
            case "markAsUndone":
                todoList[index]["done"] = false;
                db.writeToFile(todoList);
                break;
            case "updateTitle":
                inquirer.prompt({
                    type: "input",
                    name: "title",
                    message: "更新任务标题"
                }).then(({ title }) => {
                    todoList[index]["title"] = title;
                    db.writeToFile(todoList);
                })
                break;
            case "remove":
                todoList.splice(index, 1)
                db.writeToFile(todoList);
                break;
            default:
                break;
        }
    })
}
function printTasks(todoList) {
    let optionList = todoList.map((todo, index) => {
        return { name: `${todo.done ? "[x]" : "[_]"} ${todo.title}`, value: index.toString() }
    })
    const question = {
        type: "list",
        name: "index",
        message: "请选择你想要的操作",
        choices: [
            { name: "退出", value: "-1" },
            { name: "+ 创建任务", value: "-2" },
            new inquirer.Separator(),
            ...optionList
        ]
    }

    inquirer
        .prompt(question)
        .then(({ index }) => {
            if (index === "-1") return;
            if (index === "-2") {
                createTask(todoList);
                return;
            }
            operateTask(todoList, index);
        })
}