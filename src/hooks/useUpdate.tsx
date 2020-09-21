import {useEffect,useRef} from 'react'

export const useUpdate = (fn1:()=>void,deps1:any)=>{
  const count = useRef(0);
  useEffect(()=>{
    count.current += 1;
  });
  useEffect(()=>{
    if (count.current>1){
      fn1();
    }
  },[deps1,fn1])
};