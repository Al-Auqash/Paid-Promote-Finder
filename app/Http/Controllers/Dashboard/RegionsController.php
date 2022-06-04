<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Region;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegionRequest;

class RegionsController extends Controller
{

    function index()
    {
        $region = Region::paginate(10);
        return view('dashboard.regions.index', [
            'region' => $region
        ]);
    }

    public function create()
    {
        return view('dashboard.regions.create');
    }

    public function store(RegionRequest $request)
    {
        Region::create([
            'region' => $request->region,
        ]);

        return redirect()->route('dashboard.regions.index');
    }

    public function edit(Region $region)
    {
        return view('regions.edit', [
            'item' => $region
        ]);
    }

    public function update(Request $request, Region $region)
    {
        $data = $request->all();

        // if ($request->file('profile_photo_paths')) {
        //     $data['profile_photo_path'] = $request->file('profile_photo_path')->store('assets/region', 'public');
        // }

        $region->update($data);

        return redirect()->route('dashboard.regions.index');
    }

    public function destroy(Region $region)
    {
        $region->delete();

        return redirect()->route('dashboard.regions.index');
    }
}
