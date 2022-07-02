<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'http://localhost:8000/authentication/signIn',
        'http://localhost:8000/authentication/signUp',
        'http://localhost:8000/authentication/signOut',
        'http://localhost:8000/api/browse/create-ads',
        'http://localhost:8000/api/browse/edit-your-ads',
        'http://localhost:8000/api/browse/delete-your-ads',
        'http://localhost:8000/api/browse/delete-your-ads?{id}',
    ];
}
