<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TournamentRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'team_id' => ['required'],
            'game_id' => ['required'],
            'region_id' => ['required'],
            'date' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'max:255'],
            'prize' => ['required', 'string', 'max:255'],
        ];
    }
}
