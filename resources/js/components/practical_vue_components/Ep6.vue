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
                <!-- <div v-html="icon(achievement)"></div> -->
            </li>
        </div>
    </div>
</template>

<script>
    import InlineSvg from './_InlineSvg';

    export default {
        props: [],

        components: {
            InlineSvg
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