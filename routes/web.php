<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Artisan;


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

// Route::get('/', function () {
//     return view('welcome')->name('home');
// });

Route::get('/config-cache', function() {
     $exitCode = Artisan::call('config:cache');
    // $exitCodes = Artisan::call('route:cache');
     return 'Config cache cleared';
 });

Route::get('/', [DashboardController::class, 'index'])->name('welcome');
Route::post('/send', [DashboardController::class, 'mail'])->name('email');
Route::post('/newsletter', [DashboardController::class, 'newsletter'])->name('newsletter');

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
