<?php

namespace App\Http\Controllers;

use App\Models\Counter;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class Controller extends BaseController
{

    protected function getCounter()
    {
        $counters = Counter::first();
   
        if (Auth::check()) {
            return response()->json([
                'guestcounter' => $counters->guestcounter,
                'usercounter' => $counters->usercounter
            ]);
        }

        return response()->json([
            'guestcounter' => $counters->guestcounter,
        ]);
    }


    protected function updateCounter(Request $request)
    {
        $counter = Counter::find(1);
        $counter->guestcounter = $request->guestcounter;

        if (Auth::check()) {
            $counter->usercounter = $request->usercounter;
        }
        
        $counter->save();
   
        if (Auth::check()) {
            return response()->json([
                'guestcounter' => $counter->guestcounter,
                'usercounter' => $counter->usercounter
            ]);
        }

        return response()->json([
            'guestcounter' => $counter->guestcounter,
        ]);
    }
}
