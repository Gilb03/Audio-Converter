import Layout from '../components/layout'
import Header from '../components/header'
import Tagline from '../components/tagline'
import SubmitForm from '../components/submit'
// import App from '../src/App'
import Footer from '../components/footer'
import Navbar from '../components/navbar'


export default () => (
  <Layout>
    <Navbar />
    <Header />
    <Tagline />
    <SubmitForm/>
    {/*<App/>*/}
    <Footer />
  </Layout>
)
