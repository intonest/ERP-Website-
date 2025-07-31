import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CompanyLogo from './Components/CompanyLogo'
import ImageSection from './Components/ImageSection'
import ERPBenefits from './Components/ERPbenifits'
import Pricing from './Components/Pricing'
import ComparePlans from './Components/ComparePlans'
import Connect from './Components/Connect'
import Footer from './Components/Footer'
import AttendanceOverview from './Components/AttendanceOverview'
import ReportsOverview from './Components/ReportsOverview'
import UtilitiesOverview from './Components/UtilitiesOverview'
import FinanceOverview from './Components/FinanceOverview'
import FeatureSection from './Components/FeaturesSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/20 to-blue-400/10 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">

      <Navbar />


      <Hero />

      <CompanyLogo />
      
          <section className="max-w-7xl mx-auto px-4 py-16">

      <ERPBenefits />
          </section>

          <section className="max-w-7xl mx-auto px-4 py-16">

      <FeatureSection/>

       <ImageSection />
          </section>
  


          <section className="w-full bg-black py-16">
          <div className="max-w-7xl mx-auto px-4">

      <AttendanceOverview/>
      <ReportsOverview/>
      <UtilitiesOverview/>
      <FinanceOverview/>
    
  <div className="w-full px-0">
    <Pricing />
  </div>

       <ComparePlans />
          </div>
          </section>

          <section className="w-full bg-black py-16">
          <div className="max-w-7xl mx-auto px-4">
       <Connect/>
          </div>
          </section>

        
        <Footer/>
    </div>  
    </main>
  )
}

export default App
