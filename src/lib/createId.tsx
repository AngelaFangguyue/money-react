let id =parseInt( window.localStorage.getItem("idmax1")||  '0');
//以函数的形式
const createId = () => {
  id += 1;
  window.localStorage.setItem("idmax1",id.toString());
  return id;
};

//以class类的形式
// class createId{
//   value:number;
//   constructor() {
//     id +=1;
//     this.value = id;
//   }
// }

export default createId;
