import Link from "next/link"
import RatingBar from "./minor/RatingBar"

function Sidebar() {
  return (
    <div className="flex flex-col gap-4 px-3 border-r border-r-gray-200 text-sm">
      <div>
        <p className="text-base font-semibold mb-2">Category</p>
        <ul className="flex flex-col gap-1">
          <li>
            <Link href="/">
              <a className="hover:text-dark_blue cursor-pointer">Fiction - Literature</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-dark_blue cursor-pointer">Science - Technology</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-dark_blue cursor-pointer">History, Politics & Social Sciences</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base font-semibold mb-2">Store Location</p>
        <ul className="text-sm flex flex-col gap-1">
          <li className="flex items-center">
            <input id="hcm" type="checkbox" className="w-4 h-4 rounded"/>
            <label htmlFor="hcm" className="ml-2">
                <a className="hover:text-dark_blue cursor-pointer">Ho Chi Minh</a>
            </label>
          </li>
          <li className="flex items-center">
            <input id="hn" type="checkbox" className="w-4 h-4 rounded"/>
            <label htmlFor="hn" className="ml-2">
                <a className="hover:text-dark_blue cursor-pointer">Ha Noi</a>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base font-semibold mb-2">Avg. Customer Review</p>
        <ul className="text-sm flex flex-col gap-1">
          <li className="flex items-center">
            <a className="hover:text-dark_blue cursor-pointer flex items-center">
              <RatingBar activeCount={5} size={16}/>
              <span className="ml-1">& Up</span>
            </a>
          </li>
          <li className="flex items-center">
            <a className="hover:text-dark_blue cursor-pointer flex items-center">
                <RatingBar activeCount={4} size={16}/>
                <span className="ml-1">& Up</span>
            </a>
          </li>
          <li className="flex items-center">
            <a className="hover:text-dark_blue cursor-pointer flex items-center">
              <RatingBar activeCount={3} size={16}/>
              <span className="ml-1">& Up</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default Sidebar
