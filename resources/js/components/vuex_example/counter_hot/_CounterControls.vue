<template>
    <div class="flex flex-col">
        <div class="mb-3">Value: {{ count }}</div>
        <div class="mb-3">
            <button class="button" @click="increment">+</button>
            <button class="button" @click="decrement">-</button>
            <button class="button" @click="incrementIfOdd">Increment if odd</button>
            <button class="button" @click="incrementAsync">Increment async</button>
        </div>
        <div>
            <div>Recent History (last 5 entries): {{ recentHistory }}</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters([
            'count',
            'recentHistory'
        ]),

        methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>
