<template>
    <div class="text-center">
        <h1 class="text-2xl font-bold mb-8">Modal</h1>

        <p>
            <a href="#cancel-modal">Open Modal</a>
        </p>

        <modal name="cancel-modal">
            <h1>Leaving So Soon?</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas sapiente blanditiis nihil amet vero, 
                ex enim at qui cum molestias eveniet? Facilis nihil accusamus magni? Doloribus voluptas unde ullam.
            </p>
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