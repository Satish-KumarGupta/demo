import Select from 'react-select'
import React, { useState } from 'react'
import { getDatabase,set,ref } from 'firebase/database';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useNavigate } from 'react-router-dom';
const Contact = () => {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [address,setAddress]=useState('');
    const options = [
        { value: 'indore', label: 'indore' },
        { value: 'gwalior', label: 'gwalior' },
        { value: 'surat', label: 'surat' },
        { value: 'kanpur', label: 'kanpur' }
      ]
      const navigate=useNavigate();
    const database=getDatabase();
    var val = Math.floor(1000 + Math.random() * 9000);
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        try{
            const data={
                
                firstName:firstName,
                lastName:lastName,
                email:email,
                selectedOption:selectedOption,
                address:address,
            }            
            set(ref(database,'ContactDetails/'+val),data)
            NotificationManager.success('Success message', 'Record Submit Success',5000);
            
        }catch(e){
            console.log(e);
        }
    }
    return (
    <div className="container">
    <div className=" text-center mt-3 ">
        <h2 >Contact</h2>
    </div>


    <div className="row ">
    <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mb-5 mx-auto p-4 bg-light">
        <div className="card-body bg-light">

        <div className = "container">
        <form id="contact-form" onSubmit={handleSubmit}>
                <div className="controls">

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_name">Firstname *</label>
                                <input id="form_name" type="text" name={firstName}  onChange={(e)=>{setFirstName(e.target.value)}} className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label >Lastname *</label>
                                <input id="form_lastname" type="text" name={lastName}  onChange={(e)=>{setLastName(e.target.value)}} className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                            </div>  
                        </div>
                    </div>
                    <div className="row mb-3" >
                        <div className="col-md-6">
                            <div className="form-group">
                                <label >Email *</label>
                                <input id="form_email" type="email" name={email}  onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_need">CITY *</label>
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />      
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name={address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control mb-3" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                </div>

                            </div>
                        <div className="col-md-12 text-center">
                            
                            <input type="submit" className="btn btn-success btn-send  pt-2 btn-block " value="Send Message" onSubmit={handleSubmit}/>
                        
                    </div>
            
                    </div>
                </div>
           </form>
        </div>
    </div>
</div>


</div>

</div>
  <NotificationContainer/>
</div>
  )
}
export default Contact;