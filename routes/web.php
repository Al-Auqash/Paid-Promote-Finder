<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('/layouts/app');
});

Route::get('/browse', function () {
    return view('/layouts/app');
});

Route::get('/authentication/signIn', function () {
    return view('/layouts/app');
});

Route::get('/authentication/signUp', function () {
    return view('/layouts/app');
});

// Route::get('{path}', function () {
//     return view('/layouts/app');
// });

// Route::get('/main/how-to', function () {
//     return view('/layouts/app');
// });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
