<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laracasts Assets</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body class="font-sans">
        <div id="app">
            <div class="container mx-auto">
                <header class="py-6">
                    <h1>Laracasts</h1>
                </header>

                <main class="flex">
                    <aside class="w-1/5">
                        <section class="mb-8">
                            <h5 class="uppercase font-bold">The Brand</h5>
                            
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/about">About</router-link></li> 
                                {{-- <router-link :to="{ name: 'about' }">About</router-link> --}}
                            </ul>
                        </section>
                        <section>
                            <h5 class="uppercase font-bold">Doodles</h5>

                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/about">About</router-link></li> 
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
