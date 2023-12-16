import { Col, Row } from 'react-bootstrap';
import './App.css';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [email, setemail] = useState("");
  const[isemail,setIsemail]=useState(true)


  const emailValidate=(e)=>{
    const{name,value}=e.target
   
   var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(!!value.match(/^[0-9]+$/))
   {
    if(name==='email')
    {setemail(value)
    setIsemail(true)}
    
   else
   if(name==='email')
   { setemail(value)
setIsemail(false)}

  }
  }



  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!email)
    {
      alert('please fill the form')
    }
  }
  const notify = () => toast("Congratulations! login successful");
  return (
    <>
  <div style={{width:'100%',backgroundImage: `url("https://as1.ftcdn.net/v2/jpg/06/38/26/48/1000_F_638264834_TxcZOwgXXzd0h2oePYuTD7A8B6L3RwNS.jpg")`,backgroundSize: "cover",
            backgroundRepeat: "no-repeat", }}>
 <div className='container rounded'  >
<div>
 <div className=''><h1 className='text-center pt-3  fw-bolder' style={{color:'white',  textShadow:'0 0 3px #FF0000, 0 0 5px #0000FF' ,}}>CREATE YOUR OWN TRAVEL DIARY</h1></div>
  <Row>
<Col  lg={1}></Col>
<Col lg={10}>
<Row className='border shadow' style={{borderRadius:'15px', backgroundImage: `url("")`,backgroundSize: "cover", marginTop:'40px',  marginBottom:'200px' }}>
  <Col lg={6}>
<div className=' d-flex justify-content-center align-items-center flex-column'>
  <h1 className=' fw-bolder' style={{color:'black' , marginTop:'90px',  textShadow:'1px 2px white', fontSize:'50px' }}>Welcome <i class="fa-solid fa-exclamation fs-1 fw-2x"></i></h1>
  <hr style={{width:'205px',height:''}}></hr>
  <p className='fw-bolder ms-3 text-info' style={{textAlign:'justify', marginTop:'100px' ,textShadow:'2px 2px 5px white', fontSize:'20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate debitis optio voluptate, tenetur nulla? Sequi </p>
  
  <Button style={{marginTop:'100px',}}  className='mb-5 w-50 fs-5 fw-bolder ' variant="outline-info">GET STARTED</Button>
</div>
  </Col>
  <Col lg={6}>
 <div className=' rounded   p-3 mb-5 d-flex justify-content-center align-items-center flex-column w-75' style={{marginTop:'90px', opacity:'',marginLeft:'50px', }}>
  <h1 className='mt-3' style={{color:'white', marginBottom:'50px', textShadow:' 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>LOGIN</h1>
 
<form onSubmit={handleCalculate}>
      <label className='text-info fw-bolder fs-5 w-100'>Enter your name:
        <input className='rounded bg-transparent w-100'
          type="text" 
      
      
        />
      </label>
     
    </form>

    <form >
      <label className='text-info fw-bolder fs-5 w-100'>Enter your email id:
        <input className='rounded bg-transparent w-100 '
          type="text" name='email'
          
          onChange={(e)=>emailValidate(e)}
         />
      </label>
     
    </form>
    {!isemail &&
<div>
  <p className='text-danger fw-bolder'>*invalid input</p>
</div>}
    
 

<form >
      <label className='text-info fw-bolder fs-5 w-100'>Enter your email id:
        <input className='rounded bg-transparent w-100 '
          type="text" name='email'
          
          onChange={(e)=>emailValidate(e)}
         />
      </label>
     
    </form>
    {!isemail &&
<div>
  <p className='text-danger fw-bolder'>*invalid input</p>
</div>}
    


<div>
         <button className='bg-primary mt-5' style={{width:'100px',height:'40px'}}    onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> 

      
    
</div> 
 
  </Col>
</Row>

</Col>
<Col  lg={1}></Col>

  </Row>
</div>
 </div>
  </div>

    </>
  );
}

export default App;
