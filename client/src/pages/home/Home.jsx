import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturdProperties from '../../components/featuredPropeties/FeaturedPropeties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
    <div className= 'home-main'>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturdProperties/>
        <MailList /> 
        <Footer/>
      </div>

    </div>
  )
}

export default Home
