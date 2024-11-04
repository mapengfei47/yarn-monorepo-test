/*
 * @Description:
 * @Author: mapengfei
 * @Date: 2024-11-04 21:16:49
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-11-04 21:41:28
 */
import { Command } from "commander";
import chalk from "chalk";
import { add, minus, devide } from "@allan-yarn/core";
const program = new Command();
program.name("num-cli").description("计算数字加减").version("0.0.1");
program
    .command("add")
    .description("加法")
    .argument("a", "第一个数字")
    .argument("b", "第二个数字")
    .action((a, b) => {
    console.log(chalk.cyan(add(+a, +b)));
});
program
    .command("minus")
    .description("减法")
    .argument("a", "第一个数字")
    .argument("b", "第二个数字")
    .action((a, b) => {
    console.log(chalk.cyan(minus(+a, +b)));
});
program
    .command("devide")
    .description("除法")
    .argument("a", "第一个数字")
    .argument("b", "第二个数字")
    .action((a, b) => {
    console.log(chalk.cyan(devide(+a, +b)));
});
program.parse();
