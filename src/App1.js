import './App.css';
import './Menudrawer.css';
import './Verticalnavbar.css';
import './Box.css';
import './info.css';
import './Rightbox.css';
import './Bottomnav.css';
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
import L from './Images/L.png';
import LL from './Images/LL.png';
import LLL from './Images/LLL.png';
import LLLL from './Images/LLLL.png';
import Setting from './Images/Setting.png';
import Right from './Images/Right.png';
import Star from './Images/Star.png';
import Line from './Images/Line.png';
import Badge from './Images/Badge.png';
import { useState } from 'react';

const myData = {
   name: "Dnaya",
   email: "ddaya21@gmail.com",
   role: "Designer",
   taxId: "7727563771",
   contact: "+7 (916) 162-0600",
   language: "English",
   country: "Moscow"
  };


function App(props) {

  const {name,email,role,taxId,contact,language,country} = props.myData;

   const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // alert('home icon clicked');
  };
 

  const handlecalendarClick = () => {
    alert('Calendar icon clicked!');
  };

  const handlepersonClick = () => {
    alert('Person icon clicked!');
  };

  const handlebelowClick = () => {
    alert(' icon clicked!');
  };

  const handlegridClick = () => {
    alert('Grid icon clicked!');
  };

  const handlemessageClick = () => {
    alert('Message icon clicked!');
  };

  const handlesettingClick = () => {
    alert('Setting icon clicked!');
  };

  const handlesearchClick = () => {
    alert('Search icon clicked!');
  };

  const handlesleepClick = () => {
    alert('Sleep icon clicked!');
  };

  const handlenotificationClick = () => {
    alert('Notification icon clicked!');
  };
  
  const handleClick = () => {
    alert("Button clicked!");
  };

    return (

    <> 
  
   <div className='menudrawer'>
    <img src={L} alt='logo' className='L' />
    <img src={LL} alt='logo' className='LL'/>
    <img src={LLL} alt='logo' className='LLL'/>
    <img src={LLLL} alt='logo' className='LLLL'/>


<div>
      <a href='/home'>
        <div
          className={activeTab === 'home' ? 'Home active' : 'Home'}
          style={{
            backgroundColor: activeTab === 'home' ? '#2684FF' : 'transparent',
            borderRadius: '0px 50px 50px 0px',
            width: '70px',
            top: '8%',
            left: '0.1%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick('home')}>
          <img src={Home} alt='logo' style={{ width: '20px', height: '20px' }} />
        </div>
        </a>
      

      {/* add other tabs here */}
      <a href='/contact'>
  <div
    className={activeTab === 'contact' ? 'Contact active' : 'Contact'}
    style={{
      backgroundColor: activeTab === 'contact' ? '#2684FF' : 'transparent',
      borderRadius: '0px 50px 50px 0px',
      width: '70px',
      top: '17%',
      left: '0.1%',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    }}
    onClick={() => handleTabClick('contact')}>
    <img src={Contact} alt='logo' style={{ width: '20px', height: '20px' }} />
  </div>
</a>
      
    </div>


    <img src={Line} alt='logo'className='Line'/>

{/* 
     <a href='/contact'>
    <img src={Contact} alt='logo'className='Contact' onClick={handlecontactClick}/>
    </a> 
     */}

    <a href='/calendar'>
    <img src={Calendar} alt='logo'className='Calendar' onClick={handlecalendarClick} />
    </a>

    <a href='/person'>
    <img src={Person} alt='logo' className='Person' onClick={handlepersonClick}/>
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
          <div className='name'>
          Danya Garcia
          </div>
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
          <p>Username: {name}</p>
          <p>Email: {email}</p>
          <p>Role: {role}</p>
          <p>Tax Id: {taxId}</p>
          <p>Contact: {Contact}</p>
          <p>Language: {language}</p>
          <p>Country: {country}</p>
          
          {/* <p className='user'>Username: </p>
          <p className='dnaya'>Dnaya</p>
          <p className='email'>Email:</p>
          <p className='nemail'> ddaya21@gmail.com</p>
          <p className='role'>Role:</p>
          <p className='design'>Designer</p>
          <p className='tax'>Tax Id: </p>
          <p className='id'>7727563771</p>
          <p className='contact'>Contact:</p>
          <p className='phone'> +7 (916) 162-0600</p>
          <p className='language'>Language:</p>
          <p className='lang'>English</p>
          <p className='country'>Country:</p>
          <p className='Moscow'>Moscow</p> */}

          <a href='/edit'>
          <button onClick={handleClick}>Edit</button>
          </a>

        </div>
      </div>
      </div>
      

      <div className='rightbox'>
       <p className='list'>Project List</p> 
         <div className='navv'>
          <p className='pro'>Project</p>
          <p className='total'>TotalTask</p>
          <p className='progress'>Progress</p>
          <p className='hours'>Hours</p>
          <p className='seperator'></p>
          <p className='seperatorr'></p>
          <p className='seperatorrr'></p>
          <p className='seperatorrrr'></p>
         </div>
      </div>

      <div className='bottombox'>
        <p className='activity'>User Activity Timeline</p>
      </div>

      <div className='bottomnav'>
        <p className='bottomtext'> © 2022, Made with ❤️ by </p>
        <div className='nidves'>Nidves.design</div>

        

      </div>
      </div>

      
    </>
  );
}

export default App;
