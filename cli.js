const commander = require('commander');
const program = new commander.Command();
const api = require("./index");

program
  .command("add")
  .argument("<tasks...>", "taskName")
  .description("add a task")
  .action((tasks) => {
    tasks.forEach(task => {
      api.add(task);
    });
  })

program
  .command("clear")
  .description("clear all tasks")
  .action(() => {
    api.clear();
  })

program
  .command("showAllTasks")
  .description("show all tasks")
  .action(() => {
    api.showAllTasks()
  })

program.parse()