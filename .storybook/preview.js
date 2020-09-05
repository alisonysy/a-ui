import React from 'react';
import { GlobalStyle } from '../src/components/shared/global';
import { addDecorator, addParameters } from '@storybook/react';

// 全局的装饰器可以通过export const decorators = [ decoratorFn1 ]设置
/* export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
} */

// parameter是一系列静态的有名字的，用于描述story的metadata。通常用于控制storybook的特性和addon
addParameters({
  options: {
    showRoots: true
  },
  dependencies: {
    // #q: 这两个变量的设置是storybook-addon-deps的设置，但没有该依赖
    // 只会展示有storybook story的依赖组件
    withStoriesOnly: true,
    // 若当前组件没有元素，会完全隐藏
    hideEmpty: true
  }
})

// addDecorator和export const decorator均是按注册顺序生效
addDecorator((story) => (
  <>
    <GlobalStyle />
    { story() }
  </>
));