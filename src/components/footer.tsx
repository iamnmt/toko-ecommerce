import Link from "next/link"

function Footer() {
  return (
    <footer className="">
      <div className="w-[1270px] mx-auto grid grid-cols-3 gap-4 py-4">
        <div className="text-center ">
          <p className="text-5xl font-bold py-2">Toko</p>
          <p>© 2022 Copyright Toko Inc.</p>
          <p>All Right Reserved.</p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-2">Information</p>
          <div className="flex text-xl">
            <div className="grow flex flex-col gap-2">
              <div>
                <Link href="/">
                  <a className="hover:text-dark_blue cursor-pointer">
                    About Us
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/">
                  <a className="hover:text-dark_blue cursor-pointer">
                    Contact Us
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/">
                  <a className="hover:text-dark_blue cursor-pointer">
                    Blog
                  </a>
                </Link>
              </div>
            </div>
            <div className="grow flex flex-col gap-2">
              <div>
                <Link href="/">
                  <a className="hover:text-dark_blue cursor-pointer">
                    Privacy
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="hover:text-dark_blue cursor-pointer">
                    Careers
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="hover:text-dark_blue cursor-pointer">
                    Conditions of Use
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold mb-2">Custumer Support</p>
          <div className="text-xl flex flex-col gap-2">
            <p>Hotline: 0000-0000</p>
            <p>Email: custumer.support@toko.com</p>
              <div>
                <Link href="/"> 
                  <a className="hover:text-dark_blue cursor-pointer">
                    FAQ
                  </a>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
