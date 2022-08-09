import Navbar from './Navbar'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="bg-light_gray">
        <Breadcrumb/>
        <main>{children}</main>
        <div className="h-6"></div>
      </div>
      <Footer />
    </>
  )
}
