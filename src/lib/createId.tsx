let id = 0;
//以函数的形式
const createId = () => {
  id += 1;
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
