<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-12">Context Menu</h1>

        <div>
            <div class="bg-grey w-64 h-64 flex items-center justify-center">
                <dropdown>
                    <template v-slot:trigger>
                        <button>
                            ...
                        </button>
                    </template>

                    <li><a href="#" class="pl-2 pr-8 text-xs block hover:bg-grey-darker">Edit</a></li>
                    <li><a href="#" class="pl-2 pr-8 text-xs block hover:bg-grey-darker">Delete</a></li>
                    <li><a href="#" class="pl-2 pr-8 text-xs block hover:bg-grey-darker">Report</a></li>
                </dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import dropdown from './_DropDown'
    export default {
        props: [],

        components: {
            dropdown
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