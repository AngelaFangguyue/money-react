
const generateOutput = (numValue:string,output:string)=>{
  console.log(numValue);
  switch (numValue){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if(output==='0'){
       return numValue;
      }else{
        return (output.concat(numValue));
      }
    case '.':
      if(output.indexOf('.')>=0){
        return output;
      }else{
       return output + '.';
      }
    case '清空':
      return '';
    case '删除':
      if(output.length<=1){
        return '';
      }else{
        return output.slice(0,-1);
      }
    default:
      return '';
  }

};
export default generateOutput;
