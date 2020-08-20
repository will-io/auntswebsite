import React from 'react'
import Hero from '../components/Hero'
import Banner from  '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero" >
            <Banner title="our services" subtitle="Call (240)305-9258 or fill out the form below to book an appointment">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
            <br />
        </Hero>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeXPj12cDUPT7CZbpGM1vxcYcEKavRviHcnMEUGHgVBhB7Cgg/viewform?embedded=true" width="100%" height="2680" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <Footer />
        </>
    )
}

export default Rooms;
