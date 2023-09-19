<?php

namespace App\Http\Resources;

use App\Models\Posts;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //Найти имя пользователя
        $userName = User::find($this->user_id);

        return [
            'title' => $this->title,
            'content' => $this->content,
            'author' => $userName->name,
            'active' => $this->active,
            'published_at' => $this->published_at->format('d.m.Y'),
        ];
    }
}
