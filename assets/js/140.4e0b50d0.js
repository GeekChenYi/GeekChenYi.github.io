(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{558:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"为什么需要规范化的commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要规范化的commit-message"}},[s._v("#")]),s._v(" 为什么需要规范化的"),a("code",[s._v("commit message")])]),s._v(" "),a("p",[s._v("一个好的项目通常都是多人合作的结果，然而每个人有不一样的开发习惯，并不统一，因此规范化的"),a("code",[s._v("commit message")]),s._v("就显得格外重要。")]),s._v(" "),a("p",[s._v("不规范的 commit 可能过个一个月之后自己都不知道当时的提交目的了，就别说如何去之前的版本中定位问题了。")]),s._v(" "),a("p",[s._v("所以为了能使将来定位问题更加的方便团队，团队之前遵守一套规范化的"),a("code",[s._v("commit message")]),s._v("是很重要的。")]),s._v(" "),a("p",[s._v("规范化提交的优点：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("提供更多的历史信息，方便快速浏览。")])]),s._v(" "),a("li",[a("p",[s._v("可以过滤某些commit（比如文档改动），便于快速查找信息。")])])]),s._v(" "),a("h2",{attrs:{id:"commit-message-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-message-格式"}},[s._v("#")]),s._v(" "),a("code",[s._v("commit message")]),s._v(" 格式")]),s._v(" "),a("blockquote",[a("p",[s._v("目前使用比较多的是"),a("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines",target:"_blank",rel:"noopener noreferrer"}},[s._v("Angular团队规范"),a("OutboundLink")],1),s._v("，很多工具也是基于此规范的，它的message格式如下")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("// commit message 包括三个部分：Header，Body 和 Footer\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("("),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("): "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("subject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n// 空一行\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n// 空一行\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[s._v("#")]),s._v(" Header")]),s._v(" "),a("p",[a("code",[s._v("Header")]),s._v("包括三个字段： "),a("code",[s._v("type")]),s._v("必填， "),a("code",[s._v("scope")]),s._v("选填，"),a("code",[s._v("subject")]),s._v("必填")]),s._v(" "),a("h4",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),a("p",[a("code",[s._v("type")]),s._v(" 用于说明 "),a("code",[s._v("commit")]),s._v(" 的类别，只允许使用下面 7 个标识")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("feat")]),s._v("：新特性")]),s._v(" "),a("li",[a("code",[s._v("fix")]),s._v("：修改bug")]),s._v(" "),a("li",[a("code",[s._v("refactor")]),s._v("： 代码重构")]),s._v(" "),a("li",[a("code",[s._v("docs")]),s._v("：文档修改")]),s._v(" "),a("li",[a("code",[s._v("style")]),s._v("：代码格式修改，标点符号的更新，"),a("strong",[s._v("不是CSS的修改")])]),s._v(" "),a("li",[a("code",[s._v("test")]),s._v("：测试用例修改")]),s._v(" "),a("li",[a("code",[s._v("chore")]),s._v("：其他修改，比如构建流程、包依赖的更新")]),s._v(" "),a("li",[a("code",[s._v("perf")]),s._v("：性能优化")])]),s._v(" "),a("h4",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[s._v("#")]),s._v(" scope")]),s._v(" "),a("p",[a("code",[s._v("scope")]),s._v(" 用于说明 "),a("code",[s._v("commit")]),s._v(" 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")]),s._v(" "),a("h4",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[s._v("#")]),s._v(" subject")]),s._v(" "),a("p",[a("code",[s._v("subject")]),s._v(" 是 "),a("code",[s._v("commit")]),s._v(" 目的的简短描述，不超过50个字符。")]),s._v(" "),a("h3",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[s._v("#")]),s._v(" Body")]),s._v(" "),a("p",[a("code",[s._v("Body")]),s._v(" 部分是对本次 "),a("code",[s._v("commit")]),s._v(" 的详细描述，可以分成多行。")]),s._v(" "),a("h3",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[s._v("#")]),s._v(" Footer")]),s._v(" "),a("p",[a("code",[s._v("Footer")]),s._v(" 部分只用于两种情况")]),s._v(" "),a("ul",[a("li",[s._v("不兼容的变动")])]),s._v(" "),a("p",[s._v("如果当前代码与上一个版本不兼容，则 "),a("code",[s._v("Footer")]),s._v(" 部分以 "),a("code",[s._v("BREAKING CHANGE")]),s._v(" 开头，后面是对变动的描述、以及变动理由和迁移方法。")]),s._v(" "),a("ul",[a("li",[s._v("关闭 "),a("code",[s._v("Issue")]),s._v(" 如果当前 "),a("code",[s._v("commit")]),s._v(" 针对某个 "),a("code",[s._v("issue")]),s._v("，那么可以在 "),a("code",[s._v("Footer")]),s._v(" 部分关闭这个 "),a("code",[s._v("issue")])])]),s._v(" "),a("h2",{attrs:{id:"安装相关插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装相关插件"}},[s._v("#")]),s._v(" 安装相关插件")]),s._v(" "),a("h3",{attrs:{id:"安装commitizen-（必选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装commitizen-（必选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("commitizen")]),s._v(" （必选）")]),s._v(" "),a("p",[a("code",[s._v("commitizen")]),s._v("是命令行工具，需要借助它提供的git cz命令来代替我们的git commit命令，它可以生成符合规范的commit message")]),s._v(" "),a("div",{staticClass:"language-javasciprt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -D commitizen\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装cz-conventional-changelog-（必选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cz-conventional-changelog-（必选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("cz-conventional-changelog")]),s._v(" （必选）")]),s._v(" "),a("p",[s._v("这个插件是为"),a("code",[s._v("commitizen")]),s._v("指定一个"),a("code",[s._v("Adapter")]),s._v("（适配器）")]),s._v(" "),a("p",[s._v("例如："),a("code",[s._v("cz-conventional-changelog")]),s._v("是一个符合"),a("code",[s._v("Angular")]),s._v("团队规范的"),a("code",[s._v("preset")]),s._v("，使得"),a("code",[s._v("commitizen")]),s._v("按照"),a("code",[s._v("Angular")]),s._v("的规范帮助我们生成"),a("code",[s._v("commit message")]),s._v(", "),a("strong",[s._v("如果不指定"),a("code",[s._v("Adapter")]),s._v("，"),a("code",[s._v("commitizen")]),s._v("的"),a("code",[s._v("git cz")]),s._v("的作用跟"),a("code",[s._v("git commit")]),s._v("的作用一样。")])]),s._v(" "),a("div",{staticClass:"language-javasciprt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install -D cz-conventional-changelog\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("安装完这两个插件后，在"),a("code",[s._v("package.json")]),s._v("中添加相关配置")]),s._v(" "),a("div",{staticClass:"language-javasciprt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 在script中添加commit\n"script": {\n    // ... some code\n    "commit": "git-cz"\n}\n// 新增config\n"config": {\n    "commitizen": {\n      "path": "./node_modules/cz-conventional-changelog"\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"安装cz-customizable-（可选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cz-customizable-（可选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("cz-customizable")]),s._v(" （可选）")]),s._v(" "),a("p",[s._v("如果"),a("code",[s._v("Angular")]),s._v("的那套代码提交规范不适合自己团队，可以通过"),a("code",[s._v("cz-customizable")]),s._v("来指定一套符合自己团队的"),a("code",[s._v("Adapter")]),s._v("，一般情况下，"),a("code",[s._v("Angular")]),s._v("的团队规范就足够使用了。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" cz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("customizable\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装commitlint-（必选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装commitlint-（必选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("commitlint")]),s._v(" （必选）")]),s._v(" "),a("p",[s._v("校验提交信息是否规范的检查工具，如果不符合规范直接拒绝。")]),s._v(" "),a("p",[s._v("虽说规范化提交已经配置了，通过"),a("code",[s._v("npm run commit")]),s._v("的形式是可以规范化提交，但是有新的问题出现了，我们如何知道本次提交是符合规范的"),a("code",[s._v("commit message")]),s._v("呢？假设不是通过"),a("code",[s._v("npm run commit")]),s._v("的方式提交代码的，而是通过"),a("code",[s._v('git commit -m ""')]),s._v("的方式提交代码，仍然是可以提交代码。")]),s._v(" "),a("p",[s._v("为了阻止"),a("code",[s._v('git commit -m ""')]),s._v("的形式提交不规范的"),a("code",[s._v("commit")]),s._v("提交信息，还需要"),a("code",[s._v("commitlint")]),s._v("配合"),a("code",[s._v("husky")]),s._v("（哈士奇）的方式在每次提交的时候检查"),a("code",[s._v("commit message")]),s._v("是否符合"),a("code",[s._v("Angular")]),s._v("团队提交规范，如果不是规范化的提交，直接拒绝本次"),a("code",[s._v("commit")]),s._v("提交。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("conventional @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装完插件后，还需要在项目根目录下创建配置文件"),a("code",[s._v(".commitlintrc.js")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"安装husky-（必选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装husky-（必选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("husky")]),s._v(" （必选）")]),s._v(" "),a("p",[s._v("检验commit message是否合格的最佳方式是结合git hook，所以还需要安装husky")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" husky\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同时在package.json中进行如下配置")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commitlint -E $HUSKY_GIT_PARAMS"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("配置完上面的操作后，就可以通过任意的commit提交检验上述的所有配置是否正确。")]),s._v(" "),a("h3",{attrs:{id:"安装lint-staged-（必选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装lint-staged-（必选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("lint-staged")]),s._v(" （必选）")]),s._v(" "),a("p",[s._v("用于实现每次提交只检查本次提交所修改的文件，这个工具可以帮助项目再提交之前进行进行一次lint校验。")]),s._v(" "),a("p",[a("code",[s._v("lint-staged")]),s._v("是一个在git暂存文件上运行linters的工具,也就是再commit之前做一些事情。")]),s._v(" "),a("p",[s._v("为什么要用这个工具呢，因为在提交代码的时候，为了保证团队代码风格都是一样的，就需要在代码提交前做一次Eslint的检查，而用到的工具就是"),a("code",[s._v("lint-staged")]),s._v("，这个工具只会对已经修改过的文件进行校验，否则对所有代码进行检查是比较浪费时间，那我们改怎么配置呢？")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" lint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("staged\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("package.json")]),s._v("中配置")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在husky中配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lint-staged"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置lint-staged的代码校验规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配合vue自带的lint校验方式,只会检查src目录下的js文件和.vue文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*.{js,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这种方式会校验项目下所有文件夹下的文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.{js,md,html,vue,css,scss}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint --fix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 会校验project下所有的js文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint"')]),s._v("，\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 校验src下的js文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/*.js"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 校验src下的.js和.vue文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*.{js,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"安装standard-version-（可选）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装standard-version-（可选）"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("standard-version")]),s._v(" （可选）")]),s._v(" "),a("p",[s._v("通过上面的配置，我们工程的"),a("code",[s._v("commit message")]),s._v("应该是符合"),a("code",[s._v("Angular")]),s._v("团队的风格了，我们还需要借助"),a("code",[s._v("standard-version")]),s._v("这样的工具，自动帮我们生成"),a("code",[s._v("CHANGELOG.md")]),s._v("文档，甚至是语义化的版本号。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" standard"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);