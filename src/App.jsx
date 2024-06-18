import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <div className="appDiv" class="bg-gray-900">
        <Navbar />
        <Banner />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App;