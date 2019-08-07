<template>
    <div>
        <ul class="border-b border-grey-light flex mb-4 list-reset">
            <li v-for="(tab, index) in tabs"
                :key="index"
                class="border border-b-0 rounded-t-lg px-4 py-2 bg-white">
                <button
                    v-text="tab.title"
                    :class="{ 'font-bold': tab == activeTab }"
                    class="focus:outline-0"
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

            this.activeTab = this.tabs[0]
        },

        watch: {
            activeTab(tab) {
                this.tabs.map(tab => (tab.show = tab == activeTab))
            }
        },

        methods: {

        }
    }
</script>
