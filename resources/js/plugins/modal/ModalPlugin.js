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
                return new Promise((resolve, reject) => {
                    this.show('dialog', { message });
                    
                    Plugin.events.$on('clicked', confirmed => {
                        resolve(confirmed);
                        console.log(confirmed);
                    });
                });
            }
        }
    }
};

export default Plugin;