<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Dashboard\UsersController;
use App\Http\Controllers\Dashboard\ClientsController;
use App\Http\Controllers\Dashboard\AdsController;
use App\Http\Controllers\Dashboard\RegionsController;
use App\Http\Controllers\Dashboard\StatusesController;
use App\Http\Controllers\Dashboard\CategoriesController;
use App\Http\Controllers\Dashboard\FlowsController;

use App\Http\Controllers\auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\auth\RegisterClientController;

use App\Http\Controllers\InfoUserController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\SessionsController;

Route::get('/', function () {
    return view('/layouts/app2');
});
Route::get('/token', function () {
    return csrf_token();
});

Route::prefix('browse')->group(function () {
    Route::get('/', [AdsController::class, 'client']);
    Route::get('/', function () {
        return view('/layouts/app2');
    });
    Route::get('/result/{id}', function () {
        return view('/layouts/app2');
    });
    Route::get('/your-ads', function () {
        return view('/layouts/app2');
    });
    Route::get('/create-your-ads', function () {
        return view('/layouts/app2');
    });
    Route::get('/edit-your-ads/{id}', function () {
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
    Route::post('/signIn', [LoginController::class, '__invoke']);
    Route::post('/signUp', [RegisterClientController::class, '__invoke']);
    Route::post('/signOut', [LogoutController::class, '__invoke']);
});


Route::prefix('dashboard')
    ->middleware(['auth:admin', "verified"])
    ->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        Route::get('billing', function () {
            return view('billing');
        })->name('billing');

        Route::get('profile', function () {
            return view('profile');
        })->name('profile');

        Route::get('user-management', function () {
            return view('laravel-examples/user-management');
        })->name('user-management');

        Route::resource('user', UsersController::class);
        Route::post('user/store', [UsersController::class, 'store'])->name('user-store');

        Route::resource('client', ClientsController::class);
        Route::post('client/store', [ClientsController::class, 'store'])->name('client-store');

        // Route::resource('client-data-table', ClientsController::class);
        // Route::post('client-data-table/store', [ClientsController::class, 'store'])->name('client-store');

        Route::resource('category', CategoriesController::class);
        Route::post('category/store', [CategoriesController::class, 'store'])->name('category-store');

        Route::resource('region', RegionsController::class);
        Route::post('region/store', [RegionsController::class, 'store'])->name('region-store');

        Route::resource('status', StatusesController::class);
        Route::post('status/store', [StatusesController::class, 'store'])->name('status-store');

        Route::resource('flow', FlowsController::class);
        Route::post('flow/store', [FlowsController::class, 'store'])->name('flow-store');

        Route::resource('ad', AdsController::class);
        Route::post('ad/store', [AdsController::class, 'store'])->name('ads-store');

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
        Route::get('/user-profile', [InfoUserController::class, 'create'])->name('user-profile');
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

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
