<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Ads;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Region;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdsController extends Controller
{
    public function index()
    {
        $ads = DB::table('ads')
            ->join('regions', 'ads.region_id', '=', 'regions.id')
            ->join('categories', 'ads.category_id', '=', 'categories.id')
            ->join('statuses', 'ads.status_id', '=', 'statuses.id')
            ->join('clients', 'ads.created_by', '=', 'clients.id')
            ->select('ads.*', 'categories.category_name', 'regions.region_name',  'statuses.status_name', 'clients.username')
            ->get();

        return view('ads.index', [
            'ads' => $ads
        ]);
    }

    public function client(Request $request)
    {
        $keyword = $request->keyword;
        $region_id = $request->region_id;
        // $keyword = 'anniversary';

        $ads = Ads::join('categories', 'ads.category_id', '=', 'categories.id')
            ->select('ads.*', 'categories.category_name')
            ->where('title', 'LIKE', '%' . $keyword . '%')
            ->where('region_id', 'LIKE', '%' . $region_id . '%')
            ->get();

        return $ads->toJson();
    }

    public function result(Request $request)
    {
        $id = $request->id;

        $ads = DB::table('ads')
            ->join('regions', 'ads.region_id', '=', 'regions.id')
            ->join('categories', 'ads.category_id', '=', 'categories.id')
            ->select('ads.*', 'categories.category_name', 'regions.region_name')
            ->where('ads.id', '=', $id)
            ->get();

        return $ads->toJson();
    }

    public function yourAds(Request $request)
    {
        $id = $request->user_id;

        $ads = DB::table('ads')
            ->join('regions', 'ads.region_id', '=', 'regions.id')
            ->join('categories', 'ads.category_id', '=', 'categories.id')
            ->select('ads.*', 'categories.category_name', 'regions.region_name')
            ->where('ads.created_by', '=', $id)
            ->get();

        return $ads->toJson();
    }

    public function createAds(Request $request)
    {
        // $start_date = strtotime(20220615);
        // $new_start_date = date('Y-m-d', $start_date);
        // $finish_date = strtotime(20220615);
        // $new_finish_date = date('Y-m-d', $finish_date);

        // $datee = 20220605;
        $ads = Ads::create([
            // 'category_id' => $category_id,
            'title' => $request->title,
            'category_id' => $request->category_id,
            'region_id' => $request->region_id,
            'status_id' => 1,
            'start_date' => $request->start_date,
            'finish_date' => $request->finish_date,
            'description' => $request->description,
            'image_path' => $request->image_path,
            'created_by' => $request->user_id,
        ]);

        if ($ads) {
            return response()->json([
                'success' => true,
            ], 201);
        }
    }

    public function editAds(Request $request)
    {
        $id = $request->id;

        $ads = DB::table('ads')
            ->join('regions', 'ads.region_id', '=', 'regions.id')
            ->join('categories', 'ads.category_id', '=', 'categories.id')
            ->select('ads.*', 'categories.category_name', 'regions.region_name')
            ->where('ads.id', '=', $id)
            ->first();

        return $ads->toJson();
    }

    public function updateAds(Request $request, Ads $ads)
    {
        
        $data = $request->all();

        if ($ads->update($data)) {
            return response()->json([
                'success' => true,
            ]);
        }
    }

    public function DeleteAds(Request $request)
    {
        $id = $request->id;

        $deleted = Ads::where('id', '=', $id)->delete();

        if ($deleted) {
            return response()->json([
                'success' => true,
            ]);
        } else {
            return response()->json([
                'failed' => true,
                'id' => $id,
            ]);
        }
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

    public function edit(Ads $ad)
    {
        $categories = Category::select('*')->paginate(10);
        $regions = Region::select('*')->paginate(10);
        $statuses = Status::select('*')->paginate(10);

        return view('ads.edit', [
            'ads' => $ad,
            'categories' => $categories,
            'regions' => $regions,
            'statuses' => $statuses,
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
