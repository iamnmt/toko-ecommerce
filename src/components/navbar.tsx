import Link from "next/link"

function Navbar() {
  return (
  <header className="bg-light_blue text-white">
    <div className="w-[1270px] mx-12">
      <div className="flex items-center py-3.5">
        <p className="w-[180px] text-4xl font-bold"><Link href="/">Toko</Link></p>
        <div className="w-[750px] flex shadow">
          <input className="flex-1 px-4 py-2 text-black outline-0 rounded-l-sm" type="text" placeholder="Search for books..." />
          <button className="bg-[#0d5cb6] flex items-center font-medium px-4">
            <img className="w-5 h-5 mr-1 rounded-r-sm" src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"/>
            Search
          </button>
        </div>
        <div className="flex flex-1 justify-around items-center">
          <div className="flex items-center">
            <img className="w-8 h-8 mr-1" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"/>
            <div className="text-sm">
              <p>Sign in / Sign up</p>
              <p>Account</p>
            </div>
          </div>
          <div className="flex items-baseline text-lg">
            <div className="relative">
              <img className="w-8 h-8 mr-1" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"/>
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
