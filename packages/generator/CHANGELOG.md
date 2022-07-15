# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [0.8.2](https://github.com/jdfed/drip-form/compare/v0.8.1...v0.8.2) (2022-07-15)


### Bug Fixes

* inaccurate width calculation when margin contains extra spaces ([#233](https://github.com/jdfed/drip-form/issues/233)) ([22f4eeb](https://github.com/jdfed/drip-form/commit/22f4eeb96f5a0f2b39eae69705f0a2e65e1e8ee1))
* **generator:** drag the array, object container report an error ([#230](https://github.com/jdfed/drip-form/issues/230)) ([c79db5c](https://github.com/jdfed/drip-form/commit/c79db5c601fec7d0825b128e29a32147a216b15c))
* **generator:** when the theme is not set, the property configuration will not be displayed ([#225](https://github.com/jdfed/drip-form/issues/225)) ([d4c1de4](https://github.com/jdfed/drip-form/commit/d4c1de4244114a055a9b180c497abf965de16fb7))



### [0.8.1](https://github.com/jdfed/drip-form/compare/v0.8.0...v0.8.1) (2022-06-29)


### Bug Fixes

* **generator:** compatibility with old data ([#214](https://github.com/jdfed/drip-form/issues/214)) ([8aec201](https://github.com/jdfed/drip-form/commit/8aec201eac85cbeca24d218aa37c3a0c3216d091))
* **generator:** compatibility with old data ([#215](https://github.com/jdfed/drip-form/issues/215)) ([3ac1ab9](https://github.com/jdfed/drip-form/commit/3ac1ab9a5c794d216e9e6117fcc96fffb69b5a40)), closes [#214](https://github.com/jdfed/drip-form/issues/214)
* **generator:** compatibility with old data ([#217](https://github.com/jdfed/drip-form/issues/217)) ([ece5bfc](https://github.com/jdfed/drip-form/commit/ece5bfc9755d53c598ad2a577100a79abd4119d9))
* **generator:** turn off the required validation, the required field is not properly deleted ([#216](https://github.com/jdfed/drip-form/issues/216)) ([fcd64c4](https://github.com/jdfed/drip-form/commit/fcd64c4b1b91d37b3849e12fa891ea76f9232d94))


### style

* **generator:** add fixed width to the component area and configuration area ([#213](https://github.com/jdfed/drip-form/issues/213)) ([663bc68](https://github.com/jdfed/drip-form/commit/663bc682b5f3b0b06e4bb9315f58fae475903821))
* **generator:** hide scroll bar in webKit browser ([#220](https://github.com/jdfed/drip-form/issues/220)) ([9b958e4](https://github.com/jdfed/drip-form/commit/9b958e4bfe0911d18f12459f4a4f446f26ccff32))



## [0.8.0](https://github.com/jdfed/drip-form/compare/v0.7.0...v0.8.0) (2022-06-01)


### Features

* **form:** array container supports sorting ([#206](https://github.com/jdfed/drip-form/issues/206)) ([7a60b0b](https://github.com/jdfed/drip-form/commit/7a60b0b3e2eb9af8d6b479356ceee659bba86947))
* **generator:** delete element automatically selects the neighboring previous element or the parent ([945196a](https://github.com/jdfed/drip-form/commit/945196ab0903b6b5276a6630df7c89d6ca8b1cb1))
* **generator:** options add pointerEvents to configure whether the ViewPort area form is clickable ([#192](https://github.com/jdfed/drip-form/issues/192)) ([9d42ae2](https://github.com/jdfed/drip-form/commit/9d42ae281efa87630a970f348c998342651c8a10))
* **generator:** options add propertyConfig configuration ([#209](https://github.com/jdfed/drip-form/issues/209)) ([0c29221](https://github.com/jdfed/drip-form/commit/0c29221e63dd53bec7ca5db27d133da68b04660b))
* **generator:** support the same type for different themes ([#211](https://github.com/jdfed/drip-form/issues/211)) ([23cf581](https://github.com/jdfed/drip-form/commit/23cf581dca35b93b6d33640f67250fcd37c32009))
* combine method supports configuring the  configuration to transform fieldkeys ([f3fef68](https://github.com/jdfed/drip-form/commit/f3fef681cccc7f5b900e65fa796e995090d316b2))
* customize component fontSize and fontColor ([#178](https://github.com/jdfed/drip-form/issues/178)) ([3199e29](https://github.com/jdfed/drip-form/commit/3199e29e7338cb78cd8c6d702b3c55df9562c157))
* title add showColon configuration ([#199](https://github.com/jdfed/drip-form/issues/199)) ([d8d32ef](https://github.com/jdfed/drip-form/commit/d8d32ef06f77015a4c76a37254daae5eedb28379))
* **generator:** prompt for unsaved JSON when exporting JSON ([#184](https://github.com/jdfed/drip-form/issues/184)) ([ef77401](https://github.com/jdfed/drip-form/commit/ef77401df863ba47b69f27d0cc6238cdca18be29))
* footer element support customize style ([#167](https://github.com/jdfed/drip-form/issues/167)) ([6ad9ba6](https://github.com/jdfed/drip-form/commit/6ad9ba6970821e6b9719dba8c61ad00eaa373783))
* title support fontSize、color configuration ([#177](https://github.com/jdfed/drip-form/issues/177)) ([d83836c](https://github.com/jdfed/drip-form/commit/d83836ce1827bf0af082e345e0710391b6f963ff))
* **generator:** support customize layout width ([97eddeb](https://github.com/jdfed/drip-form/commit/97eddeb3f49d3b348338fdf0389bedc786a7bdb7))


### Bug Fixes

* **generator:** add components,typePath missing unitedSchemaPath ([d2f0058](https://github.com/jdfed/drip-form/commit/d2f0058e57a7768352048d4c45731f6c56098e29))
* **generator:** after schema prop is configured, the exported JSON schemas are inconsistent ([#201](https://github.com/jdfed/drip-form/issues/201)) ([3fe38d7](https://github.com/jdfed/drip-form/commit/3fe38d718f6fff68f24b68fca895093c1da77968))
* **generator:** change the default values for part of the property configuration ([#212](https://github.com/jdfed/drip-form/issues/212)) ([cdf5389](https://github.com/jdfed/drip-form/commit/cdf53899bcebcf14824dd44245bf919b91fd4bd2))
* **generator:** child element cannot be selected ([d9de73d](https://github.com/jdfed/drip-form/commit/d9de73d2ec34fe11a1e5f235f82b93aee9aeb1ef))
* **generator:** copy fieldKey is not effective ([#159](https://github.com/jdfed/drip-form/issues/159)) ([857fe65](https://github.com/jdfed/drip-form/commit/857fe6555465a31fe0b75acfd49a80b1118e4ed0))
* **generator:** default configuration is not effective ([7e97006](https://github.com/jdfed/drip-form/commit/7e9700633a66b8221bbe43782fc998b564e044a4))
* **generator:** fix  error where value in order is not in category ([#187](https://github.com/jdfed/drip-form/issues/187)) ([a5290f8](https://github.com/jdfed/drip-form/commit/a5290f846eaa97833538b1e79c5573a4140d1034))
* **generator:** fixed default options configuration not taking effect ([#202](https://github.com/jdfed/drip-form/issues/202)) ([4789f6f](https://github.com/jdfed/drip-form/commit/4789f6f112f47eba717d81b04d15bc423f532a94))
* **generator:** fixed dragging and sorting child elements in tuple containers ([e9f700f](https://github.com/jdfed/drip-form/commit/e9f700f11ee9e175e6b1e11278f55ec386230234))
* **generator:** fixed edit JSON crash after modifying fieldKey ([052190d](https://github.com/jdfed/drip-form/commit/052190dfb0ec508e70a44cf1adfd2b074453d06b))
* **generator:** fixed the default width of the global ContainerStyle ([#200](https://github.com/jdfed/drip-form/issues/200)) ([cf9cad1](https://github.com/jdfed/drip-form/commit/cf9cad15e7f15e887faff0632318a784a1cef364))
* **generator:** timePicker、datePicker range default configuration is not effective ([#174](https://github.com/jdfed/drip-form/issues/174)) ([08cc571](https://github.com/jdfed/drip-form/commit/08cc5716ae5cd6933647cf19a85580e21f2e6bb8))



## [0.7.0](https://github.com/jdfed/drip-form/compare/v0.6.0...v0.7.0) (2022-03-14)


### Features

* add generator configuration for antd theme ([#156](https://github.com/jdfed/drip-form/issues/156)) ([bec30a0](https://github.com/jdfed/drip-form/commit/bec30a05d16678514a5bee1fe1921dc46eb3454d))
* **generator:** colorPicker add defaultValue configuration ([b896ef0](https://github.com/jdfed/drip-form/commit/b896ef032a122673190b3958dcbde97aff921141))
* **generator:** datepicker add default configuration ([a238424](https://github.com/jdfed/drip-form/commit/a238424c1aed9382735d1e2de1ec60890dd851c4))
* **generator:** restore default when the fieldKey out of focus ([#145](https://github.com/jdfed/drip-form/issues/145)) ([f36c099](https://github.com/jdfed/drip-form/commit/f36c09996c3871a9e3f467beef3504704ec8f7e9))
* **generator:** timePicker add default configuration ([bac3e72](https://github.com/jdfed/drip-form/commit/bac3e7271e6094045b86800aa79693edc61291ad))
* containerStyle configuration add padding prop ([27cefed](https://github.com/jdfed/drip-form/commit/27cefeda6cf880cc1d113a70624eea6789683937))
* unitedSchema JSON add requiredMode configuration ([#150](https://github.com/jdfed/drip-form/issues/150)) ([7e717ef](https://github.com/jdfed/drip-form/commit/7e717ef9431228809fd5f2d3908a274f181225ec))
* **generator:** support change fieldKey in the property configuration panel ([#144](https://github.com/jdfed/drip-form/issues/144)) ([9681f62](https://github.com/jdfed/drip-form/commit/9681f62083c8c4feba7c4b1538b3ae99838545a3))
* viewportConfig support function type ([#142](https://github.com/jdfed/drip-form/issues/142)) ([2499c39](https://github.com/jdfed/drip-form/commit/2499c39772f1ef050602de59e4dca13257948a0d))
* **generator:** viewport区域操作栏支持配置显隐 ([#141](https://github.com/jdfed/drip-form/issues/141)) ([fcf53cd](https://github.com/jdfed/drip-form/commit/fcf53cdaa1690ae47f54586b8661fbb1e229471d))
* **generator:** 更改组件类型时,如果已经修改了预设title,则保留 ([#136](https://github.com/jdfed/drip-form/issues/136)) ([c39710b](https://github.com/jdfed/drip-form/commit/c39710b838bad6085a5a470c2bf584c0cca06dac))


### Bug Fixes

* **generator:** the forms in visual area and preview area are inconsistent ([#152](https://github.com/jdfed/drip-form/issues/152)) ([4f90853](https://github.com/jdfed/drip-form/commit/4f90853b1823f268cdcb5376bc9a7eaf6088856c))
* **generator:** 修复导入json, viewport区域不更新问题 ([#135](https://github.com/jdfed/drip-form/issues/135)) ([76de430](https://github.com/jdfed/drip-form/commit/76de4302c3a71f06cae8e65db686e3579ae60b8f))
* **generator:** 修复属性配置区域数组对象结构展示标题导致样式错乱 ([#132](https://github.com/jdfed/drip-form/issues/132)) ([7b7040e](https://github.com/jdfed/drip-form/commit/7b7040e5170a3c4cf3522a17c4ad729011117d86))


### style

* **generator:** update objectContainer default style ([#154](https://github.com/jdfed/drip-form/issues/154)) ([d1590df](https://github.com/jdfed/drip-form/commit/d1590df17c8fbd003f29af800b6cfde091bf081a))



## [0.6.0](https://github.com/jdfed/drip-form/compare/v0.5.0...v0.6.0) (2022-01-24)


### Features

* ajv keyword添加gbkLength关键字 ([#129](https://github.com/jdfed/drip-form/issues/129)) ([ea35c0d](https://github.com/jdfed/drip-form/commit/ea35c0dc7299127a5d3ec9362e5725100446337f))
* **generator:** 对象容器支持配置更多样式 ([6c6bec8](https://github.com/jdfed/drip-form/commit/6c6bec8e4f7a97fada803b878623591f0827fe9f))
* 表单布局支持配置外边距 ([2016881](https://github.com/jdfed/drip-form/commit/201688140cebb2403899acca0ca58000dba7aaa3))
* **ajv:** ajv format添加jsonObject关键字校验json对象 ([fa75163](https://github.com/jdfed/drip-form/commit/fa7516301a3676a972c3331d6f5ac8f486e390ba))
* **generator:** 对象容器折叠模式添加默认展开配置项 ([1877218](https://github.com/jdfed/drip-form/commit/18772182c71b7251c5945d30b8224ea222040611))
* 数组容器删除子项支持二次确认配置 ([33eeff8](https://github.com/jdfed/drip-form/commit/33eeff86cef300af209889e82cd10fa663c300d4))


### Bug Fixes

* generator勾选一项必填，同级必填配置丢失 ([2e252aa](https://github.com/jdfed/drip-form/commit/2e252aa642b9eaafcc89405a1ee0a3c532643642))
* 嵌套表单对象容器必填失效问题 ([532a118](https://github.com/jdfed/drip-form/commit/532a1188cce05ab10d7f37fd8255dcf2dc6095ce))
* 校验配置0，错误文案配置不展示 ([5f0f211](https://github.com/jdfed/drip-form/commit/5f0f2118488df32f1d579ca024a3556e4f91e049))


### style

* 数组容器、对象容器标题位置默认居中对齐 ([4564f2f](https://github.com/jdfed/drip-form/commit/4564f2fd457b39e7f09773dd591a81d3cd844618))



## [0.5.0](https://github.com/jdfed/drip-form/compare/v0.4.0...v0.5.0) (2022-01-13)


### Bug Fixes

* rightSideBar对象容器下边距样式修改 ([#124](https://github.com/jdfed/drip-form/issues/124)) ([6647fd0](https://github.com/jdfed/drip-form/commit/6647fd014b710e957b690f69f09feed9d7c7d5dd))
* 修复日期、时间选择器配置占位符、默认值无效问题 ([#123](https://github.com/jdfed/drip-form/issues/123)) ([e7e8543](https://github.com/jdfed/drip-form/commit/e7e85436fe32fb9da5af8bd927e2f30e243f4508))



## 0.4.0 (2022-01-11)


### Features

* ajv format添加https校验 ([#113](https://github.com/jdfed/drip-form/issues/113)) ([b38f7cb](https://github.com/jdfed/drip-form/commit/b38f7cb450d310d8651cb1934e9f8e07e199ff87))
* array container support showNo config ([16f92a5](https://github.com/jdfed/drip-form/commit/16f92a5ae8b094768ff08ba3e8422170f40d8409))
* generator schema非必填 ([628553f](https://github.com/jdfed/drip-form/commit/628553ff135a75c2ab668f0d2b29219e6c0ff514))
* generator数组容器支持配置新增按钮文案 ([f4693e8](https://github.com/jdfed/drip-form/commit/f4693e814e9aa392a8d21f414f58b4e0fa23c64d))
* module bar styles support custom ([#76](https://github.com/jdfed/drip-form/issues/76)) ([5b950b0](https://github.com/jdfed/drip-form/commit/5b950b05241a4a80243f3154a9abd7029aabf196))
* upload support img size limit ([#102](https://github.com/jdfed/drip-form/issues/102)) ([acbd278](https://github.com/jdfed/drip-form/commit/acbd27861a44004abf3afb7ae5ca5d210c70c28d))
* uploader support maxCount ([#72](https://github.com/jdfed/drip-form/issues/72))  ([0c01435](https://github.com/jdfed/drip-form/commit/0c0143593a3e4da4eb2ff1d438cbd88c5aa999ff))
* upload支持输出string类型([#52](https://github.com/jdfed/drip-form/issues/52)) ([#117](https://github.com/jdfed/drip-form/issues/117)) ([447489a](https://github.com/jdfed/drip-form/commit/447489a395c98ca63bcf76213c9778a73dffe010))
* 支持header配置 ([2568ee2](https://github.com/jdfed/drip-form/commit/2568ee2b68787a8edacfd4ef06e98b4846c697f2))
* 支持复制fieldKey ([#89](https://github.com/jdfed/drip-form/issues/89)) ([a063827](https://github.com/jdfed/drip-form/commit/a06382719e1359419b8e5f7f56aecf273d838b6c))
* 数组容器add模式，支持最大行数限制 ([#121](https://github.com/jdfed/drip-form/issues/121)) ([a13988f](https://github.com/jdfed/drip-form/commit/a13988ffd21e2462355f0e7976882e974aa7a5dd))
* 数组容器样式优化 & 支持序号文案自定义 ([#109](https://github.com/jdfed/drip-form/issues/109)) ([2ca6f67](https://github.com/jdfed/drip-form/commit/2ca6f67a2b894fc0152230f3bee69f279bce640c))
* **generator:** add description for number input precision config ([5eeb67b](https://github.com/jdfed/drip-form/commit/5eeb67b345a6e27262461d040e6e1b63025121a7))
* **generator:** add description for upload accept config ([9f52274](https://github.com/jdfed/drip-form/commit/9f52274ece0dcdf7606a5198db0e7561da9d3f0e))
* **generator:** regular verification configuration supports emptying options ([290d324](https://github.com/jdfed/drip-form/commit/290d3249357d72aca46f56f952786c9308559733))
* 支持自定义组件区域和属性配置区域 ([4d9477f](https://github.com/jdfed/drip-form/commit/4d9477fd0e4fa411550af480f8047c83e5fdd27d))


### Bug Fixes

* editConfig parse 函数 showTitle 判空逻辑错误修复 ([#77](https://github.com/jdfed/drip-form/issues/77)) ([bde5531](https://github.com/jdfed/drip-form/commit/bde5531190418b146fee3e61c5ca9a3ed0a7ddca))
* monaco-editor always in loading ([5f50fa9](https://github.com/jdfed/drip-form/commit/5f50fa9021ec8e2817c42d01a2c02b66780fbb47))
* property panel、 check panel not reload  ([#90](https://github.com/jdfed/drip-form/issues/90)) ([6c13d7a](https://github.com/jdfed/drip-form/commit/6c13d7afeaa275ca8d8084d4a580d64adb2c43e7))
* the delete button of the first component of the visible area is hidden ([#94](https://github.com/jdfed/drip-form/issues/94)) ([e388b6b](https://github.com/jdfed/drip-form/commit/e388b6b662617215a2ca119070e90f4be0bb5704))
* 修复元祖无数据不展示问题 ([#112](https://github.com/jdfed/drip-form/issues/112)) ([a67ae0e](https://github.com/jdfed/drip-form/commit/a67ae0e441d06d26812d257e34f82a245c9a84ea))
* 切换monaco-editor cdn路径 ([#78](https://github.com/jdfed/drip-form/issues/78)) ([96dbcde](https://github.com/jdfed/drip-form/commit/96dbcde19bdcedb54dfe5478940d8dd0db9922d5))
* 对象容器样式调整 & 数组｜对象容器schema支持style参数 ([#116](https://github.com/jdfed/drip-form/issues/116)) ([45f0f39](https://github.com/jdfed/drip-form/commit/45f0f39d7ba189f8859b3a9bfa2ad636e00c38ba))
* 对象嵌套拖拽报错 ([#79](https://github.com/jdfed/drip-form/issues/79)) ([a45f4a7](https://github.com/jdfed/drip-form/commit/a45f4a72fcbc2c77bb2a0a7f654e8a691305f053))
* 时间选择器，默认占位符文案保持一致 ([#105](https://github.com/jdfed/drip-form/issues/105)) ([5b61efb](https://github.com/jdfed/drip-form/commit/5b61efb11b6f222206b0ce99dfdecea034b78730))


### style

* 删除无用样式，避免样式冲突 ([c252e3e](https://github.com/jdfed/drip-form/commit/c252e3e9ac8ce04ff9f8017a80f928e4c0cf0524))



## 0.3.0 (2022-01-11)


### Features

* ajv format添加https校验 ([#113](https://github.com/jdfed/drip-form/issues/113)) ([b38f7cb](https://github.com/jdfed/drip-form/commit/b38f7cb450d310d8651cb1934e9f8e07e199ff87))
* upload支持输出string类型([#52](https://github.com/jdfed/drip-form/issues/52)) ([#117](https://github.com/jdfed/drip-form/issues/117)) ([447489a](https://github.com/jdfed/drip-form/commit/447489a395c98ca63bcf76213c9778a73dffe010))
* 数组容器样式优化 & 支持序号文案自定义 ([#109](https://github.com/jdfed/drip-form/issues/109)) ([2ca6f67](https://github.com/jdfed/drip-form/commit/2ca6f67a2b894fc0152230f3bee69f279bce640c))
* **generator:** add description for number input precision config ([5eeb67b](https://github.com/jdfed/drip-form/commit/5eeb67b345a6e27262461d040e6e1b63025121a7))
* **generator:** add description for upload accept config ([9f52274](https://github.com/jdfed/drip-form/commit/9f52274ece0dcdf7606a5198db0e7561da9d3f0e))
* **generator:** regular verification configuration supports emptying options ([290d324](https://github.com/jdfed/drip-form/commit/290d3249357d72aca46f56f952786c9308559733))
* array container support showNo config ([16f92a5](https://github.com/jdfed/drip-form/commit/16f92a5ae8b094768ff08ba3e8422170f40d8409))
* generator schema非必填 ([628553f](https://github.com/jdfed/drip-form/commit/628553ff135a75c2ab668f0d2b29219e6c0ff514))
* generator数组容器支持配置新增按钮文案 ([f4693e8](https://github.com/jdfed/drip-form/commit/f4693e814e9aa392a8d21f414f58b4e0fa23c64d))
* module bar styles support custom ([#76](https://github.com/jdfed/drip-form/issues/76)) ([5b950b0](https://github.com/jdfed/drip-form/commit/5b950b05241a4a80243f3154a9abd7029aabf196))
* upload support img size limit ([#102](https://github.com/jdfed/drip-form/issues/102)) ([acbd278](https://github.com/jdfed/drip-form/commit/acbd27861a44004abf3afb7ae5ca5d210c70c28d))
* uploader support maxCount ([#72](https://github.com/jdfed/drip-form/issues/72))  ([0c01435](https://github.com/jdfed/drip-form/commit/0c0143593a3e4da4eb2ff1d438cbd88c5aa999ff))
* 支持header配置 ([2568ee2](https://github.com/jdfed/drip-form/commit/2568ee2b68787a8edacfd4ef06e98b4846c697f2))
* 支持复制fieldKey ([#89](https://github.com/jdfed/drip-form/issues/89)) ([a063827](https://github.com/jdfed/drip-form/commit/a06382719e1359419b8e5f7f56aecf273d838b6c))
* 支持自定义组件区域和属性配置区域 ([4d9477f](https://github.com/jdfed/drip-form/commit/4d9477fd0e4fa411550af480f8047c83e5fdd27d))


### Bug Fixes

* editConfig parse 函数 showTitle 判空逻辑错误修复 ([#77](https://github.com/jdfed/drip-form/issues/77)) ([bde5531](https://github.com/jdfed/drip-form/commit/bde5531190418b146fee3e61c5ca9a3ed0a7ddca))
* monaco-editor always in loading ([5f50fa9](https://github.com/jdfed/drip-form/commit/5f50fa9021ec8e2817c42d01a2c02b66780fbb47))
* property panel、 check panel not reload  ([#90](https://github.com/jdfed/drip-form/issues/90)) ([6c13d7a](https://github.com/jdfed/drip-form/commit/6c13d7afeaa275ca8d8084d4a580d64adb2c43e7))
* the delete button of the first component of the visible area is hidden ([#94](https://github.com/jdfed/drip-form/issues/94)) ([e388b6b](https://github.com/jdfed/drip-form/commit/e388b6b662617215a2ca119070e90f4be0bb5704))
* 修复元祖无数据不展示问题 ([#112](https://github.com/jdfed/drip-form/issues/112)) ([a67ae0e](https://github.com/jdfed/drip-form/commit/a67ae0e441d06d26812d257e34f82a245c9a84ea))
* 切换monaco-editor cdn路径 ([#78](https://github.com/jdfed/drip-form/issues/78)) ([96dbcde](https://github.com/jdfed/drip-form/commit/96dbcde19bdcedb54dfe5478940d8dd0db9922d5))
* 对象容器样式调整 & 数组｜对象容器schema支持style参数 ([#116](https://github.com/jdfed/drip-form/issues/116)) ([45f0f39](https://github.com/jdfed/drip-form/commit/45f0f39d7ba189f8859b3a9bfa2ad636e00c38ba))
* 对象嵌套拖拽报错 ([#79](https://github.com/jdfed/drip-form/issues/79)) ([a45f4a7](https://github.com/jdfed/drip-form/commit/a45f4a72fcbc2c77bb2a0a7f654e8a691305f053))
* 时间选择器，默认占位符文案保持一致 ([#105](https://github.com/jdfed/drip-form/issues/105)) ([5b61efb](https://github.com/jdfed/drip-form/commit/5b61efb11b6f222206b0ce99dfdecea034b78730))


### style

* 删除无用样式，避免样式冲突 ([c252e3e](https://github.com/jdfed/drip-form/commit/c252e3e9ac8ce04ff9f8017a80f928e4c0cf0524))



## 0.2.0 (2022-01-07)


### Features

* **generator:** add description for number input precision config ([5eeb67b](https://github.com/jdfed/drip-form/commit/5eeb67b345a6e27262461d040e6e1b63025121a7))
* **generator:** add description for upload accept config ([9f52274](https://github.com/jdfed/drip-form/commit/9f52274ece0dcdf7606a5198db0e7561da9d3f0e))
* **generator:** regular verification configuration supports emptying options ([290d324](https://github.com/jdfed/drip-form/commit/290d3249357d72aca46f56f952786c9308559733))
* 支持复制fieldKey ([#89](https://github.com/jdfed/drip-form/issues/89)) ([a063827](https://github.com/jdfed/drip-form/commit/a06382719e1359419b8e5f7f56aecf273d838b6c))
* 支持自定义组件区域和属性配置区域 ([4d9477f](https://github.com/jdfed/drip-form/commit/4d9477fd0e4fa411550af480f8047c83e5fdd27d))
* 支持header配置 ([2568ee2](https://github.com/jdfed/drip-form/commit/2568ee2b68787a8edacfd4ef06e98b4846c697f2))
* array container support showNo config ([16f92a5](https://github.com/jdfed/drip-form/commit/16f92a5ae8b094768ff08ba3e8422170f40d8409))
* generator schema非必填 ([628553f](https://github.com/jdfed/drip-form/commit/628553ff135a75c2ab668f0d2b29219e6c0ff514))
* generator数组容器支持配置新增按钮文案 ([f4693e8](https://github.com/jdfed/drip-form/commit/f4693e814e9aa392a8d21f414f58b4e0fa23c64d))
* module bar styles support custom ([#76](https://github.com/jdfed/drip-form/issues/76)) ([5b950b0](https://github.com/jdfed/drip-form/commit/5b950b05241a4a80243f3154a9abd7029aabf196))
* upload support img size limit ([#102](https://github.com/jdfed/drip-form/issues/102)) ([acbd278](https://github.com/jdfed/drip-form/commit/acbd27861a44004abf3afb7ae5ca5d210c70c28d))
* uploader support maxCount ([#72](https://github.com/jdfed/drip-form/issues/72))  ([0c01435](https://github.com/jdfed/drip-form/commit/0c0143593a3e4da4eb2ff1d438cbd88c5aa999ff))


### Bug Fixes

* 对象嵌套拖拽报错 ([#79](https://github.com/jdfed/drip-form/issues/79)) ([a45f4a7](https://github.com/jdfed/drip-form/commit/a45f4a72fcbc2c77bb2a0a7f654e8a691305f053))
* 切换monaco-editor cdn路径 ([#78](https://github.com/jdfed/drip-form/issues/78)) ([96dbcde](https://github.com/jdfed/drip-form/commit/96dbcde19bdcedb54dfe5478940d8dd0db9922d5))
* 时间选择器，默认占位符文案保持一致 ([#105](https://github.com/jdfed/drip-form/issues/105)) ([5b61efb](https://github.com/jdfed/drip-form/commit/5b61efb11b6f222206b0ce99dfdecea034b78730))
* editConfig parse 函数 showTitle 判空逻辑错误修复 ([#77](https://github.com/jdfed/drip-form/issues/77)) ([bde5531](https://github.com/jdfed/drip-form/commit/bde5531190418b146fee3e61c5ca9a3ed0a7ddca))
* monaco-editor always in loading ([5f50fa9](https://github.com/jdfed/drip-form/commit/5f50fa9021ec8e2817c42d01a2c02b66780fbb47))
* property panel、 check panel not reload  ([#90](https://github.com/jdfed/drip-form/issues/90)) ([6c13d7a](https://github.com/jdfed/drip-form/commit/6c13d7afeaa275ca8d8084d4a580d64adb2c43e7))
* the delete button of the first component of the visible area is hidden ([#94](https://github.com/jdfed/drip-form/issues/94)) ([e388b6b](https://github.com/jdfed/drip-form/commit/e388b6b662617215a2ca119070e90f4be0bb5704))


### style

* 删除无用样式，避免样式冲突 ([c252e3e](https://github.com/jdfed/drip-form/commit/c252e3e9ac8ce04ff9f8017a80f928e4c0cf0524))





**Note:** Version bump only for package @jdfed/form-generator





## 0.1.0 (2021-11-24)


### Features

* 编辑json之后未保存，无法添加删除表单 ([a0af616](https://github.com/jdfed/drip-form/commit/a0af616a1266ddc016d7f290aeb069f9d4e4e657))
* 核心拖拽能力直接操作uischema和dataschema，不使用recoil维护 ([ec08bb2](https://github.com/jdfed/drip-form/commit/ec08bb22da89084b19d1e621c7a241c169abdb04))
* 全局属性调整 ([cfa76b3](https://github.com/jdfed/drip-form/commit/cfa76b3a92ee6bfc042415f77ebea99578f45fc8))
* 添加右侧栏基础属性 ([a61fe23](https://github.com/jdfed/drip-form/commit/a61fe23a3b3a2b02ce5f46d6448a374cbabab723))
* 添加自定义export函数，测试iframe外部控制导出逻辑 ([de01461](https://github.com/jdfed/drip-form/commit/de014610c37d43959a3311148e27b0bf7ec49d27))
* 添加combine & 修复addField类型引用错误的问题 ([cd5fb7d](https://github.com/jdfed/drip-form/commit/cd5fb7d73704739073f734dcd1ca384299ba2f67))
* 拖拽优化 ([90e2251](https://github.com/jdfed/drip-form/commit/90e22517082fe2a432bb443fc1961451da7b2ba0))
* 完成"提示"配置面板的联动 ([efc3767](https://github.com/jdfed/drip-form/commit/efc376780325985265ac7311bb5f821358adc565))
* 完成右侧配置面板修改后实时渲染至可视区 ([12b1e45](https://github.com/jdfed/drip-form/commit/12b1e4518783e72fa3c20e0e194a07b3836c9a89))
* 完成中间区域拖拽 & 右侧schema联动获取 ([d3eadac](https://github.com/jdfed/drip-form/commit/d3eadacf93530d05aae1285dd99dfcc6a898dddf))
* 完善代码编辑区的逻辑 ([77aca4a](https://github.com/jdfed/drip-form/commit/77aca4a3155eb649f0b49785ef9eaad01aa63e25))
* 完善拖拽区操作 ([08cc07a](https://github.com/jdfed/drip-form/commit/08cc07ab74260d233ece26051142680ae89e8c03))
* 文件结构优化 & 添加combine和parse的errMsg单测数据 ([108a6e4](https://github.com/jdfed/drip-form/commit/108a6e456782ca6f8cfe242520a34aa540af943f))
* 新增@drip/ajv，支持node端调用，保持校验格式一致 ([f5919b4](https://github.com/jdfed/drip-form/commit/f5919b47dfa55d39b4b31176b7cf788f9e63c523))
* 新增@drip/ajv，支持node端调用，保持校验格式一致 ([425b33f](https://github.com/jdfed/drip-form/commit/425b33f517460728919806e3da60fd0f5045ae14))
* 新增表单的导入导出和预览 ([519617a](https://github.com/jdfed/drip-form/commit/519617a06b29a97e10109d2ffffa03742a09fc57))
* 隐藏对象、数组容器占位符 ([43c5910](https://github.com/jdfed/drip-form/commit/43c5910a26d015514c37888bfb0ed225b83477bc))
* 隐藏问题组件 ([19a7429](https://github.com/jdfed/drip-form/commit/19a742957429da27d37d703b20aa39109c69e719))
* 增加表单项的右侧配置项 ([ee11640](https://github.com/jdfed/drip-form/commit/ee11640cd4a3f4812a3d9087e27cae9c15364757))
* 增加代码编辑区的相关配置 ([7bb9b95](https://github.com/jdfed/drip-form/commit/7bb9b95a8baf2a6e3f32e722245b2c0160cabecd))
* 增加json编辑器 ([f3b33f2](https://github.com/jdfed/drip-form/commit/f3b33f21728fed727522c6de1b1c0d92dc770a25))
* 支持配置底部按钮&优化属性配置 ([db07029](https://github.com/jdfed/drip-form/commit/db070296f612a2ff3394424f319f0e27b2734fae))
* 支持切换组件类型 ([3ca1737](https://github.com/jdfed/drip-form/commit/3ca17376ab59b5926ff051a91701b754187a39aa))
* 支持拖拽 ([45bba5c](https://github.com/jdfed/drip-form/commit/45bba5c4f75a268b06310105b6865bb42f3eca39))
* 支持拖拽新建及右侧面板的选中 ([8001f61](https://github.com/jdfed/drip-form/commit/8001f6178538ea0e81e70121739b5172bc16cf9f))
* 支持校验文案配置 ([58adade](https://github.com/jdfed/drip-form/commit/58adadebdb12233bd961ef5a0937240893b9eb5f))
* 支持业务组件 ([eb9dc7d](https://github.com/jdfed/drip-form/commit/eb9dc7dafdd78ebb2fbbc375d73b0530b066b6e3))
* 支持自定义头部 ([1caf804](https://github.com/jdfed/drip-form/commit/1caf804818599d4384fa471f7d513ae79880c20b))
* bug修复+容器组件title配置 ([7fc0a05](https://github.com/jdfed/drip-form/commit/7fc0a054e1e3edc824d7153d6bb4b7a1540585f0))
* field文件导出目录修改 & 添加fonts ([b35c919](https://github.com/jdfed/drip-form/commit/b35c9190aa543139c546b0b1eacc7d49674db68b))
* jsonSchemaAtom和schemaAtom融合 ([1913ba2](https://github.com/jdfed/drip-form/commit/1913ba276408cb0fc226cc4baf05f7c5b1530935))
* viewport为空提示拖拽或点击 ([ca8e7f4](https://github.com/jdfed/drip-form/commit/ca8e7f42183b028554fa4574ee1b75b53cc7e5d7))
* **generator:** 支持校验 ([93367c5](https://github.com/jdfed/drip-form/commit/93367c5d965007638b51653459f1faeff9d637c5))
* **generator:** 支持校验联动 ([ed519f5](https://github.com/jdfed/drip-form/commit/ed519f559ea5ceb0524787f6a8e343fbe845024b))
* container外部封装高阶拖拽组件 ([45f8427](https://github.com/jdfed/drip-form/commit/45f842764601aaa44b267a39f3530827be11c0a3))
* generator接入combine函数 ([4c0b5cb](https://github.com/jdfed/drip-form/commit/4c0b5cbcea54723ef12efa7d93c41dc55bb29dad))
* generator可视化拖拽区域进度80% ([b999cfd](https://github.com/jdfed/drip-form/commit/b999cfde748d98ee6cac457636893a7a7f74ee02))
* generator可视化拖拽区域进度80% ([fa10a9d](https://github.com/jdfed/drip-form/commit/fa10a9dfc050b56b2e30b4169e3715912c7df0fa))
* ref存储在全局context中 ([81c140a](https://github.com/jdfed/drip-form/commit/81c140a32dcb8226ed325f9ae96157a6f8fbe853))


### Bug Fixes

* 1. formData ui.default 生成；2. ajv 校验不生成新的 formData ([e39fc1a](https://github.com/jdfed/drip-form/commit/e39fc1aa8925bb6b72fc25fd7bf1bfd64357d0fa))
* 1.输入框，组件撑满容器宽度；2.多选文案校验修改 ([0b1017e](https://github.com/jdfed/drip-form/commit/0b1017e9e7d61a4e3a74e5f980b84932701706f3))
* 表单关联 ([b76561a](https://github.com/jdfed/drip-form/commit/b76561afcfdf75deb7ab7692e9ab69e09ac41920))
* 单选选择器，初始默认值为string类型 ([2ba917e](https://github.com/jdfed/drip-form/commit/2ba917e0f321b0ddde4972f908d234bc8783492c))
* 当viewport中没有表单项的情况下无法添加表单项的问题 ([95d2b71](https://github.com/jdfed/drip-form/commit/95d2b716a5b8cb755d5417c8db67d429a18280a7))
* 滑动输入框，垂直展示，设置默认高度 ([93b2e02](https://github.com/jdfed/drip-form/commit/93b2e02106a1ff9ec1aaf5f8696ca6d0cf1dde8a))
* 滑动输入框，垂直展示，自定义高度 ([ed4214b](https://github.com/jdfed/drip-form/commit/ed4214b512e9c726863fb1c3e3fc108463d1243d))
* 开关选择器，默认置为false ([743bae3](https://github.com/jdfed/drip-form/commit/743bae3ee68888060d3d4da755af7090f7f946d8))
* 可视区为空逻辑 ([2c41136](https://github.com/jdfed/drip-form/commit/2c41136c0f415c9229bff09725313b29e3672759))
* 默认值不显示问题 ([2f0df3e](https://github.com/jdfed/drip-form/commit/2f0df3e3dd7fd6e86f3b4e971d1ac9399f14b6e3))
* 去除对象容器的强制刷新字段 ([844c17d](https://github.com/jdfed/drip-form/commit/844c17d3fd4b442b87386afc81a78236e899dc30))
* 数字输入框，小数点修改为精度 ([f0bd6b6](https://github.com/jdfed/drip-form/commit/f0bd6b67328c210d9398d58c3917e3eba1622176))
* 数组嵌套对象容器，对象容器无法添加子表单 ([2218f5f](https://github.com/jdfed/drip-form/commit/2218f5f463d198686e8e7706f8962ca75c32a96d))
* 拖拽fieldKey会变化 ([ef24adb](https://github.com/jdfed/drip-form/commit/ef24adb1f8eadf0ae0e66242e2da01241a911c2f))
* 拖拽fieldKey会变化 ([55d84af](https://github.com/jdfed/drip-form/commit/55d84af09dad8ffa574a1e18d7db4a364e716e56))
* 修复@ant-design/icon按需加载失效 ([2ca16a0](https://github.com/jdfed/drip-form/commit/2ca16a01e273a8a4e085703be6f807f949786b0f))
* 修复必填校验无法取消问题 ([cbc1ca1](https://github.com/jdfed/drip-form/commit/cbc1ca125e2ef0e7dc112f937c555a81ab1d8783))
* 修复标题、提示、布局切换组件丢失配置问题 ([a048d66](https://github.com/jdfed/drip-form/commit/a048d66507d201bba8edc653c5272b17aeb94d8d))
* 修复标题设置无法联动的问题 ([ea9a179](https://github.com/jdfed/drip-form/commit/ea9a179afedd8cd03631d4f4ecd9dff3bd0d7a6e))
* 修复全局配置无法生效的问题 ([45b5ea0](https://github.com/jdfed/drip-form/commit/45b5ea0e5d4d991119982f8c34b269b49fe0f2bd))
* 修复校验配置切换组件，typeMap报错问题 ([5e8c8e4](https://github.com/jdfed/drip-form/commit/5e8c8e4c7bfaf8b2b69765a60fabaedd78e85052))
* 修复颜色选择器格式错误的问题 ([bec06df](https://github.com/jdfed/drip-form/commit/bec06df15ce02fc92672e113a6e550c6e9a17739))
* 修复一系列问题 ([52d3e42](https://github.com/jdfed/drip-form/commit/52d3e4258f962958189f1c8ced9b8c20dcf24653))
* 修复组件一行一个的问题 ([8fc30e5](https://github.com/jdfed/drip-form/commit/8fc30e5146850784c128ddd43356625acf893eb6))
* 修复header打包失败 ([c5468e1](https://github.com/jdfed/drip-form/commit/c5468e1b3dd2eb23f545edf96e341a4cdb2c6d7a))
* 修复icon ([693aadd](https://github.com/jdfed/drip-form/commit/693aaddf54a93e58cfab319323fb0b759184141e))
* 修复json编辑时保存schema恢复默认问题 ([d364a15](https://github.com/jdfed/drip-form/commit/d364a151914a03ec31c0f0bb2f17d061d20f3977))
* 修复produce丢失 ([173c33e](https://github.com/jdfed/drip-form/commit/173c33eabfea060ce7420dd79a883b6216cdfa79))
* 修复schema不为空，拖拽文案不隐藏 ([4ca2387](https://github.com/jdfed/drip-form/commit/4ca2387a25af50abd61281862d399594db98461b))
* 修复typePath没有动态生成的问题 ([f338118](https://github.com/jdfed/drip-form/commit/f338118011f394e74975a73d09f7168ef4e7692a))
* 修复viewport区域拖拽无法删除被拖拽元素 ([769bd08](https://github.com/jdfed/drip-form/commit/769bd085c31edef79d11aa850eb568072653cadd))
* 修复viewport无法更新schema的问题 & parse对于无fieldKey状态的兜底处理逻辑 ([007cd89](https://github.com/jdfed/drip-form/commit/007cd897855c8b680d16823c5dca6a6f3e6afa05))
* 选项数组递增，去除 1 的标号，以免递增引起歧义 ([5452d44](https://github.com/jdfed/drip-form/commit/5452d44c2be9c042c5acb83c1ab2e1178a88be6f))
* 选择器，支持添加 options ([db54b77](https://github.com/jdfed/drip-form/commit/db54b77972d6d3205894ec67f34dbc34b048eac0))
* 一系列问题 ([52f612a](https://github.com/jdfed/drip-form/commit/52f612a37c20c55ae5957365aa249e9ffff96db3))
* 预览表单不刷新,样式等问题 ([2b9f8b3](https://github.com/jdfed/drip-form/commit/2b9f8b3d43e5034a09b788a89251129bc8a1e949))
* 增加自定义主题包 ([41c446c](https://github.com/jdfed/drip-form/commit/41c446ca8e571104fc807088d381391d4a2768a3))
* drip-form 编辑 JSON 时光标错位修改 ([ef4db81](https://github.com/jdfed/drip-form/commit/ef4db819e27b21a4cf7fc70ac27b7b6f04b7ede9))
* generator side-bar 样式调整 ([4634578](https://github.com/jdfed/drip-form/commit/4634578bde4b12ea4f381b12f07f24ca432f706b))
* json导出&viewport模式 ([6dff709](https://github.com/jdfed/drip-form/commit/6dff7099721e2a06d518a038aff668e1e8ea8562))
* jsonSchema删除formMode ([feaa3a7](https://github.com/jdfed/drip-form/commit/feaa3a7a8345f633699ebff176709dc7e38db786))
* ref声明 ([b8ee08c](https://github.com/jdfed/drip-form/commit/b8ee08c25473badd0ccb5f1744b6d2c93daa3dbd))


### Performance Improvements

* 优化右侧面板联动渲染区的逻辑 ([2233a14](https://github.com/jdfed/drip-form/commit/2233a1472d630df83da6984fcdba0f52a93ccfaa))
* icon使用cdn进行加载 ([e725182](https://github.com/jdfed/drip-form/commit/e72518294d3c8fa150f6d79d4e718c151179d1aa))


### style

* 添加最小宽度1024px ([8d3bc2e](https://github.com/jdfed/drip-form/commit/8d3bc2e9145084fc3a11d5ad12b859988f7dc430))
* 修复generator对全局样式污染的问题 ([7b37ca1](https://github.com/jdfed/drip-form/commit/7b37ca17c98323b04b018966b2db34424edc4824))
* 修复header高度 ([ebfa106](https://github.com/jdfed/drip-form/commit/ebfa106fc4d5afc17b198f515b72c59a08b54570))
* 样式调整 ([4568dea](https://github.com/jdfed/drip-form/commit/4568dea98436e81fe12b9c917c548a04986633e6))
