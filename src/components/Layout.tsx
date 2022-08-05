import Navbar from './Navbar'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Breadcrumb/>
      <main>{children}</main>
      <Footer />
    </>
  )
}
