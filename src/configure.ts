import { createApp, defineCustomElement, getCurrentInstance, h, type Component } from 'vue';

export const createElementInstance = ({
  component = null,
  styles = [],
  plugins = [],
  renderOptions = {}
} = {}) => {
  return defineCustomElement({
    setup() {
      const app = createApp({});
      plugins.forEach((plugin) => app.use(plugin));

      const inst = getCurrentInstance()
      if (inst) {
        Object.assign(inst.appContext, app._context)
        Object.assign(inst.appContext.provides, app._context.provides)
      }
    },
    styles,
    render: () => h(component as unknown as Component, renderOptions)
  })
}
