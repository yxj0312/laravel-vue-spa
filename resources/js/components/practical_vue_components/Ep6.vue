<template>
    <div>
        <div class="flex">
            <li v-for="(achievement, index) in achievements" :key='index'
                class="rounded-full flex items-center justify-center"
            >

                <inline-svg 
                    :name="achievement"
                    classes="bg-red"
                    width="50px"
                    height="50px"
                ></inline-svg>
            </li>
        </div>

        <div class="flex">
            <li v-for="(achievement, index) in achievements" :key='index'
                class="rounded-full flex items-center justify-center"
            >
                <inline-svg-vue
                    :name="achievement"
                    classes="bg-red"
                    width="50px"
                    height="50px"
                ></inline-svg-vue>
            </li>
        </div>
    </div>
</template>

<script>
    import InlineSvg from './_InlineSvg';
    import InlineSvgVue from './_InlineSvgVue'

    export default {
        props: [],

        components: {
            InlineSvg,
            InlineSvgVue
        },

        data() {
            return {
                achievements: [
                    'person', 'personw'
                ]
            }
        },

        computed: {
            
        },

        methods: {
            icon(achievement) {
                // return require('../../../images/' + achievement + '.svg');

                return require('../../../images/' + achievement + '.svg').replace(
                    /<svg /,
                    `<svg title='${achievement}'`
                );
            }
        }
    }
</script>