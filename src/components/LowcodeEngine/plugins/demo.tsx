// import * as React from 'react';
// import { Input } from '@alifd/next';

// export default class AltStringSetter2 extends React.Component {
//   // 声明 Setter 的 title
//   render() {
//     const {} = this.props;
//     // return <input type="file" />;
//     return <div>xxx</div>;
//   }
// }

// import "./index.scss";
interface AltStringSetterProps {
  // 当前值
  value: string;
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: string) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}
// export class AltStringSetter extends React.PureComponent<AltStringSetterProps> {
//   componentDidMount() {
//     const { onChange, value, defaultValue } = this.props;
//     if (value == undefined && defaultValue) {
//       onChange(defaultValue);
//     }
//   }

//   // 声明 Setter 的 title
//   static displayName = 'AltStringSetter';

//   render() {
//     const { onChange, value, placeholder } = this.props;
//     return (
//       <Input
//         value={value}
//         placeholder={placeholder || ''}
//         onChange={(val: any) => onChange(val)}
//       ></Input>
//     );
//   }
// }

// import * as React from 'react';
// import { Switch } from '@alifd/next';

// import './index.less';
// interface BoolSetterProps {
//   value: boolean;
//   disabled: boolean;
//   defaultValue: any;
//   onChange: (val: number) => void;
// }
// interface BoolSetterState {
//   setterValue: boolean;
// }
// export default class BoolSetter extends React.PureComponent<
//   BoolSetterProps,
//   BoolSetterState
// > {
//   static displayName = 'BoolSetter';

//   render() {
//     const { onChange, value } = this.props;
//     return (
//       <div
//         className="switch-style"
//       />
//     );
//   }
// }

// interface IProps {
//   color: string;
//   size?: string;
// }
// interface IState {
//   count: number;
// }
// class App extends React.Component<IProps, IState> {
//   public state = {
//     count: 1,
//   };
//   public render() {
//     return <div>Hello world</div>;
//   }
// }
import React from 'react';
import VueComp from './demo.vue';
import { applyVueInReact, applyPureVueInReact } from 'veaury';
const vue = require('Vue');

const Foo = {
  template: `
    <div>
      <h1>我是vue : {{aaa}}</h1>
      <h1>我是vue : {{aaa}}</h1>
      <h1>我是vue : {{aaa}}</h1>
      <button @click="aaa++">按钮</button>
    </div>
  `,
  data() {
    return {
      aaa: 2222,
    };
  },
};

const VueComp2 = applyVueInReact(vue.createApp(Foo));
// interface IProps {
//   name: string;
// }

// const App = (props: IProps) => {
//   const { name } = props;

//   componentDidMount(){
//     const Foo = {
//       template: `
//         <div>
//           <h1>我是vue : {{aaa}}</h1>
//           <h1>我是vue : {{aaa}}</h1>
//           <h1>我是vue : {{aaa}}</h1>
//           <button @click="aaa++">按钮</button>
//         </div>
//       `,
//       data () {
//         return {
//           aaa: 2222
//         }
//       }
//     }
//     vue.createApp(Foo).mount('#vue-app')

//     }
//   return <div className="App" id="vue-app"></div>;
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <h2>{name}</h2>
//     </div>
//   );
// };

class App extends React.Component<IProps, IState> {
  public state = {
    count: 1,
  };

  componentDidMount() {
    // vue.createApp(VueComp).mount('#vueApp');
  }

  public render() {
    return (
      <div>
        111xxu
        <div id="vueApp"></div>
        <VueComp2></VueComp2>
      </div>
    );
  }
}

export default App;
