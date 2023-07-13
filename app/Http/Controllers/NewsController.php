<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use Inertia\Inertia;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id') ->paginate(8));  // Pagenation -> (menampilkan data di depan berdasarkan jumlah parameter)

        // $news = News::all(); // menampilkan semua data dari database
        // dd($news); // fungsi dydump
        return Inertia::render ('Homepage', [
            'title' => 'Portal Berita Khai',
            'description' => 'Selamat Datang di Khai News Portal',
            'news' => $news
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Insert ke table News dengan data title, description, category, dan author

        $news = new News();
        $news->title = $request->title; 
        $news->description = $request->description; 
        $news->category = $request->category; 
        $news->author = auth()->user()->email; 
        $news->save();
        return redirect()->back()->with('message', 'Berita telah di Upload!'); // Penggunaan notification global
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews = $news::where('author', auth()->user()->email)->get();
        // dd($myNews);
        return Inertia::render ('Dashboard', [
            'myNews' => $myNews
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    
    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews' => $news-> find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request )
    {
        News::where('id', $request->id)-> update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category
        ]);
        return to_route('dashboard'); // -> with('message', 'Berita Telah di Update!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'Berita telah di Delete!');
    }
}
