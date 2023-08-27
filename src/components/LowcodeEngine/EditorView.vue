<template>
  <div>
    <div id="lce-container2" style="width: 84vw; height: 87vh"></div>
  </div>
</template>

<script setup>
import {
  defineProps,
  toRefs,
  getCurrentInstance,
  defineEmits,
  watch,
  useAttrs,
  computed,
  ref,
  reactive,
  toRaw,
  defineExpose,
  onMounted,
} from "vue"
// import { applyPureReactInVue } from "veaury"
import ReactDOM from "react-dom"
import React, { useEffect, useState } from "react"

import Inject from "@alilc/lowcode-plugin-inject"
import {
  init,
  project,
  plugins,
  common,
  skeleton,
  config,
} from "@alilc/lowcode-engine"
import UndoRedoPlugin from "@alilc/lowcode-plugin-undo-redo"
import SchemaPlugin from "@alilc/lowcode-plugin-schema"
import DataSource from "@alilc/lowcode-plugin-datasource-pane"
import { setupHostEnvironment } from "@knxcloud/lowcode-utils"
import CodeEditor from "@knxcloud/lowcode-plugin-vue-code-editor"
import RegistryPlugin from "./plugins/registry"
import InitPlugin from "./plugins/init"
import SetterPlugin from "./plugins/setter"
import Actions from "./plugins/actions"
import "./editor.less"

const emit = defineEmits([""])
const props = defineProps({})
const state = reactive({})
const {} = toRefs(state)

// function EditorView() {
//   let a = '12434dsaf'
//   return <div>react{a}</div>
// }
// class ReactComp extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return <div>react</div>
//   }
// }
// ReactDOM.render(<EditorView2 />, document.getElementById('lce-container2'));


async function registerPlugins() {
  // 此处略去若干插件注册
  await plugins.register(Inject)
  await plugins.register(RegistryPlugin)
  await plugins.register(UndoRedoPlugin)
  await plugins.register(SchemaPlugin)
  await plugins.register(DataSource)
  await plugins.register(SetterPlugin)
  await plugins.register(InitPlugin)
  await plugins.register(CodeEditor)
  await plugins.register(Actions)
}
// function EditorView() {
//   /** 插件是否已初始化成功，因为必须要等插件初始化后才能渲染 Workbench */
//   const [hasPluginInited, setHasPluginInited] = useState(false)
//   useEffect(() => {
//     plugins
//       .init()
//       .then(() => {
//         setHasPluginInited(true)
//       })
//       .catch((err) => console.error(err))
//   }, [])
//   if (!hasPluginInited) {
//     return null
//   }
//   const Workbench = common.skeletonCabin.Workbench
//   return <Workbench />
// }
// const EditorView2 = applyPureReactInVue(EditorView)
onMounted(() => {
  ;(async function main() {
    const preference = new Map()
    preference.set("DataSourcePane", {
      importPlugins: [],
      dataSourceTypes: [
        {
          type: "fetch",
        },
      ],
    })
    await registerPlugins()
    // config.setConfig({
    //   enableCondition: true,
    //   enableCanvasLock: true,
    //   supportVariableGlobally: true,
    //   simulatorUrl: [
    //     // "/js/vue-simulator-renderer.js",
    //     // "/js/vue-simulator-renderer.css",
    //   ],
    //   // preference,
    //   // requestHandlersMap: {
    //   //   fetch: createFetchHandler()
    //   // },
    // })
    setupHostEnvironment(project, "/js/vue.runtime.global.js")

    await init(
      document.getElementById("lce-container2"),
      {
        enableCondition: true,
        enableCanvasLock: true,
        supportVariableGlobally: true,
        simulatorUrl: [
          "/js/vue-simulator-renderer.js",
          "/js/vue-simulator-renderer.css",
        ],
      },
      preference
    )
    // ReactDOM.render(<EditorView />, document.getElementById("lce-container2"))
  })()
})

defineExpose({})
</script>

<style lang="scss" scoped></style>
