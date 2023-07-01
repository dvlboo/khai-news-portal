import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    // console.log('props :', props);
    return (
        <div className="min-h-screen bg-slate-400 text-white">
            <Head title={props.title} />
            <Navbar />
            <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 m-4">
                <NewsList news={props.news.data}/>
                {/* Passing Data News */}
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
