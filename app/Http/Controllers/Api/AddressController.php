<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddressRequest;
use App\Http\Resources\AddressResource;
use App\Models\Address;
use App\Models\Client;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index($id)
    {
        return AddressResource::collection(Client::find($id)->addresses);
    }

    public function store($id, AddressRequest $request)
    {
        $address = Client::find($id)->addresses()->firstOrCreate($request->validated());

        return new AddressResource($address);
    }

    public function show($id)
    {
        return new AddressResource(Address::find($id));
    }

    public function update(AddressRequest $request, $id)
    {
        $address = Address::find($id);
        $address->update($request->validated());

        return new AddressResource($address);
    }

    public function destroy($id)
    {
        $address = Address::find($id);
        $address->delete();
        return response()->noContent();
    }
}
