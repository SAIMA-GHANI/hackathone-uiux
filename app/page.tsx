import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";

export default function Home() {
  return (
    <div>
      <div className="full-page">
        <div className="full2">
          <div className="navbar">
            <div className="foodtruck">
         </div>
        <a href="">Home</a>
         <a href="">Menu</a>
         <a href="">Blog</a>
         <a href="">Pages</a>
         <a href="">About</a>
         <a href="">Shop</a>
         <a href="">Contact</a>
        <input className='search-input' placeholder='search...'></input>
        <Image  className="m-border" src={'/Vector1.png'}  height={35} width={35} alt="vector"/>
        <Image id="hb" className="m-border" src={"/Handbag.png"} height={35} width={35} alt="handbage"/>
         </div>
         <div className="main-content">
          <div className="lineimg"> 
          <Image className="m-border" src={'/groupline.png'} height={500} width={30} alt="line"/>
          </div>
          <div className="heading">
        <p id="f-p" > Its Quick & Amusing!</p>
        <p id="f-p2" className="p-color">
        The Art of speed
        
        food Quality
        </p>
        <p id="f-p3" className="p-color" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue
        </p>
        <button id="b-1">see menu</button>
          </div>
          <div className="foodimg">
          <Image className="m-border" src={'/foodimg.png'} height={600} width={800} alt="food"/>
           </div>
         </div></div>
         </div> 
         <div className="second">
     <div className="main2" >
      <div className="m-heading">
        <p id="mp1"> About us</p>
        <p id="mp2" className="p-color">We Create the best
foody product
</p>
<p id="mp3" className="p-color"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
  Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, 
  et ac dapibus sit eu velit in consequat.</p>
  <p id="mp4"  className="p-color"> 
    <Image className="m-border" src={'/check.png'} height={12} width={17} alt="check"/> Lacus nisi, et ac dapibus sit eu velit in consequat.
   <br />
   <Image  className="m-border" src={'/check.png'} height={12} width={17} alt="check"/> Quisque diam pellentesque bibendum non dui volutpat fringilla 
  <br />
  <Image className="m-border" src={'/check.png'} height={12} width={17} alt="check"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </p>
   <button id="b-2"> see menu</button>
   
  <br />
</div>
 <div className="m-imeges">
 <Image  className="m-border" src={'/unsplash_fdlZBWIP0aM.png'} height={330} width={660} alt="check"/>
 <div className="m-i2">
 <Image  className="m-border" src={'/unsplash_jpkfc5_d-DI.png'} height={194} width={322} alt="check"/>
 <Image className="m-border" src={'/unsplash_mAQZ3X_8_l0.png'} height={194} width={322} alt="check"/>
 </div></div>
  </div>
  </div>
   <div className="third">
    <div className="main3">
      <div className="heading2">
     <p id="m31"> Food Category</p>
    <p id="m32"  className='p-color'>Choose Food Iteam</p>
      </div>
      <div className="imeges2">
      <Image className="m-border" src={'/unsplash1.png'} height={329} width={306} alt="check"/>
      <Image className="m-border" src={'/unsplash2.png'} height={329} width={306} alt="check"/>
      <Image className="m-border" src={'/unsplash3.png'} height={329} width={306} alt="check"/>
      <Image className="m-border"src={'/unsplash4.png'} height={329} width={306} alt="check"/></div>
    </div>
  </div>
  <div className="fourth">
    <div className="main4">
      <div className="imeges3">
        <div className="i31"><Image className="m-border" src={'/unsplash01.png'} height={356} width={362} alt="check"/>
        
      <Image id="i30" className="m-border" src={'/unsplash02.png'} height={231} width={281} alt="check"/></div>
      <div className="i32">
      <Image className="m-border"  src={'/unsplash03.png'} height={306} width={244} alt="check" /> 
      <Image className="m-border" src={'/unsplash04.png'} height={226} width={221} alt="check"/> 
      <div className="i33"> <Image className="m-border" src={'/unsplash05.png'} height={168} width={161} alt="check"/>  
       
          <div className="i34"> 
         <Image className="m-border" src={'/unsplash06.png'} height={168} width={161} alt="check"/> 
          </div> 
      </div>
      </div>
      </div>
     <div className="heading3">
      <p id="m41" className="p-color">Why Choose us</p>
      <p id="m42"> Exta ordinary taste
     <br/>  And Experienced </p>
    
      <p className='p-color'  id="m43"  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div className="s-imeges"> 
      <div className="s-i">
      <Image id="si1" src={'/Hamburger.png'} height={56} width={56} alt="check"/>
      </div>
      <div className="s-i">
      <Image id="si1" src={'/Cookie.png'} height={56} width={56} alt="check"/>
      </div>
      <div className="s-i">
      <Image id="si1" src={'/Wine.png'} height={56} width={56} alt="check"/>
      </div>
 </div>
 <div  className="s-i4  m-border"></div>
  </div>
  </div>
 </div>
   <footer>

<div className="foot-div">
  <div className="foot-1">
  <div>
    <p className="f1">
       Still You Need Our  Support?
  </p>
  <p className="f2">
  Don’t wait make a smart & logical quote here. Its pretty easy.
  </p></div>
  <input className='email-input' placeholder='Enter your Email'></input>
  <button className="F-b"> Subscribe Now</button>

  </div>
  
  <div className="foot-2"></div>
</div>




   </footer>



</div>
  );
}