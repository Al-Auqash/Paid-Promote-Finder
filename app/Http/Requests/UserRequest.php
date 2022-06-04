<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Actions\Fortify\PasswordValidationRules;

class UserRequest extends FormRequest
{

    use PasswordValidationRules;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
        ];
    }
}
