import React from 'react';
import { Htag } from './Htag';

import './payment.css';
import { Pra } from './Pra';
import { Rightside } from './Rightside';

  

 const Payment = (props) => {

    
  return (
    <div>

    <div className='main_Div' style={props.obj}>
    <div className='fisrt_div'> 
     <Pra date={props.date} black="Case Study"/>
     <Htag  first={props.first} second={props.second} pa={props.pa}/>
    </div>

    <div className='second_div'>    
    <Rightside img= {props.url} />
    </div>
    </div>  
    
    
    </div>
  )
}

export  {Payment};
