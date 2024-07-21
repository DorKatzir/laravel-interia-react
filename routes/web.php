<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', ['name' => 'Dror K']);
});

// Route::inertia('/', 'Home');


