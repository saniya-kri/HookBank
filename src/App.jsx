import styles from './style';
import Navbar from './components/Navbar';
import Billing from './components/Billing'
import Business from './components/Business'
import CTA from './components/CTA'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {

  return (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
          <Navbar/>
       </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         <Hero/>
      </div>  
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>  
    </div>
  </div>
  )
}

export default App
