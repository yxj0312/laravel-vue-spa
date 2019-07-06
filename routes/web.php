<?php

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

// If we are making a spa, we need to say, on the laravel route sense response to anything at all
// we gonna let our javascript handel the accurate routing.

// {any?} response to anything or nothing
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');


Route::post('confirmation-button', function () {
    return 'Form submitted';
});