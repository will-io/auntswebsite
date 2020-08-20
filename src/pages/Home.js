import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Sevices from '../components/Services'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
             <Banner
          title="House Cleaning"
          subtitle=" get $20 off your first deluxe cleaning service"
        >
          <Link to="/rooms" className="btn-primary">
            Book Now
          </Link>
        </Banner>
        </Hero>
        <Sevices />
        <Footer />
        </>
    )
}

