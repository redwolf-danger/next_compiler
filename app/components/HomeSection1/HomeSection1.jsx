import './HomeSection1.css';
import FloatHeading from '../FloatHeading/FloatHeading';
import Link from 'next/link';


function HomeSection1() {
    return(
      <>
        <div className='page-headers sticky'>
        <div className='header-img'>
          <img src='/image-header-1.png'/>
        </div>
        
        <div className='page-header-content'>
          <div className="page-heading-main">Orka</div>
          <p className='header-para'>Orka is the platfrom built to help you enhance your skills  and expand your knowledge</p>
          <div className='page-subheading-main'><Link href="/editor">Next-Generation Compiler</Link></div>
        </div>
      </div>
      <FloatHeading />
      </>
    )
}

export default HomeSection1;