export default {
    state: {
        count: 0
    },

    mutations: {
        increment(state) {
            state.count++;
        }
    },

    getters: {
        sqrt(state) {
            return Math.sqrt(state.count);
        }
    }


}