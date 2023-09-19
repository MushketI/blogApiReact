<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    public function getUserAll() {

        return UserResource::collection(User::all());

    }

    public function setRoleUser(Request $request, $id) {

        $user = User::query()->findOrFail($id);
        $user->role_id = $request->role_id;
        $user->save();

        $auth = Auth::user();

        return response()->json([
            'user' => $auth,

        ], 201);

    }
}
