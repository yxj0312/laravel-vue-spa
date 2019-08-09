<template>
    <div>
        <ul class="border-b border-grey-light flex mb-4 list-reset" role="roleList">
            <li v-for="(tab, index) in tabs"
                :key="index"
                class="px-4 py-2 bg-white"
                :class="{ 'border border-b-0 rounded-t-lg ': tab.isActive }"
                :style="tab.isActive ? 'margin-bottom: -1px' : ''"
            >
                <button
                    v-text="tab.title"
                    :class="{ 'font-bold': tab.isActive }"
                    class="focus:outline-none"
                    role="tab"
                    :aria-selected="tab.isActive"
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

            this.setInitialActiveTab(); 
        },

        watch: {
            // Update the property for each of the children.
            activeTab(activeTab) {
                // Map over all of the tabs
                // Set the tab show property equal to whether or not the current tab is the active tab
                // Looping over all of the children, and we are updating its show property
                // Every single tab will have its show prop set to false, except for the one that is the actively selected tab.
                this.tabs.map(tab => (tab.isActive = tab == activeTab))
            }
        },

        methods: {
            setInitialActiveTab() {
                this.activeTab = this.tabs.find(tab => tab.active) || this.tabs[0];
            }
        }
    }
</script>
