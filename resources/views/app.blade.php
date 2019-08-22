<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laracasts Assets</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
        <link rel="stylesheet" href="/css/app.css">
    </head>

    <body class="font-sans">
        <div id="app">
            <header class="section py-6 mb-8" style="background: url('/images/splash.svg') 0 15px no-repeat;">
                <h1>
                    <img alt="Laracasts" src="/images/logo.svg">
                </h1>
            </header>
            <div class="section pb-10">
                <div class="container">
                    <main class="flex">
                        <aside class="w-64 pt-8 flex-no-shrink">
                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">The Brand</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/" class="text-black" exact>Logo</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/logo-symbol" class="text-black">Logo Symbol</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/colors" class="text-black">Colors</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/typography" class="text-black">Typography</router-link></li>
                                    {{-- <router-link :to="{ name: 'about' }">About</router-link> --}}
                                </ul>
                            </div>

                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">Doodles</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/mascot" class="text-black">Mascot</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/illustrations" class="text-black">Illustrations</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/loaders-and-animations" class="text-black">Loaders & Animations</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/wallpapers" class="text-black">Wallpapers</router-link></li>
                                </ul>
                            </div>

                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">Stats</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/site-stats" class="text-black">Site Stats</router-link></li>
                                </ul>
                            </div>

                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">About laracasts</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/myteam" class="text-black">The Team</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/achievements" class="text-black">Your Achievements</router-link></li>
                                </ul>
                            </div>


                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">Practical Vue Components</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep1" class="text-black">Ep1: Smooth Scrolling</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep2" class="text-black">Ep2: Context Menus</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep3" class="text-black">Ep3: Show an Element When Another is Hidden</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep4" class="text-black">Ep4: Modals and Custom Vue Plugins</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep5" class="text-black">Ep5: Confirmation Dialogs and Buttons</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep6" class="text-black">Ep6: Inline SVGs Using Render Functions</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/practical_vue_components/ep7" class="text-black">Ep7: Tabs</router-link></li>
                                </ul>
                            </div>

                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">Whatcha Working On</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/whatcha_working_on/ep21" class="text-black">Ep21: Learn Vuex With Me: Part 1</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/whatcha_working_on/ep36" class="text-black">Ep36: Frontend Authorization Brainstorming</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/whatcha_working_on/ep38" class="text-black">Ep38: How to Dynamically Inline SVG Files in Vue Components</router-link></li>
                                </ul>
                            </div>

                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">Vuex Example</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/vuextodo/ep23" class="text-black">Ep23: Learn Vuex With Me: Part 3</router-link></li>
                                    <li class="text-sm leading-loose"><router-link to="/vuex-example/counter-hot" class="text-black">Hot Reloading</router-link></li>
                                </ul>
                            </div>

                            <div class="mb-10">
                                <h5 class="uppercase font-bold mb-5 text-base">Vue Knowhow</h5>

                                <ul class="list-reset">
                                    <li class="text-sm leading-loose"><router-link to="/vue-knowhow/nest-vue-slot" class="text-black">Nest Vue Slot</router-link></li>
                                </ul>
                            </div>
                        </aside>

                        <div class="primary flex-1">
                            <router-view></router-view>
                        </div>
                    </main>
                </div>
            </div>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
