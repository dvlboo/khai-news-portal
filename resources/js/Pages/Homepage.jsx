import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
  console.log(props)
  return (
    <div className='flex-row justify-center items-center min-h-screen bg-slate-400 text-white' >
      <Head title = {props.title} />
      <p>{props.description}</p>
      {props.news ? props.news.map((data, i) => {
        return (
          <div key={i} className="p-4 m-2 bg-white text-black shadow-md rounded-md">
            <p className="text-2xl"> {data.title}</p>
            <p className="text-sm">{data.description}</p>
            <i>{data.category}</i>
            <i>{data.author}</i>
          </div>
        )
      }): <p>Belum Ada Data Berita</p> }
    </div>
  )
}