<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Ads;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdsController extends Controller
{
    public function index()
    {
        $ads = Ads::select('*')->paginate(10);

        return view('ads.index', [
            'ads' => $ads
        ]);
    }

    public function create()
    {
        // $ads = DB::table('ads')
        //     ->join('categories', 'ads.category_id', '=', 'categories.id')
        //     ->join('regions', 'ads.region_id', '=', 'regions.id')
        //     ->select('ads.*', 'categories.*', 'regions.*')
        //     ->where('tournaments.status', '=', 'ON GOING')
        //     ->get();

        $categories = Category::select('*')->paginate(10);
        $regions = Region::select('*')->paginate(10);

        return view('ads.create', [
            'categories' => $categories,
            'regions' => $regions
        ]);
    }

    public function store(Request $request)
    {
        $ads = Ads::create([
            // 'category_id' => $category_id,
            'title' => $request->title,
            'category_id' => $request->category_id,
            'region_id' => $request->region_id,
            'time' => $request->time,
            'created_by' => Auth::id(),
            'description' => $request->description,
            'created_by' => $request->created_by,
        ]);

        if ($ads) {
            return redirect()->route('ads.index');
        }
    }

    public function edit(Ads $ads)
    {
        return view('ads.edit', [
            'ads' => $ads
        ]);
    }

    public function update(Request $request, Ads $ads)
    {
        $data = $request->all();

        if ($ads->update($data)) {
            return redirect()->route('ads.index');
        }
    }

    public function destroy(Ads $ads)
    {
        $ads->delete();

        return redirect()->route('ads.index');
    }
}
