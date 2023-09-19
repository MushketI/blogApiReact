<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PostsController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//setting
Route::get('/getUserAll', [RoleController::class, 'getUserAll']);
Route::post('/setRoleUser/{id}', [RoleController::class, 'setRoleUser'])->middleware('roleCheck');

//posts
Route::post('/createdPost', [PostsController::class, 'create']);
Route::get('/getPosts', [PostsController::class, 'getPosts']);
Route::get('/getUserPosts', [PostsController::class, 'getUserPosts']);
Route::post('/setPostActive/{id}', [PostsController::class, 'setPostActive']);
Route::post('/setPostEdit/{id}', [PostsController::class, 'setPostEdit']);
Route::post('/postDelete/{id}', [PostsController::class, 'postDelete']);

