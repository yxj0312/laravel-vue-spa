<template>
    <div class="text-center">
        <h1 class="text-2xl font-bold mb-8">Modal</h1>

        <p>
            <a href="#cancel-modal">Open Modal</a>
            
        </p>
        <p>
            Our next practical Vue component is, of course, the ubiquitous modal. In this episode, 
            we'll migrate and enhance the code from <a href="https://laracasts.com/series/modern-css-for-backend-developers/episodes/17">the CSS-only modals lesson</a>. 
            Once working, we'll then learn how to extract the code to a custom Vue plugin.
        </p>

        <modal name="cancel-modal">
            <h1>Leaving So Soon?</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas sapiente blanditiis nihil amet vero, 
                ex enim at qui cum molestias eveniet? Facilis nihil accusamus magni? Doloribus voluptas unde ullam.
            </p>

            <template v-slot:footer>
            <!-- <template v-slot:footer="{foo}"> -->
                <!-- <button
                    @click="$modal.hide('cancel-modal')"
                    class="bg-grey-500 py-2 px-4 rounded-lg text-white hover:bg-gray-600 mr-2"
                > -->
                <button
                    class="bg-grey py-2 px-4 rounded-lg text-white hover:bg-gray-600 mr-2"
                >
                    Cancel
                </button>
                <a
                    href="#confirm-cancel-modal"
                    class="bg-blue py-2 px-4 rounded-lg text-white hover:bg-blue-600"
                >Confirm Cancellation</a>
            </template>
        </modal>

        <modal name="confirm-cancel-modal">
            <h1>You're 100% Sure?</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas sapiente blanditiis nihil amet vero, 
                ex enim at qui cum molestias eveniet? Facilis nihil accusamus magni? Doloribus voluptas unde ullam.
            </p>

            <template v-slot:footer>
            <!-- <template v-slot:footer="{foo}"> -->
                <button
                    class="bg-grey py-2 px-4 rounded-lg text-white hover:bg-gray-600 mr-2"
                >
                    Cancel
                </button>
                <a
                    href="#confirm-cancel-modal"
                    class="bg-blue py-2 px-4 rounded-lg text-white hover:bg-blue-600"
                >Yes</a>
            </template>
        </modal>
    </div>

</template>

<script>
    import modal from './_Modal'
    export default {
        props: [],

        components: {
            modal
        },

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>