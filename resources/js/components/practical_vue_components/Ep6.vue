<template>
    <div>
        <div class="flex">
            <li v-for="(achievement, index) in achievements" :key='index'
                class="rounded-full flex items-center justify-center"
            >

                <inline-svg></inline-svg>
                <!-- <div v-html="icon(achievement)"></div> -->
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],

        components: {
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