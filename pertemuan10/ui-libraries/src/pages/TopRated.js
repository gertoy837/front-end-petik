import React from 'react'
import TableComponent from '../components/Table'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'

const TopRated = () => {
  return (
    <div>
        <NavbarComponent />
        <h1>Top Rated</h1>
        <TableComponent />
        <Footer />
    </div>
  )
}

export default TopRated