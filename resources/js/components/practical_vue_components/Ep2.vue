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

                    <li class="text-sm leading-loose"><a href="#" class="pl-2 pr-8 text-xs block hover:bg-grey-darker text-white">Edit</a></li>
                    <li class="text-sm leading-loose"><a href="#" class="pl-2 pr-8 text-xs block hover:bg-grey-darker text-white">Delete</a></li>
                    <li class="text-sm leading-loose"><a href="#" class="pl-2 pr-8 text-xs block hover:bg-grey-darker text-white">Report</a></li>
                </dropdown>
            </div>

            <hr>

            <!-- Example 2 -->
            <dropdown classes="w-full">
                <template v-slot:trigger>
                    <button class="text-blue-darker">Example With Full Width Menu</button>
                </template>

                <li><a href="#" class="pl-2 pr-8 leading-loose text-xs block hover:bg-grey-darker text-white">Edit</a></li>
                <li><a href="#" class="pl-2 pr-8 leading-loose text-xs block hover:bg-grey-darker text-white">Delete</a></li>
                <li><a href="#" class="pl-2 pr-8 leading-loose text-xs block hover:bg-grey-darker text-white">Report</a></li>
            </dropdown>
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