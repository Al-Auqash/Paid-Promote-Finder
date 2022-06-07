<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        $user = User::select('*')->paginate(10);

        return view('user.index', [
            'user' => $user
        ]);
    }

    public function create()
    {
        return view('user.create');
    }

    public function store(Request $request)
    {

        $user = User::create([
            // 'category_id' => $category_id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        if ($user) {
            return redirect()->route('user.index');
        }
    }

    public function edit(User $user)
    {
        return view('user.edit', [
            'user' => $user
        ]);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->all();

        if ($user->update($data)) {
            return redirect()->route('user.index');
        }
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('user.index');
    }
}
