#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const api = require("./index");
const pkg = require("./package.json")

program.version(pkg.version);

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