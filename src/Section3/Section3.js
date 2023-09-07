import React, { useEffect, useState } from 'react'
import './Section3.scss';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { BsSortNumericDownAlt,BsSortNumericDown } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
import Event from '../Events/Event'


export default function Section3() {
    const [flowers,setFlowers]=useState([])
    const [search,setSearch]=useState('')
    const [defflower,setDefflower]=useState([])


//  const getFlowers2=()=>{
//     axios.get('http://localhost:5050/flowers')
//     .then(res=>setDefflower(res.data))
//  }
//     const getFlowes=()=>{
//         axios.get('http://localhost:5050/flowers')
//         .then(res=>setFlowers(res.data))
//     }   
//     useEffect(()=>{
//         getFlowes()
//         getFlowers2()
//     },[])
  
//     const handleDelete= async(id)=>{
//         await axios.delete(`http://localhost:5050/flowers/${id}`)
//         getFlowes()
        
//     }
    // console.log(flowers);

    const handlesorttolittle=()=>{
        const filter1=[...flowers].sort((a,b)=>b.price-a.price)
        setFlowers(filter1)
    }
    const handlesorttobig=()=>{
        const filter1=[...flowers].sort((a,b)=>a.price-b.price)
        setFlowers(filter1)
    }
// const handleDetail=(id)=>{
//     navigate(`/detail/${id}`)

// }

// const handleDefault=()=>{

//     setFlowers([...defflower])
// }
  return (
    <div className='section3'>
        {/* <div className='devoted'>
            <h4>Devoted to wonderful beauty</h4>
            <h2>Flowers Pricing</h2>
        </div>
        <div className='search'>
        <TextField id="standard-basic" label="Search" variant="standard" onChange={(e)=>{setSearch(e.target.value)}} />
        <button onClick={handlesorttolittle}><BsSortNumericDownAlt/></button>
        <button  onClick={handlesorttobig}><BsSortNumericDown/></button>
        <button onClick={handleDefault} className='default'>Default Sort</button>
        </div>
    <div className='kartlar'>
        {
            flowers.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase())).map((item)=>(
        <div className='kart' key={item._id}>
            <div className='kartimg'>
              <img src= {item.image}/>
            </div>
        <div className='price'>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={()=>handleDelete(item._id)} className='button-27'>Delete</button>
            <button className='button-5 ' onClick={()=>handleDetail(item._id)}>More</button>
        </div>
        </div>

            ))
        }
        

    </div> */}
        <Event/>
    {/* <div className='party'>

    <div className='devoted'>
            <h4>Devoted to wonderful beauty</h4>
            <h2>Events Pricing</h2>
        </div>


        <div className='events'>
            <div className='event'>
                <div> <h1>$16</h1> <h5>pertable</h5> </div>
                
               <h4>Birthday Events</h4>
               <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
               <span>Shop Now</span>
            </div>


            <div className='event'>
                <div> <h1>$16</h1> <h5>pertable</h5> </div>
                
               <h4>Birthday Events</h4>
               <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
               <span>Shop Now</span>
            </div>



            <div className='event'>
                <div> <h1>$16</h1> <h5>pertable</h5> </div>
                
               <h4>Birthday Events</h4>
               <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
               <span>Shop Now</span>
            </div>


        </div>
    </div> */}

      
    </div>
  )
}
