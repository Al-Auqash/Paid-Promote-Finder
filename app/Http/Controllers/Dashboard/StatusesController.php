<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Status;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatusesController extends Controller
{
    public function index()
    {
        $status = Status::select('*')->paginate(10);

        return view('status.index', [
            'status' => $status
        ]);
    }

    public function client()
    {
        // $status = DB::table('status')->get();
        $status = Status::select('*')->get();
        // dd($status->toJson());
        return $status->toJson();
    }

    public function create()
    {
        return view('status.create');
    }

    public function store(Request $request)
    {
        $status = Status::create([
            // 'category_id' => $category_id,
            'code' => $request->code,
            'status_name' => $request->status,
        ]);

        if ($status) {
            return redirect()->route('status.index');
        }
    }

    public function edit(Status $status)
    {
        return view('status.edit', [
            'status' => $status
        ]);
    }

    public function update(Request $request, Status $status)
    {
        $data = $request->all();

        if ($status->update($data)) {
            return redirect()->route('status.index');
        }
    }

    public function destroy(Status $status)
    {
        $status->delete();

        return redirect()->route('status.index');
    }
}
