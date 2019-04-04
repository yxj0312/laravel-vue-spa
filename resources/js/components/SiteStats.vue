<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-6">
            Laracasts Stats
        </h1>

        <ul>
            <li>
                <strong>Total Series:</strong> {{ series }}
            </li>

            <li>
                <strong>Total Lessons:</strong> {{ lessons }}
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
                series: 0,
                lessons: 0
            }
        },

        computed: {
            
        },

        created() {
            axios.get('http://birdboard.loc/api/stats')
                .then(({ data }) => {
                    this.series = data.series
                    this.lessons = data.lessons
                });
        },

        methods: {
            
        }
    }
</script>