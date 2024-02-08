import React , { useState, useEffect }from 'react';   
import { useParams } from 'react-router-dom';
import Booking from './Booking';

  const ServiceDetail=()=>{
    
      
    const {id} =  useParams()
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/api/services/${id}`)
          .then(response => response.json())
          .then(data => setData(data));
      });

    return (
        <div>
            
              <div  key={data.id}>
                <h2>id:{data.id}</h2>
                <p>name:{data.name }</p>
                <p>detail:{data.detail}</p>
                
              </div>
              <Booking/>

            
        </div>
    )
}

export default ServiceDetail
