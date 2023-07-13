import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard( props ) {
  console.log('isProps?', props);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [isNotif, setIsNotif] = useState(false);

  const handleSubmit = () => {
    // Membuat data dengan objek
    const data = {
      title, description, category
    }

    // Inertia untuk hit ke belakang
    Inertia.post('/news', data) // => dipost kemana dan datanya apa

    setIsNotif(true)
    setTitle('');
    setDescription('');
    setCategory('');
    
  }

  // Render data dari show
  useEffect(() => {
    if (!props.myNews) {
      Inertia.get('/news')
    }
    // console.log('ismyNews?', props)
    return;
  }, [] )

  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight"> Dashboard </h2> 
      }>
      <Head title="Dashboard" />
      <div className='min-h-screen bg-grey-100 text-white'>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-white"> Upload Your News</div>
            {isNotif && 
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{props.flash.message}</span>
              </div>
            }

            <div className="form-control w-full max-w-xs">
              <label className="label">
                  <span className="label-text ml-4 mr-4">Judul Berita</span>
              </label>
              <input type="text" placeholder="Masukkan Judul Berita" className="input input-bordered input-primary w-full max-w-xs ml-4 mr-4"
                onChange={(title) => setTitle(title.target.value)} />
                {/* onChange={(title) => setTitle(title.target.value)} => Menangkap Inputan dari user */}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                  <span className="label-text ml-4 mr-4">Deskripsi Berita </span>
              </label>
              <input type="text" placeholder="Masukkan Deskripsi Berita" className="input input-bordered input-primary w-full max-w-xs ml-4 mr-4"
                onChange={(description) => setDescription(description.target.value)}/>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                  <span className="label-text ml-4 mr-4">Kategori Berita </span>
              </label>
              <input type="text" placeholder="Masukkan Kategori Berita" className="input input-bordered input-primary w-full max-w-xs ml-4 mr-4"
                onChange={(category) => setCategory(category.target.value)}/>
            </div>
            <button className="btn btn-outline btn-primary m-4" onClick={() => handleSubmit()}> 
              Post News 
            </button>
          </div>
          <div className="text-black m-4">
            <p>
              Berita Saya
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full p-2 mt-2">
            {props.myNews && props.myNews.length > 0 ? props.myNews.map((news, i) => {
              return (
                <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {news.title}
                    </h2>
                    <p>{news.description}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-inline">{news.category}</div>
                      <div className="badge badge-outline">
                        <Link href={route("edit.news")} method="get" data={{id:news.id}} as="button" > Edit </Link>
                      </div>
                      <div className="badge badge-outline">
                      <Link href={route("delete.news")} method="post" data={{id:news.id}} as="button" > Delete </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : 
              <div className="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Anda Belum Upload Berita Apapun</span>
              </div>
            }

          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}