<template>
    <div v-html="showSvg(name)"></div>
</template>

<script>
    export default {
        props: ['name', 'classes', 'width', 'height'],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            svg() {
                return this.$el.querySelector('svg');
            }
        },

        mounted() {
            if (this.width) {
                this.svg.setAttribute('width', this.width);
            }

            if (this.height) {
                this.svg.setAttribute('height', this.height);                
            }

            if (this.classes) {
                this.svg.classList.add(this.classes);  
            }
        },

        methods: {
            showSvg(name) {
                return require('../../../images/' + name + '.svg');
            }
        }
    }
</script>