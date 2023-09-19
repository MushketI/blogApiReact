<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\Models\Posts;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostsController extends Controller
{
    public function create(Request $request) {

        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'content' => 'required|string|max:200',
            'active' => 'required',
        ]);

        if($validate->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validate->errors()
            ], 401);
        }

        $user = Auth::user();

        if(!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized'
            ], 401);
        }

        Posts::create([
            'user_id' => $user->id,
            'title' => $request->title,
            'content' => $request->content,
            'active' => $request->active,
            'published_at' => now()
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Post created',
        ], 201);

    }

    public function getPosts() {

        return new PostCollection(Posts::query()->where('active', '=', 1)->get());

    }

    public function getUserPosts() {

        $user = Auth::user();

        if(!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized'
            ], 401);
        }

        return Posts::query()->where('user_id', $user->id)->get();

    }

    public function setPostActive(Request $request, $id) {

        $post = Posts::query()->findOrFail($id);
        $post->active = $request->active;

        if($request->active) {
           $post->published_at = now();
        }

        $post->save();

        return response()->json([
            'status' => true,
            'message' => 'Success'
        ], 201);
    }

    public function setPostEdit(Request $request, $id) {

        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'content' => 'required|string|max:200',
        ]);

        if($validate->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validate->errors()
            ], 401);
        }

        $post = Posts::query()->findOrFail($id);

        $post->title = $request->title;
        $post->content = $request->content;

        $post->save();

        return response()->json([
            'status' => true,
            'message' => 'Post edited successfully',
        ]);

    }

    public function postDelete($id) {

        $post = Posts::query()->findOrFail($id);

        $post->delete();

        return response()->json([
            'status' => true,
            'message' => 'Post ' . $post->title . ' successfully deleted',
        ], 201);
    }
}
