import React from 'react'
import { data } from './data'
import './Rightbox1.css'


export default function Rightbox() {


  return (

    <div>   
      <div className='rightbox'>
    
         <div className='navv'>   
          <p className='list'>Project List</p> 
          <p className='seperator'></p>
          <p className='seperatorr'></p>
          <p className='seperatorrr'></p>
          <p className='seperatorrrr'></p>
         
<table>
  <thead>
    <tr>
      <th className='pro'>Project</th>
      <th  className='total'>TotalTask</th>
      <th className='progress'>Progress</th>
      <th className='hours'>Hours</th>
    </tr>
  </thead>
  
  
<tbody id="div4">
              {data.map(data => {
                const percentage = (data.TaskCompleted / data.TotalTask) * 100;
              
              
let bgColor;
if (percentage < 50) {
  bgColor = 'red';
} else if (percentage < 70) {
  bgColor = 'purple';
} else {
  bgColor = 'green';
}
                return (
                  <tr style={{height: '42px'}} key={data.Name}>
                    <td className='img'><img src={data.img} alt='logo' /></td>
                    <td className='tdproject'>{data.Project}</td>
                    <td className='tdreact'>{data.Name}</td>
                    <td className='tdtask'>{data.TaskCompleted}/{data.TotalTask}</td>
                    <td className='tdprogress'>
                        {/* <td>{dataItem.Progress}</td> */}
                      <progress value={data.TaskCompleted} max={data.TotalTask} style={{accentColor: bgColor}}></progress>
                    
                    </td>
                    <td className='tdhour'>{data.Hours}</td>
                    <td>
                      <div >
                        <div className='percentage' style={{marginLeft: '235%',marginBottom:'54%', width:'25%'}}>
                          {percentage ? percentage.toFixed() + "%" : "0%"}
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
  
</table>

        
        </div>
      </div>
    </div>
        
        
        
    

    
  )
}
