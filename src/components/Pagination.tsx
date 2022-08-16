function Pagination({ currentPage }:{
  currentPage: number
}) {
  let items = []
  if (currentPage != 1) items.push(
  <li className="pl-2.5 pr-1.5 py-2 mx-2 rounded-full hover:bg-blue-200 cursor-pointer" key={"left-arrow"}>
    <a>
      <div className="border-black border-l-2 border-b-2 p-1 rotate-45"></div>
    </a>
  </li>)

  let start = 0, end = 5
  if (currentPage >= 3) {
    start -= 2
    end -= 2
  }
  for (let i = start; i < end; i++) {
    if (i == 0) 
      items.push(<li className="px-2.5 py-0.5 mx-2 rounded-full text-white bg-light_blue hover:bg-blue-200 cursor-pointer" key={i}><a>{currentPage + i}</a></li>)
    else
      items.push(<li className="px-2.5 py-0.5 mx-2 rounded-full hover:bg-blue-200 cursor-pointer" key={i}><a>{currentPage + i}</a></li>)
  }
  items.push(
  <li className="pr-2.5 pl-1.5 py-2 mx-2 rounded-full hover:bg-blue-200 cursor-pointer" key={"right-arrow"}>
    <a>
      <div className="border-black border-r-2 border-t-2 p-1 rotate-45"></div>
    </a>
  </li>)

  return (
      <ul className="flex justify-end items-center">
        {items}
      </ul>
  )
}

export default Pagination
