<?php

use App\Http\Controllers\authenticationController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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



// Public Routes
Route::get('items', [ItemController::class, 'index']);
Route::post('apiRegister', [authenticationController::class, 'api_register']);
Route::post('apiLogin', [authenticationController::class, 'api_login']);



//Protected Routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('apiLogout', [authenticationController::class, 'api_logout']);
});
