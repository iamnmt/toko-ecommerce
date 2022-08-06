import Link from "next/link"

function Navbar() {
  return (
  <header className="bg-light_blue text-white">
    <div className="w-[1270px] mx-12">
      <div className="flex items-center py-3.5">
        <p className="w-[180px] text-4xl font-bold"><Link href="/">Toko</Link></p>
        <div className="w-[750px] flex shadow">
          <input className="flex-1 px-4 py-2 text-black outline-0 rounded-l-sm" type="text" placeholder="Search for books..." />
          <button className="bg-dark_blue flex items-center font-medium px-4 rounded-r-sm">
            <img className="w-5 h-5 mr-1" src="/images/search-icon.png"/>
            Search
          </button>
        </div>
        <div className="flex flex-1 justify-around items-center">
          <div className="flex items-center">
            <img className="w-8 h-8 mr-1" src="/images/account-icon.png"/>
            <div className="text-sm">
              <p>Sign in / Sign up</p>
              <p>Account</p>
            </div>
          </div>
          <div className="flex items-baseline text-lg">
            <div className="relative">
              <img className="w-8 h-8 mr-1" src="/images/cart-icon.png"/>
              <span className="absolute -right-1 -top-1 rounded-full w-4 h-4 
                              text-center text-black text-xs bg-[#fdd835] font-bold">
                              0</span>
            </div>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
