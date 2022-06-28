<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Dashboard\AdsController;
use App\Http\Controllers\Dashboard\RegionsController;
use App\Http\Controllers\auth\LoginController;
use App\Http\Controllers\auth\RegisterClientController;
use App\Http\Controllers\Dashboard\CategoriesController;

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


// Route::get('/browse', [AdsController::class, 'client']);
Route::get('/browse', [AdsController::class, 'client']);
Route::get('/browse/region', [RegionsController::class, 'client']);
Route::get('/browse/category', [CategoriesController::class, 'client']);
Route::get('/browse/result', [AdsController::class, 'result']);
Route::get('/browse/your-ads', [AdsController::class, 'yourAds']);
Route::post('/browse/create-ads', [AdsController::class, 'createAds']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});