import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
  // console.log(meta)
  const prev = meta.links[0].url;
  const next = meta.links[meta.links.length - 1].url;
  const current = meta.current_page;
  
  
  return (
    <div class="join">
      {prev && <Link href={prev} class="join-item btn">«</Link> }
      
      <Link class="join-item btn">Page {current}</Link>

      {next && <Link href={next} class="join-item btn">»</Link> }
    </div>
  );
};

export default Paginator;
