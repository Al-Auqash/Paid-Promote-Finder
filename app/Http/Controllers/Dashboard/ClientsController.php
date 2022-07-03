<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    public function index()
    {
        $client = Client::select('*')->paginate(10);

        return view('client.index', [
            'client' => $client
        ]);
    }

    public function create()
    {

        $client = Client::select('*')->paginate(10);
        return view('table.index', [
            'client' => $client
        ]);
    }

    // public function create()
    // {
    //     return view('client.create');
    // }

    public function store(Request $request)
    {

        $client = Client::create([
            // 'category_id' => $category_id,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        if ($client) {
            return redirect()->route('client.index');
        }
    }

    public function edit(Client $client)
    {
        return view('client.edit', [
            'client' => $client
        ]);
    }

    public function update(Request $request, Client $client)
    {
        $data = $request->all();

        if ($client->update($data)) {
            return redirect()->route('client.index');
        }
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return redirect()->route('client.index');
    }
}
