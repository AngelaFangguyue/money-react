import React from 'react';
type Props = {
  name:string;
}

const Icon = (props:Props)=>{
  return(
    <svg>
      <use xlinkHref={"#"+props.name}/>
    </svg>
  );
};

export  default  Icon;