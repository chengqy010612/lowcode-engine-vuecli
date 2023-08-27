import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import ComponentsPane from '@alilc/lowcode-plugin-components-pane';
import { Logo } from '../components/logo/logo';
import { Logo2 } from '../components/logo2/logo';

const builtinPluginRegistry = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'builtin-plugin-registry',
    async init() {
      const { skeleton, project } = ctx;
      // 注册 logo 面板
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: Logo,
        contentProps: {
          logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });

      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: Logo2,
        contentProps: {
          logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });

      // 注册组件面板
      const componentsPane2 = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'componentsPane',
        content: ComponentsPane,
        props: {
          align: 'top',
          icon: 'zujianku',
          description: '组件库',
        },
      });
      componentsPane2.disable();
      project.onSimulatorRendererReady(() => {
        componentsPane2.enable();
      });
    },
  };
};

builtinPluginRegistry.pluginName = 'builtinPluginRegistry';

export default builtinPluginRegistry;
