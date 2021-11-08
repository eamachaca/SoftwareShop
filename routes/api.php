<?php

use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\AddressController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('clients', ClientController::class);
Route::get('clients/{id}/addresses', [AddressController::class, 'index']);
Route::post('addresses/{id}', [AddressController::class, 'store']);
Route::match(['put', 'patch'],'addresses/{id}', [AddressController::class, 'update']);
Route::get('addresses/{id}', [AddressController::class, 'show']);
