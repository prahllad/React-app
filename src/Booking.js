import React , { useReducer, useState }from 'react';   

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

  const Booking=()=>{
    
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = event => {
      
      event.preventDefault();
      setSubmitting(true);
      fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(response =>{
            setSubmitting(false);
            if(response.message==='success'){
                alert('data added successfully')
                setFormData({})
                event.target.reset()

            }else if(response.message==='exist'){
                alert('data exist')
                setFormData({})
                event.target.reset()



            }
            else{
                alert(response.message)
                setFormData({})
                event.target.reset()


            }
        })
      
    }
  
    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }
    

    return (
        <div className="wrapper">
        
        {submitting &&
          <div>Submtting Form...</div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1>Prahllad</h1>
            <label>
              <p>Id</p>
              <input name="id" onChange={handleChange}/>
            </label>
            <label>
              <p>Name</p>
              <input name="name" onChange={handleChange}/>
            </label>
            <label>
              <p>Detail</p>
              <input name="detail" onChange={handleChange}/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Booking
