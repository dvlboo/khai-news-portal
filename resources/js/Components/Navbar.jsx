import { Link } from "@inertiajs/react"

const Navbar = ({user}) => {
  // console.log('isUser? : ', user)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Khai News Portal</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        {!user ?
          <>
            <Link href={route('login')} className="p-2 hover:text-blue-500 cursor-pointer" as="button" >Login</Link>
            <Link href={route('register')} className="p-2 hover:text-blue-500 cursor-pointer" as="button" >Register</Link>
          </>

          : 
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link className="justify-between hover:text-blue-500" href={route('dashboard')} as="button">
                  Dashboard
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link className="hover:text-blue-500" >Settings</Link></li>
              <li><Link className="hover:text-blue-500" href={route('logout')} as="button" method="post">Logout</Link></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar