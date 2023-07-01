<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Database\Seeders\NewsSeeder;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


// Settingan Fetching Data => User yang membuka Homepage akan diarahkan ke NewsController dengan action index
Route::get('/', [NewsController::class, 'index']);

// Settingan Awal Homepage

// Route::get('/', function() {
//     return Inertia::render('Homepage', [
//         'title' => 'Portal Berita Khai',
//         'description' => 'Selamat Datang di Portal Berita Khai'
//     ]);
// });

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); // Merender nilai dengan 4 data dari page welcome


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';