<template>
  <div>
    <!-- <dx-popup
      v-model:visible="dialogVisible"
      title="编码规则"
      :showCloseButton="true"
    >
     
    </dx-popup> -->
    <div class="lowcode-plugin-sample-preview">
      <template v-if="redenerData.schema && redenerData.components">
        <!-- <VueRenderer
          class="lowcode-plugin-sample-preview-content"
          v-bind="vueRendererProps"
        ></VueRenderer> -->
        <component :is="component"></component>
      </template>
    </div>
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
  onMounted,h,
} from "vue"
import VueRenderer from "@knxcloud/lowcode-vue-renderer"
// import VueRenderer from "../lowcode-engine-vue/packages/vue-renderer"

import { Asset } from "@alilc/lowcode-types"
import { buildComponents, AssetLoader } from "@knxcloud/lowcode-utils"

const props = defineProps({
  // schema components
})
const emit = defineEmits([""])
const attrs = useAttrs()
const init = async () => {
  const packages = JSON.parse(window.localStorage.getItem("packages") || "[]")
  const projectSchema = JSON.parse(
    window.localStorage.getItem("projectSchema") || "{}"
  )
  const { componentsMap: componentsMapArray = [], componentsTree = [] } =
    projectSchema

  const componentsMap = {}
  componentsMapArray.forEach((component) => {
    componentsMap[component.componentName] = component
  })

  const libraryMap = {}
  const libraryAsset = []
  packages.forEach(({ package: _package, library, urls, renderUrls }) => {
    libraryMap[_package] = library
    if (renderUrls) {
      libraryAsset.push(renderUrls)
    } else if (urls) {
      libraryAsset.push(urls)
    }
  })
  await new AssetLoader().load(libraryAsset)
  const components = await buildComponents(libraryMap, componentsMap)

  return { schema: componentsTree[0], components }
}

const component = ref(h('div',{},'h函数'))
const redenerData = ref({})
init().then(({ schema, components }) => {
  redenerData.value.schema = schema
  redenerData.value.components = components
console.log(schema, components);
  component.value = h(VueRenderer, {
      class: 'lowcode-plugin-sample-preview-content',
      schema: toRaw(schema),
      components: toRaw(components),
    })
  // component.value = h('div',{},'h函数变化')
  // console.log(h('div',{},'h函数变化'));
  // console.log(
  //   h(VueRenderer, {
  //     class: 'lowcode-plugin-sample-preview-content',
  //     schema: toRaw(schema),
  //     components: toRaw(components),
  //   })
  // );
})

const vueRendererProps = computed(async () => {
  return {
    ...attrs,
    ...toRaw(redenerData),
  }
})

defineExpose({})
</script>

<style lang="scss" scoped></style>
