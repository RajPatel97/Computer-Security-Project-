const fs = require('fs')


const test =()=>{
  let data = "this is another test";
  console.log('test is a go');
  fs.writeFile('./Output.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
}
export default test;
