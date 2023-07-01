<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Awalnya menggunakan looping
        // for ($i=0; $i < 10; $i++) { 
        //     DB::table('news') -> insert([
        //         'title' => fake()->title(),
        //         'description' => fake()->paragraph(2, true),
        //         'category' => fake()->sentence(),
        //         'author' => fake()->email()
        //     ]);
        // }


        // Menggunakan Factory Method sebanyak 10 data pada count
        News::factory() ->count(10) ->create();
    }
}
