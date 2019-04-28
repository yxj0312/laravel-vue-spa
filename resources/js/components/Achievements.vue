<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-12">
            Your Achievements
        </h1>

        <input 
            placeholder="Your Laracast API token" 
            v-model="token" 
            class="border p-2 rounded w-full mb-8"
            @keyup.enter="fetchAchievements"
        />

        <p class="text-xs mb-1">nog2q5Dg7bDpkEZG3cfIPW3YNpELQvHMrYyPhGMYrOgxUl3cSnpQJJO2LceB</p>
        <p class="text-xs mb-8">eynT09Fd4MDxZZ2Q7joWX9StdbqSs6WuxlcC3vMG0SC5yUxpphgGQUMozIE8</p>
        <p class="text-red italic text-sm" v-if="message" v-text="message"></p>

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
                achievements:[],
                token:'',
                message:''
            }
        },

        

        computed: {
            
        },

        methods: {
            fetchAchievements() {
                axios.get(
                    // 'http://birdboard.loc/api/achievements?api_token=nog2q5Dg7bDpkEZG3cfIPW3YNpELQvHMrYyPhGMYrOgxUl3cSnpQJJO2LceB'
                    `http://birdboard.loc/api/achievements?api_token=${this.token}`
                    )
                    .catch(error => {
                        this.message = error.response.data.message;
                        this.achievements = [];
                    })
                    .then(({data}) => {
                        this.achievements = data;
                        this.message = null;
                    });
            },
        }
    }
</script>