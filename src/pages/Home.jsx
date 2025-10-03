import React from 'react'
import Hero from '../components/hero'
import HomeCards from '../components/HomeCards'
import ConnectivitySection from '../components/ConnectivitySection'
import SchoolManagement from '../components/SchoolManagement'
import DownloadSection from '../components/DownloadSection'

const Home = () => {
    return (
        <>

            <Hero />
            <HomeCards />
            <ConnectivitySection />
            <SchoolManagement />
            <DownloadSection />

        </>
    )
}

export default Home