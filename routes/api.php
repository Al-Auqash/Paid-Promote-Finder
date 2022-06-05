<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\auth\LoginController;
use App\Http\Controllers\auth\RegisterClientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('authentication')->group(function () {
    Route::get('/signIn', function () {
        return view('/layouts/app2');
    });
    Route::get('/signUp', function () {
        return view('/layouts/app2');
    });
    Route::post('/signIn', [LoginController::class, '__invoke']);
    Route::post('/signUp', [RegisterClientController::class, 'createClient']);
    Route::post('/signOut', [LogoutController::class]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});