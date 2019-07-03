import Component from './Component';

let Plugin = {
    install: function (Vue, options = {}) {
        Vue.component('modal', Component);

        // Vue() includes an $emit method, that means a new instance of vue is an event dispatch
        Plugin.events = new Vue(); 

        Vue.prototype.$modal = {
            show(name, params = []) {
                location.hash = name;

                // fire an event on the plugin and include the params
                Plugin.events.$emit('show', params);
            },

            hide(name) {
                location.hash = '#';
            },

            dialog(message) {
                // this.$modal.dialog('Hello there')
                this.show('dialog', { message });
            }
        }
    }
};

export default Plugin;