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

            dialog(message, params = {}) {
                if (typeof message === 'string') {
                    params.message = message;
                } else {
                    params = message;
                }

                return new Promise((resolve, reject) => {
                    this.show('dialog', params);

                    Plugin.events.$on(
                        'clicked', confirmed => resolve(confirmed)
                    );
                });
            }
        }
    }
};

export default Plugin;