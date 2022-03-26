import { React } from 'react';

function Footer() {
    return (
      <div className='footer' id="footer">
          <div className="footer__addr">
    <h1 className="footer__logo">URBAN-FIT</h1>
        
    <h2 className='contact-footer'>Contact</h2>
    
    <address>
    Ermita, Manila, 1000 Metro Manila
      <br/>
          
      <a className="footer__btn" href="mailto:andrewsalva88@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav-title">Social Media</h2>

      <ul className="nav__ul">
        <li>

        <a href="https://www.instagram.com/">Instagram</a>
        </li>

        <li>
        <a href="https://www.facebook.com/">Facebook</a>
        </li>
            
        <li>
          <a href="https://www.pinterest.ph/">Pinterest</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav-title">Who we are</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="/shopcares">About us</a>
        </li>
        
        <li>
          <a href="/shopcares">Careers</a>
        </li>
        
        <li>
          <a href="/shopcares">Contact us</a>
        </li>


        <li>
          <a href="/shopcares">Promotions</a>
        </li>

        <li>
          <a href="/shopcares" className='international-title'>Partners</a>
        </li>
        
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav-title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p className='legal-text'>&copy; 2022 URBAN-FIT. All rights reserved.</p>
    
  </div>
</div>

    
    )
  }
  
  export default Footer;
  