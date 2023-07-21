import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Search from './pages/Search'

const App = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/productDetails'>Product Details</Link>
      <Link to='/search'>Search</Link>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
