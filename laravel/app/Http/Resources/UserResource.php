<?php

namespace App\Http\Resources;

use App\Models\Posts;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $user = User::find($this->id);

        $postCount = Posts::query()->where('user_id', $user->id)->count();

        return [
          'id' => $this->id,
          'name' => $this->name,
          'email' => $this->email,
          'role_id' => $this->role_id,
          'countPosts' => $postCount,
        ];
    }
}
