<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(1);
    return Inertia::render('Home', ['name' => 'Dror K']);
});

// Route::inertia('/', 'Home');


