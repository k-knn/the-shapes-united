<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceTagController extends Controller
{
     // get all price tags
    public function index()
    {
        try {
            $priceTags = PriceTags::all();
            return response()->json([
                'priceTags' => $priceTags, 
            ], 200);
        } catch (\Exception $e) {
           return response()->json([
               'error' => 'Unable to retrieve price tags: ' . $e->getMessage()
           ], 500);
        }

       
    }

    public function show($id)
    {
        $priceTag = PriceTags::find($id);

        if (!$priceTag) {
            return response()->json(['message' => 'Price tag not found'], 404);
        }

        return response()->json(['priceTag' => $priceTag], 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);

        $priceTag = PriceTags::create([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
        ]);

        return response()->json(['priceTag' => $priceTag], 201);
    }

    public function update(Request $request, $id)
    {
        $priceTag = PriceTags::find($id);

        if (!$priceTag) {
            return response()->json(['message' => 'Price tag not found'], 404);
        }

        $this->validate($request, [
            'name' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);

        $priceTag->update([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
        ]);

        return response()->json(['priceTag' => $priceTag], 200);
    }

    public function destroy($id)
    {
        $priceTag = PriceTags::find($id);

        if (!$priceTag) {
            return response()->json(['message' => 'Price tag not found'], 404);
        }

        $priceTag->delete();

        return response()->json(['message' => 'Price tag deleted'], 200);
    }
}
