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
  .description("clear a task")
  .action(() => {
    console.log("清空");
  })

program.parse()