import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
  <div className='container'>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}

export default MyApp
