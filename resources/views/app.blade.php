<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laracasts Assets</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
        <link rel="stylesheet" href="/css/app.css">
    </head>

    <body class="font-sans">
        <div id="app">
            <div class="container mx-auto">
                <header class="py-6 mb-8">
                    <h1>
                        <img alt="Laracasts" src="/images/logo.svg">
                    </h1>
                </header>

                <main class="flex">
                    <aside class="w-1/5">
                        <section class="mb-8">
                            <h5 class="uppercase font-bold mb-3">The Brand</h5>
                            
                            <ul class="list-reset">
                                <li class="text-sm leading-loose"><router-link to="/" class="text-black" exact>Logo</router-link></li>
                                <li class="text-sm leading-loose"><router-link to="/logo-symbol" class="text-black">Logo Symbol</router-link></li> 
                                <li class="text-sm leading-loose"><router-link to="/colors" class="text-black">Colors</router-link></li> 
                                <li class="text-sm leading-loose"><router-link to="/typography" class="text-black">Typography</router-link></li> 
                                {{-- <router-link :to="{ name: 'about' }">About</router-link> --}}
                            </ul>
                        </section>
                        <section>
                            <h5 class="uppercase font-bold mb-3">Doodles</h5>

                            <ul class="list-reset">
                                <li class="text-sm leading-loose"><router-link to="/mascot" class="text-black">Mascot</router-link></li>
                                <li class="text-sm leading-loose"><router-link to="/illustrations" class="text-black">Illustrations</router-link></li> 
                                <li class="text-sm leading-loose"><router-link to="/loaders-and-animations" class="text-black">Loaders & Animations</router-link></li> 
                                <li class="text-sm leading-loose"><router-link to="/wallpapers" class="text-black">Wallpapers</router-link></li> 
                            </ul>
                        </section>
                    </aside>

                    <div class="primary flex-1">
                        <router-view></router-view>
                    </div>
                </main>
            </div>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
