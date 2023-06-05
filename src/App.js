import './App.css';
import './Menudrawer.css';
import './Verticalnavbar.css';
import './Box.css';
import './Info.css';
import './Navbottom.css';
import Avatar from './Images/Avatar.png';
import Sleep from './Images/Sleep.png';
import Notification from './Images/Notification.png';
import US  from './Images/US.png';
import Nav from './Images/Nav.png';
import Home from './Images/Home.png';
import Contact from './Images/Contact.png';
import Calendar from './Images/Calendar.png';
import Person from './Images/Person.png';
import Below from './Images/Below.png';
import Grid from './Images/Grid.png';
import Message from './Images/Message.png'
import Search from './Images/Search.png'
import Fflower from './Images/Fflower.png';
import Sflower from './Images/Sflower.png';
import Tflower from './Images/Tflower.png';
import Lflower from './Images/Lflower.png';
import Setting from './Images/Setting.png';
import Right from './Images/Right.png';
import Star from './Images/Star.png';
import Line from './Images/Line.png';
import Badge from './Images/Badge.png'
import { useState,useRef,useEffect } from 'react';
import { data } from './data';
import Records from './records.json';
import Rightbox from './Rightbox';
//import net from './Images/net.png'
const myData = {

  user: "Dnaya",
  email: "ddaya21@gmail.com",
  role: "Designer",
  tax: "7727563771",
  contact: "+7 (916) 162-0600",
  language: "English",
  country: "Moscow"
 };


function App() {


  const [activeTab, setActiveTab] = useState('person');
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


  const handlehomeClick= () => {
    alert('Home icon Clicked');
  }
  const handlecontactClick= () => {
    alert('Contact icon Clicked');
  }

  const handlecalendarClick= () => {
    alert('calendar icon Clicked');
  }

  const handlebelowClick= () => {
    alert('Below icon Clicked');
  }
  const handlegridClick= () => {
    alert('Grid icon Clicked');
  }

  const handlemessageClick= () => {
    alert('Message icon Clicked');
  }

  const handlesettingClick= () => {
    alert('setting icon Clicked');
  }

  const handlesearchClick= () => {
    alert('search icon Clicked');
  }
  
  const handlesleepClick= () => {
    alert('sleep icon Clicked');
  }

  const handlenotificationClick= () => {
    alert('notification icon Clicked');
  }

  const handleClick= () => {
    alert('Edit Button Clicked');
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
          className={activeTab === 'home' ? 'Home active' : 'Home'}>
          <img src={Home} alt='logo' style={{ width: '20px', height: '20px' }} onClick={handlehomeClick} />
          </div>
        </a>


    <img src={Line} alt='logo'className='Line'/>

    <img src={Setting} alt='logo' className='Setting'  />

    <a href='/contact'>
    <img src={Contact } alt='logo' className='Contact' onClick={handlecontactClick}/>
    </a>


    <a href='/calendar'>
    <img src={Calendar } alt='logo' className='Calendar' onClick={handlecalendarClick}/>
    </a>
      

    <a href='/person'>
        <div
          className={activeTab === 'person' ? 'Person active' : 'Person'}
          style={{
            backgroundColor: activeTab === 'person' ? 'rgba(38, 132, 255, 1)' : 'transparent',
            borderRadius: '0px 50px 50px 0px',
            width: '60px',
            top: '26%',
            left: '0.1%',
            height: '37px',
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
    <img src={Below } alt='logo' className='Below' onClick={handlebelowClick}/>
    </a>
    <a href='/grid'>
    <img src={Grid } alt='logo' className='Grid' onClick={handlegridClick}/> 
    </a> 

    <img src={Line} alt='logo' className='Linee'/>

      <a href='/message'>
    <img src={Message} alt='logo' className='Message' onClick={handlemessageClick}/>
    </a> 


    <a href='/setting'>
    <img src={Setting} alt='logo' className='Setting' onClick={handlesettingClick} />
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
   

      <div className='box'>
        <div className='Mtext'>
        Management/Profile
        </div>

        <div className='pic'>
        <img src={Avatar} alt='logo'className='Avatar'/>
          <div className='name'>{myData.user}</div>
        </div>

        <div className='profile'>
          <div className='icon'>
            <div className='fbox'></div>

        <img src={Right} alt='logo'className='Right'/>
        <p className='textt'>1.23K</p>
        <p className='texttt'>Task Done</p>
        <div className='ffbox'></div>
        <img src={Star} alt='logo'className='Star'/>
        <p className='number'>23</p>
        <p className='numberr'>Project Done</p>
        </div>

          <div className='details'>
            <div className='dtext'>
          Details
          </div>
          <div className='dline'>
            
          </div>
         
          
          <p className='user'>Username:</p><p className='dnaya'> {myData.user}</p>
          <p className='email'>Email:</p><p className='nemail'> {myData.email}</p>
          <p className='role'>Role:</p><p className='design'> {myData.role}</p>
          <p className='tax'>Tax Id:</p><p className='id'> {myData.tax}</p>
          <p className='contact'>Contact</p>< p className='phone'>{myData.contact}</p>
          <p className='language'>Language:</p><p className='lang'> {myData.language}</p>
          <p className='country'>Country:</p><p className='Moscow'> {myData.country}</p>

          

          <a href='/edit'>
          <button onClick={handleClick}>Edit</button>
          </a>

        </div>
      </div>
      </div>
     
      <Rightbox/>

      <div className='bottombox'>
        <p className='activity'>User Activity Timeline</p>
      </div>

      
      <div className='Navbottom'>
        <p className='bottomtext'> © 2022, Made with ❤️ by </p>
        <div className='nidves'>Nidves.design</div>

       

      </div>

      
      </div>
      

      
    </>
  );
}

export default App;
