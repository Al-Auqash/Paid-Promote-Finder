<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Dashboard\UsersController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\AdsController;
use App\Http\Controllers\Dashboard\RegionsController;
use App\Http\Controllers\CategoriesController;

use App\Http\Controllers\InfoUserController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\SessionsController;

Route::get('/', function () {
    return view('/layouts/app2');
});

Route::prefix('browse')->group(function () {
    Route::get('/', function () {
        return view('/layouts/app2');
    });
    Route::get('/result', function () {
        return view('/layouts/app2');
    });
});

Route::prefix('authentication')->group(function () {
    Route::get('/signIn', function () {
        return view('/layouts/app2');
    });
    Route::get('/signUp', function () {
        return view('/layouts/app2');
    });
});

Route::prefix('dashboard')
    ->middleware(['auth:sanctum', "verified"])
    ->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        // Route::resource('users', UsersController::class);
        // Route::resource('clients', ClientsController::class);
        // Route::resource('ads', AdsController::class);
        // Route::resource('regions', RegionsController::class);
        // Route::resource('categories', CategoriesController::class);
        // Route::get('dashboard', function () {
        //     return view('dashboard');
        // })->name('dashboard');

        Route::get('billing', function () {
            return view('billing');
        })->name('billing');

        Route::get('profile', function () {
            return view('profile');
        })->name('profile');

        Route::get('rtl', function () {
            return view('rtl');
        })->name('rtl');

        Route::get('user-management', function () {
            return view('laravel-examples/user-management');
        })->name('user-management');

        Route::get('tables', function () {
            return view('tables');
        })->name('tables');

        Route::get('virtual-reality', function () {
            return view('virtual-reality');
        })->name('virtual-reality');

        Route::get('static-sign-in', function () {
            return view('static-sign-in');
        })->name('sign-in');

        Route::get('static-sign-up', function () {
            return view('static-sign-up');
        })->name('sign-up');

        Route::get('/logout', [SessionsController::class, 'destroy']);
        Route::get('/user-profile', [InfoUserController::class, 'create']);
        Route::post('/user-profile', [InfoUserController::class, 'store']);
        Route::get('/login', function () {
            return view('dashboard');
        })->name('sign-up');
    });


Route::prefix('dashboard')->group(function () {
        Route::get('/register', [RegisterController::class, 'create']);
        Route::post('/register', [RegisterController::class, 'store']);
        Route::get('/login', [SessionsController::class, 'create']);
        Route::post('/session', [SessionsController::class, 'store']);
        Route::get('/login/forgot-password', [ResetController::class, 'create']);
        Route::post('/forgot-password', [ResetController::class, 'sendEmail']);
        Route::get('/reset-password/{token}', [ResetController::class, 'resetPass'])->name('password.reset');
        Route::post('/reset-password', [ChangePasswordController::class, 'changePassword'])->name('password.update');
    });

Route::get('/dashboard/login', function () {
    return view('session/login-session');
})->name('login');


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

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
