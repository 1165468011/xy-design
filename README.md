# 晓羊云平台前端

项目使用`pnpm`包管理工具管理，采用`Monorepo`方式进行代码库管理，晓羊云平台相关项目都应放置在该项目下。


####  依赖安装

```shell
pnpm i
```

####  运行项目

方式一：前往子项目目录下执行
```shell
# 运行
pnpm run dev

# 编译 根据不同环境，命令有 build, build:test, build:pre-release
pnpm run build
```

方式二：根目录下执行
```shell
# 运行 - 子项目目录下运行
pnpm run dev

# 编译 根据不同环境，命令有 build, build:test, build:pre-release
pnpm run build --filter ${包名}
```

####  提交规则
项目使用了`commitlint`对commit信息进行校验，校验规则如下： 

```xml
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
`<type>`和`<subject>`为必填项，其他可选。例：
```
feat(公用模块xxx): 新增xxx功能，完成xxxxxxxx
```
type如下：

 * build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 * ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 * docs：文档更新
 * feat：新增功能
 * fix：bug 修复
 * perf：性能优化
 * refactor：重构代码(既没有新增功能，也没有修复 bug)
 * style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
 * test：新增测试用例或是更新现有测试
 * revert：回滚某个更早之前的提交
 * chore：不属于以上类型的其他类型(日常事务)
