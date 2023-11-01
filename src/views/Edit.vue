<template>
    <EditorView></EditorView>
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
import EditorView from '../components/LowcodeEngine/EditorView.vue'

const emit = defineEmits([""])
const props = defineProps({})
const state = reactive({})
const {} = toRefs(state)

defineExpose({})
</script>

<style lang="scss" scoped></style>
