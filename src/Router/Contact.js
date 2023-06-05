import Setting from './MainImage/Setting.png';
import Search from './MainImage/Search.png';
import US from './MainImage/US.png';
import Sleep from './MainImage/Sleep.png';
import Fflower from './MainImage/Fflower.png';
import Sflower from './MainImage/Sflower.png';
import Tflower from './MainImage/Tflower.png';
import Lflower from './MainImage/Lflower.png';
import Home from './MainImage/Home.png';
 import Contact from './MainImage/Contact.png';
import Calendar from './MainImage/Calendar.png';
import Grid from './MainImage/Grid.png';
import Person from './MainImage/Person.png';
import Below from './MainImage/Below.png';
import Message from './MainImage/Message.png';
import Line from './MainImage/Line.png';
import Nav from './MainImage/Nav.png';
import Badge from './MainImage/Badge.png';
import Notification from './MainImage/Notification.png';
import { useState,useRef,useEffect } from 'react';
import './Bottom.css';


function Contactt() {


  const [activeTab, setActiveTab] = useState('contact');
  const activeTabRef = useRef(null);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.classList.add('active');
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    if (activeTabRef.current) {
      activeTabRef.current.classList.remove('active');
    }
    setActiveTab(tab);
  };


  
  const handlesearchClick= () => {
    alert('search icon Clicked');
  }
  
  const handlesleepClick= () => {
    alert('sleep icon Clicked');
  }

  const handlenotificationClick= () => {
    alert('notification icon Clicked');
  }

  
    return (

    <> 
  
   <div className='menudrawer'>
    <img src={Fflower} alt='logo' className='Fflower' />
    <img src={Sflower} alt='logo' className='Sflower'/>
    <img src={Tflower} alt='logo' className='Tflower'/>
    <img src={Lflower} alt='logo' className='Lflower'/>
    

    <a href='/home'>
          <div
          className={activeTab === 'home' ? 'Home active' : 'Home'}
          style={{
            backgroundColor: activeTab === 'home' ? 'rgba(38, 132, 255, 1)' : 'transparent',
            borderRadius: '0px 50px 50px 0px',
            width: '70px',
            top: '9%',
            left: '0.1%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
           
          <img src={Home} alt='logo' style={{ width: '20px', height: '20px' }} onClick={handleTabClick} />
          </div>
        </a>


    <img src={Line} alt='logo'className='Line'/>

    <img src={Setting} alt='logo' className='Setting'  />

    <a href='/contact'>
    <div
          className={activeTab === 'contact' ? 'Contact active' : 'Contact'}
          style={{
            backgroundColor: activeTab === 'contact' ? 'rgba(38, 132, 255, 1)' : 'transparent',
            borderRadius: '0px 50px 50px 0px',
            width: '70px',
            top: '17%',
            left: '0.1%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
    <img src={Contact } alt='logo'style={{ width: '20px', height: '20px' }}  onClick={handleTabClick}/>
    </div>
    </a>


    <a href='/calendar'>
    <img src={Calendar } alt='logo' className='Calendar' onClick={handleTabClick}/>
    </a>
      

    <a href='/person'>
        <div
          className={activeTab === 'person' ? 'Person active' : 'Person'}
          style={{
            backgroundColor: activeTab === 'person' ? 'rgba(38, 132, 255, 1)' : 'transparent',
            borderRadius: '0px 50px 50px 0px',
            width: '70px',
            top: '26%',
            left: '0.1%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick('person')}>
          <img src={Person} alt='logo' style={{ width: '20px', height: '20px' }} />
        </div>
        </a>
        
    <a href='/below'>
    <img src={Below } alt='logo' className='Below' onClick={handleTabClick}/>
    </a>
    <a href='/grid'>
    <img src={Grid } alt='logo' className='Grid' onClick={handleTabClick}/> 
    </a> 

    <img src={Line} alt='logo' className='Linee'/>

      <a href='/message'>
    <img src={Message} alt='logo' className='Message' onClick={handleTabClick}/>
    </a> 


    <a href='/setting'>
    <img src={Setting} alt='logo' className='Setting' onClick={handleTabClick} />
    </a> 

 
    <div className='verticalnavbar'>
      <a href='/search'>
     <img src={Search} alt='logo' className='Search' onClick={handlesearchClick}/>
     </a>
     <img src={US} alt='logo'className='US'/>
     <a href='/sleep'>
     <img src={Sleep} alt='logo'className='Sleep' onClick={handlesleepClick}/>
     </a>
     <a href='/notification'>
     <img src={Notification} alt='logo'className='Notification' onClick={handlenotificationClick}/>
     </a>
     <img src={Nav} alt='logo'className='Nav'/>
     <img src={Badge} alt='logo' className='Badge'/>

    </div>

    <h1 style={{marginLeft: '150%'}}>ContactPage</h1>

    <div className='bottomnav'>
        <p className='bottomtext'> © 2022, Made with ❤️ by </p>
        <div className='nidves'>Nidves.design</div>

      </div>
    </div>
   


      
    </>
  );
}

export default Contactt;
