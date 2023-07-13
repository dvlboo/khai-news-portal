import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Homepage(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        // Membuat data dengan objek
        const data = {
        id: props.myNews.id , title, description, category
        }

        // Inertia untuk hit ke belakang
        Inertia.post('/news/update', data) // => dipost kemana dan datanya apa

        setTitle('');
        setDescription('');
        setCategory('');
    }
    return (
        <div className="min-h-screen bg-slate-400 text-white">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/* Passing Data User */}

            <div className="bg-black overflow-hidden shadow-sm sm:lg">
                <div className="p-6 text-white"> Upload Your News</div>

                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text ml-4 mr-4">Judul Berita</span>
                </label>
                <input type="text" placeholder="Masukkan Judul Berita" className="input input-bordered input-primary w-full max-w-xs ml-4 mr-4"
                    onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title}/>
                    {/* onChange={(title) => setTitle(title.target.value)} => Menangkap Inputan dari user */}
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text ml-4 mr-4">Deskripsi Berita </span>
                </label>
                <input type="text" placeholder="Masukkan Deskripsi Berita" className="input input-bordered input-primary w-full max-w-xs ml-4 mr-4"
                    onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description}/>
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text ml-4 mr-4">Kategori Berita </span>
                </label>
                <input type="text" placeholder="Masukkan Kategori Berita" className="input input-bordered input-primary w-full max-w-xs ml-4 mr-4"
                    onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category}/>
                </div>
                <button className="btn btn-outline btn-primary m-4" onClick={() => handleSubmit()}> 
                Update News 
                </button>
            </div>
        </div>
    );
}
