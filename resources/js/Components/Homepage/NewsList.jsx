// Function Passing Data
const isNews = (news) => {
  return news.map((data, i)=> {
    return (
      <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure><img src="https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" alt="Mbak-Mbak" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{data.category}</div> 
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>

      // Pemanggilan Awal
      // <>
      //   <div>{data.title}</div>
      //   <div>{data.description}</div>
      //   <div>{data.category}</div>
      //   <div>{data.author}</div>
      // </>
    )
  })
}

const noNews = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Tidak Ada Berita Yang Tersedia Sekarang
    </div>
  )
}

const NewsList = ({news}) => { // Passing data News pada NewsList 
  // console.log('child component from Homepage.jsx : ', news)
  
  // Membuat Validasi Data
  return !news ? noNews() : isNews(news) 
  // => Jika news tidak tersedia, maka menampilkan function noNews, Namun jika news ada maka menampilakan function isNews
}

export default NewsList