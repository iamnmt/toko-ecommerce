function Sorter() {
  return (
    <div className="text-sm font-medium text-center border-b border-gray-200">
      <ul className="flex flex-wrap px-3">
          <li className="mr-8">
              <a className="inline-block p-2 text-dark_blue rounded-t-lg border-b-4 border-dark_blue active cursor-pointer">Featured</a>
          </li>
          <li className="mr-8">
              <a className="inline-block p-2 rounded-t-lg border-b-4 border-transparent hover:text-dark_blue hover:border-dark_blue cursor-pointer">Top Seller</a>
          </li>
          <li className="mr-8">
              <a className="inline-block p-2 rounded-t-lg border-b-4 border-transparent hover:text-dark_blue hover:border-dark_blue cursor-pointer">Newest</a>
          </li>
      </ul>
    </div>
  )
}

export default Sorter
