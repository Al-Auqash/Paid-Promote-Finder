<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Dashboard\UsersController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\AdsController;
use App\Http\Controllers\Dashboard\RegionsController;
use App\Http\Controllers\CategoriesController;

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

Route::prefix('browse')->group(function () {
    Route::get('/', function () {
        return view('/layouts/app');
    });
    Route::get('/result', function () {
        return view('/layouts/app');
    });
});

Route::prefix('authentication')->group(function () {
    Route::get('/signIn', function () {
        return view('/layouts/app');
    });
    Route::get('/signUp', function () {
        return view('/layouts/app');
    });
});

Route::prefix('dashboard')
    ->middleware(['auth:sanctum', "verified"])
    ->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::resource('users', UsersController::class);
        Route::resource('clients', ClientsController::class);
        Route::resource('ads', AdsController::class);
        Route::resource('regions', RegionsController::class);
        Route::resource('categories', CategoriesController::class);
    });

// Route::get('/browse', function () {
//     return view('/layouts/app');
// });

// Route::get('/browse/result', function () {
//     return view('/layouts/app');
// });

// Route::get('/authentication/signIn', function () {
//     return view('/layouts/app');
// });

// Route::get('/authentication/signUp', function () {
//     return view('/layouts/app');
// });

// Route::get('{path}', function () {
//     return view('/layouts/app');
// });

// Route::get('/main/how-to', function () {
//     return view('/layouts/app');
// });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
