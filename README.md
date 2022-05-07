# node-commander

## 0.说明

本项目是基于 `node` 开发的可以记录 `todo` 任务的脚手架工具。使用到的技术栈：`node` 、`commander.js` 以及 `inquirer.js`。

此案例已发布至 `npm` 制品库，包名为 `node-cli-jacky`。

## 1.使用演示：

![node-cli](https://wjs-tik.oss-cn-shanghai.aliyuncs.com/node-cli.gif)



## 2.项目安装及使用：

### 项目安装

```shell
yarn global add node-cli-jacky
```

在终端中输入，如成功显示版本号，表明安装成功。

```shell
t -V 
0.0.9
```

### 使用方式

```shell
# 添加任务
t add task1 task2 task3 task4

# 显示任务
t showAllTasks
? 请选择你想要的操作 (Use arrow keys)
❯ 退出 
  + 创建任务 
  ──────────────
  [x] task1 
  [_] task2
  [_] task3 
  [_] task4 

# 清空任务
t clear
```

