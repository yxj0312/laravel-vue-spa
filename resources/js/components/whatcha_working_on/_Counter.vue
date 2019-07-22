<template>
    <div class="bg-grey w-64 h-64 flex items-center justify-center">
        <div>
            {{ count }}

            <p>
                <button class="bg-blue py-2 px-4 rounded-lg text-white hover:bg-blue-600" @click="increment">+1</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            count() {
                return window.store.state.count;
            }
        },
        methods: {
            increment() {
                window.store.commit('increment');
            }
        }
    }
</script>