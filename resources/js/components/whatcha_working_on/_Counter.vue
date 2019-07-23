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
    import { mapState, mapMutations } from 'vuex'

    export default {
        computed: mapState(
            ['count']
        ),

        methods: {
            custom() {

            },

            // ... calls object rest spread transform from babel
            // And now is supported by laravel-mix, no need to install plugin in .babelrc
            ...mapMutations(['increment'])
        }
    }
</script>