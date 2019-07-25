export default {
    state: {
        count: 0
    },

    mutations: {
        increment(state) {
            // setTimeout(() => state.count++, 2000);
            state.count++;
        }
    },

    actions: {
        increment (context) {
            setTimeout(() => {
                context.commit('increment');
            }, 3000);
        }
    },

    getters: {
        sqrt(state) {
            return Math.sqrt(state.count);
        }
    }
}