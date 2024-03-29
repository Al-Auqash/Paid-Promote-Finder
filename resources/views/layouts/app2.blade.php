<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Paid Promote Finder') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Nunito&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app2.css') }}" rel="stylesheet">
    <link href="{{ asset('manifest.json') }}" rel="manifest">
    <link rel="icon" type="image/png" href="{{ asset('images/ppf-logo.png') }}" />
    
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Paid Promote Finder based PWA" />
    <link rel="apple-touch-icon" href="{{ asset('images/ppf-logo.png') }}" />

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #222831;
            color: #F4F4F4;
            font-family: 'Akaya Kanadaka', cursive;
            /* font-family: 'Oxygen', sans-serif; */
            /* font-family: 'Nunito', sans-serif; */
            font-size: 14pt;
        }

        ::-webkit-scrollbar {
            width: 0.5em;
            /* background-color: transparent; */
        }

        ::-webkit-scrollbar-track {
            /* -webkit-box-shadow: inset 0 0 6px #e41376; */
            background: #10131c;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #ff7315;
            border-radius: 10px;
            /* outline: 1px solid slategrey; */
        }
    </style>
</head>

<body>
    <div id="app">
        {{-- <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-base-background shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    Paid Promote Finder
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <!-- <form method="post">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Try type 'Anniversary' " aria-label="Try type 'Anniversary' " aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary searchBtn" type="button" id="searchBtn">
                                Search
                            </button>
                        </div>
                    </form> -->
                    <!-- <ul class="navbar-nav ms-auto">
                        Become a Buyer
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        Become a Seller
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        About
                    </ul> -->

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                        <li class="nav-item">
                            <a class="nav-link px-4 mx-2" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4 mx-2" href="/browse">Browse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4 mx-2" href="/about">About</a>
                        </li>
                        @if (Route::has('login'))
                        <li class="nav-item">
                            <a class="btn btn-outline-warning px-4 mx-2 btnNav" href="{{ url('/authentication/signIn') }}">{{ __('Sign In') }}</a>
                        </li>
                        @endif

                        @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="btn btn-warning px-4 mx-2 btnNav" href="{{ url('/authentication/signUp') }}">{{ __('Sign Up') }}</a>
                        </li>
                        @endif
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ JWTAuth::user()->username }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav> --}}

        <main class="p-0 m-0">
            <div id="navbar"></div>
        </main>
        <main class="p-0 m-0">
            <div id="root"></div>
        </main>

        <!-- <footer class="py-4">
            <div id="foot"></div>
        </footer> -->
    </div>

    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/serviceworker.js')
                    .then((reg) => console.log('Success: ', reg.scope))
                    .catch((err) => console.log('Failure: ', err));
            })
        }
    </script>
</body>

</html>
