import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/Wishlist'
import Contact from './pages/Contact'
import AdminProducts from './pages/AdminProducts'
import AdminInquiries from './pages/AdminInquiries'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product, action = 'add') => {
    if (action === 'add') {
      if (!wishlist.find(item => item._id === product._id)) {
        setWishlist([...wishlist, product])
      }
    } else if (action === 'remove') {
      setWishlist(wishlist.filter(item => item._id !== product._id))
    }
  }

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item._id !== productId))
  }

  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Navbar wishlistCount={wishlist.length} />
        <div className="mt-16">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/products" 
                element={<Products onAddToWishlist={addToWishlist} wishlist={wishlist} />} 
              />
              <Route 
                path="/products/:id" 
                element={
                  <ProductDetails 
                    wishlist={wishlist} 
                    onAddToWishlist={addToWishlist} 
                  />
                } 
              />
              <Route 
                path="/wishlist" 
                element={
                  <Wishlist 
                    wishlist={wishlist} 
                    removeFromWishlist={removeFromWishlist} 
                  />
                } 
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin/products" 
                element={
                  <PrivateRoute>
                    <AdminProducts />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/admin/inquiries" 
                element={
                  <PrivateRoute>
                    <AdminInquiries />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
