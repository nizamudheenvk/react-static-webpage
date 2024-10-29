import React from 'react'
import { Card } from 'react-bootstrap'
import cargif from './assets/car.gif'
import vintage1 from '../src/assets/vintage1.avif'
import vintage2 from '../src/assets/vintage2.jpg'
import vintage3 from '../src/assets/vintage3.jpg'
import vintage4 from '../src/assets/vintage4.webp'
import vintage5 from '../src/assets/vintage5.jpeg'
import vintage6 from '../src/assets/vintage6.jpeg'
import premium1 from '../src/assets/preimum1.webp'
import premium2 from '../src/assets/premium2.webp'
import premium3 from '../src/assets/premium3.png'
import premium4 from '../src/assets/premium4.jpg'
import { Link } from 'react-router-dom'
import arrow from '../src/assets/arrow.png'






const Landing = () => {
  return (
    <div class="contentes" style={{padding:"100px"}} >
<div className='row'>
  <div className='col-lg-5'>
  <h1 className='text-white'>LOOKING <br /> FOR <br /> <span className='text-info'>CAR RENT</span></h1>
  <p style={{textAlign:"justify",fontSize:"20px",marginTop:"100px",fontFamily:"sans-serif",color:"white"}}>it is one of the most trusted car rental services as Indus Motors, the top Maruti dealership in India, promotes it. The rent-a-car service provider offers an outstanding model and a wide variety of vehicle options at the most competitive rates.  we allow you to enjoy flexibility with respect to start and endpoints. You can book cars on an hourly, daily, weekly, monthly basis. Moreover, we provide door-step delivery, believe in complete transparency, and adhere strictly to business ethics.</p>
  <Link to={'/home'}><button  style={{borderRadius:"10px",padding:"10px 20px"}}className='bg-info'>Book Now</button></Link>

  </div>  
  <div className='col-lg-7'>
  <img width={"100%"} src={cargif} alt="" />
  </div>
</div>
<div>
  <h1 style={{textAlign:"center",marginTop:"150px",width100:"100%",borderRadius:"50px"}} className='border soild  text-black bg-info text-white w-100' >vintage collections</h1>
</div>

<div className='row '>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={vintage1} />
      <Card.Body style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white'>weybridge classic car</Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={vintage2} />
      <Card.Body   style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white'>Contessa</Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={vintage3} />
      <Card.Body   style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white'>benz classic</Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={vintage4} />
      <Card.Body   style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white' >bmw classic</Card.Title>
        <Card.Text className='text-white' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
</div>

<div className='row'>
  <div className="col-lg-6">
    <img className='mt-5' width={"100%"} src={vintage5} alt="" />
  </div>
  <div  className="col-lg-6">
    <img  className='mt-5' width={"100%"} height={"345px"} src={vintage6} alt="" />
  </div>
  <div>
  <h1 style={{textAlign:"center",marginTop:"150px",width100:"100%",borderRadius:"20px"}} className='border soild  text-black bg-info text-white w-100' >Premium collections</h1>
</div>
</div>

<div className='row '>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={premium1} />
      <Card.Body style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white'>Porsche</Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={premium2} />
      <Card.Body   style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white'>BMW m3 sport</Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={premium3} />
      <Card.Body   style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white'>Land cruiser</Card.Title>
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  <div className="col-lg-3 mt-3"><Card style={{ width: '18rem' }}>
      <Card.Img height={"250px"} variant="top" src={premium4} />
      <Card.Body   style={{backgroundColor:"#141414"}}>
        <Card.Title className='text-white' >Nissan patrol</Card.Title>
        <Card.Text className='text-white' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
</div>

<div style={{width:"100%",height:"150vh",borderRadius:"60px"}} className=' row bg-dark mt-5'>
  <div className="col-lg-4">
  <h1 style={{marginLeft:"40px"}} className='text-white mt-5'>How It <span className='text-info'>Works</span></h1>
  <div className='d-flex'>     <p className='text-info' style={{fontSize:"80px"}}>1.</p>
    <h2 className='text-white mt-4 m-3'>Search & Book Your <br />Preferred Vehicle</h2>
</div>
<p style={{marginLeft:"60px"}} className='text-white'>Chooose your desired vehicle from our <br />various available options.</p>

  </div>
  <div className='col-lg-4'>
    <img style={{marginTop:"80px"}} width={"300px"} src={arrow} alt="" />
    <div className='d-flex'>
    <h1 style={{fontSize:"70px"}} className='text-info'> 2.</h1>
    <h2 className='text-white mt-4 m-3'>Pick Up your Vehicle</h2>
    </div>
    <p style={{marginLeft:"70px"}} className='text-white '> Take delivery of your car from any of <br /> our various pickup points or deliver <br /> it straight to your doorstep by our <br /> trusted associates.</p>
  </div>
  <div className='col-lg-4'> <img style={{marginTop:"450px",width:"300px"}} src={arrow} alt="" />
  <div className='d-flex'>
    <h1 style={{fontSize:"70px"}} className='text-info'> 3.</h1>
    <h2 className='text-white mt-4 m-3'>Drive your Vehicle</h2>
    </div>
    <p style={{marginLeft:"70px"}} className='text-white '> Take your car for a spin and start your <br /> road trip with your loved ones.</p>
  </div>
  {/* add icons */}
  <div style={{marginLeft:"120px"}} className="col-lg-4 d-flex ">
  <i  style={{fontSize:"150px",marginLeft:"60px",color:"white"}} className='fa-solid fa-car '></i>
  <i   style={{fontSize:"150px",marginLeft:"100px",color:"white"}} className='fa-brands fa-instagram'></i>
  <i  style={{fontSize:"150px",marginLeft:"100px",color:"white"}} className='fa-brands fa-facebook '></i>
  <i  style={{fontSize:"150px",marginLeft:"100px",color:"white"}} className='fa-brands fa-whatsapp '></i>
  
  </div>

</div>






</div>
   
  )
}

export default Landing