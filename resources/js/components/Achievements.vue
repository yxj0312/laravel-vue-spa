<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-12">
            Your Achievements
        </h1>

        <ul>
            <li
                v-for="(achievement, index) in achievements"
                v-text="achievement.name"
                :key="index"
            >

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [],

        components: {},

        data() {
            return {
                achievements:[]
            }
        },

        computed: {
            
        },

        methods: {

        }
    }
</script>