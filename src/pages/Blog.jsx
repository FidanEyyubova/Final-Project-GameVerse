import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Blog = () => {
  return (
    <div className='blog'>
      <div className="container-fluid">
      <div className="row" >
          <div
            className="col-12 back-img"
            style={{
              backgroundImage: `url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/most-anticipated-games-2025-gta-6-avowed-like-a-dragon-pirate-yakuza-sunderfolk-clair-obscur-game-rant.jpg?q=49&fit=crop&w=767&h=&dpr=2)`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Header />
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
