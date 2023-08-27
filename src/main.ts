import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app1')


import Inject from '@alilc/lowcode-plugin-inject';
import { init, plugins, project } from '@alilc/lowcode-engine';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import DataSource from '@alilc/lowcode-plugin-datasource-pane';
import { setupHostEnvironment } from '@knxcloud/lowcode-utils';
import CodeEditor from '@knxcloud/lowcode-plugin-vue-code-editor';
import RegistryPlugin from './components/LowcodeEngine/plugins/registry';
import InitPlugin from './components/LowcodeEngine/plugins/init';
import SetterPlugin from './components/LowcodeEngine/plugins/setter';
import Actions from './components/LowcodeEngine/plugins/actions';
import './components/LowcodeEngine/editor.less';
// // import vue from 'Vue';
// const vue = require('Vue');
// console.log(vue.createApp);
// debugger;

(async () => {
  const preference = new Map();

  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
    ],
  });

  await plugins.register(Inject);
  await plugins.register(RegistryPlugin);
  await plugins.register(UndoRedoPlugin);
  await plugins.register(SchemaPlugin);
  await plugins.register(DataSource);
  await plugins.register(SetterPlugin);
  await plugins.register(InitPlugin);
  await plugins.register(CodeEditor);
  await plugins.register(Actions);

  // const registerSetter = window.AliLowCodeEngine.setters.registerSetter;
  // registerSetter('AltStringSetter', AltStringSetter);

  setupHostEnvironment(project, '/js/vue.runtime.global.js');

  await init(
    document.getElementById('lce-container')!,
    {
      enableCondition: true,
      enableCanvasLock: true,
      supportVariableGlobally: true,
      simulatorUrl: ['/js/vue-simulator-renderer.js', '/js/vue-simulator-renderer.css'],
    },
    preference
  );
})();