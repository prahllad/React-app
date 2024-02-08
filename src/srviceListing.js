import React , { useState, useEffect }from 'react';   
import { useNavigate } from 'react-router-dom';

  const ServiceListing=()=>{
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:3000/api/services')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

    return (
        <div>
            {data.map(item => (
              <div key={item.id}>
                <h2>id:{item.id}</h2>
                <p>name:{item.name }</p>
                <button onClick={()=>{navigate('/detail/'+item.id)}}>detail</button>
              </div>
            ))}
        </div>
    )
}

export default ServiceListing
