<template>
    <div>
        <ul class="border-b border-grey-light flex mb-4 list-reset">
            <li v-for="(tab, index) in tabs"
                :key="index"
                class="border border-b-0 rounded-t-lg px-4 py-2 bg-white">
                <button
                    v-text="tab.title"
                    role="tab"
                    @click="activeTab = tab"
                >

                </button>
            </li>
        </ul>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['title'],

        components: {},

        data() {
            return {
                tabs: [],
                activeTab: null
            }
        },

        computed: {

        },

        mounted() {
            this.tabs = this.$children

            this.tabs[0].show = true
        },

        methods: {

        }
    }
</script>
