import Layout from '../components/layout'
import Header from '../components/header'
import Tagline from '../components/tagline'
import Footer from '../components/footer'
import About from '../components/about'
import Navbar from '../components/navbar'
// import Convert from './convert'
import SubmitForm from '../components/submit'


export default () => (
  <Layout>
    <Navbar />
    <Header />
    <Tagline />
    <SubmitForm/>
    <About/>
   {/*<Convert/>*/}
    <Footer />
  </Layout>
)
