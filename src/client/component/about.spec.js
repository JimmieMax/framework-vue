import Vue from 'vue' ;
import About from './about.vue' ;

describe('About', () => {
    // 检查原始组件选项
    it('has a created hook', () => {
        expect(typeof About.created).toBe('function')
    });

    // 评估原始组件选项中的函数的结果
    it('sets the correct default data', () => {
        expect(typeof About.data).toBe('function');
        const defaultData = About.data();
        expect(defaultData.message).toBe('Welcome to Your Vue.js App')
    });

    // 检查 mount 中的组件实例
    it('correctly sets the message when created', () => {
        const vm = new Vue(About).$mount();
        expect(vm.message).toBe('bye!')
    });

    // 创建一个实例并检查渲染输出
    it('renders the correct message', () => {
        const Constructor = Vue.extend(About);
        const vm = new Constructor().$mount();
        expect(vm.$el.textContent).toBe('about:bye!')
    })
});