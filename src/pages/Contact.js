import React,{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import thank from '../ImageAssets/ThankingImage.png'

import {AiFillGithub,AiFillLinkedin} from "react-icons/ai/index";

const Contact = () => {
    const form = useRef();
    const [mess, setmess] = useState(false);
    const [mess1, setmess1] = useState(false);


    const [udetails, setudetails] = useState({
        uname : '',
        email : '',
        phone :  91,
        message : ''
    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        // console.log(name);
        // console.log(value);

        setudetails(udetails => ({...udetails,[name] : value}));

    }
  const handleSubmit = (e) =>{
    e.preventDefault();

    // console.log(udetails);

    emailjs.sendForm('service_fm625yh', 'template_37vita9', form.current, 'V_1SH95GpBTTJ9bET')
      .then((result) => {
        setmess(true);
        setTimeout(()=>{
          setmess(false);
        },2000);
          // console.log(result.text);
      }, (error) => {
        setmess1(true);
        setTimeout(()=>{
          setmess1(false);
        },2000);
        // console.log(error.text);
      });
      
      setudetails({uname : '',
      email : '',
      phone :  91,
      message : ''})
};
  return (
   
    <>
   {mess == true?<div className='mess'>Sended</div>:''} 
   {mess1 == true?<div className='mess1'>Error</div>:''} 
    <div className='contain'>
        <div className='cwrapper'>
            <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor="uname">Your Name</label>
                <input name='uname' type={'text'} id='uname' value={udetails.uname} onChange={handleChange}/>
                
                <label htmlFor="email">Your mail</label>
                <input name='email' type={'text'} id='email' value={udetails.email} onChange={handleChange}/>
                
                <label htmlFor="phone">Your Contact</label>
                <input name='phone' type={'number'} id='phone' value={udetails.phone} onChange={handleChange}/>
                
                <label htmlFor="mess">Your Message</label>
                <textarea id='mess' name='message' value={udetails.message} onChange={handleChange}/>
             <div>  
              <button type='submit' value="Send">Submit</button>
            </div> 
            <div className='soicon'>
            <a target={'_blank'} href={'https://github.com/Saarthak-Arora'}> <AiFillGithub/></a>
            <a target={'_blank'} href={'https://github.com/Saarthak-Arora'}><AiFillLinkedin/></a>
            </div> 
            </form>
        </div>
            <div className='right'>
               
                {/* <FaPrayingHands className='sicon'/> */}
                <img src={thank} alt=""/>
             
            </div>
    </div>
    </>
  )
}

export default Contact
