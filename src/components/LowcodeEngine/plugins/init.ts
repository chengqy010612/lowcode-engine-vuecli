import { injectAssets } from '@alilc/lowcode-plugin-inject';
import { getProjectSchemaToLocalStorage } from '../utils/store';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import assets from '../assets/assets.json';
import assetsEle from '../assets/assets2.json';
import originSchema from '../assets/schema.json';
// import './test.js';
const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx;
      const loadedAssets = await injectAssets(assetsEle);
      material.setAssets(loadedAssets);

      // const assets = await fetch('http://127.0.0.1:9000/assets.json').then((res) =>
      //   res.json()
      // );
      // material.setAssets(assets);

      const projectSchema = getProjectSchemaToLocalStorage();
      const schema = projectSchema ? projectSchema['componentsTree'].pop() : originSchema;

      project.onSimulatorRendererReady(() => {
        project.openDocument(schema);
      });
    },
  };
};

editorInit.pluginName = 'editorInit';

export default editorInit;
