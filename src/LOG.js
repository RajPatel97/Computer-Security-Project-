

const logDateTime = () =>{
  //getting the date here
  console.log('hello from LOG.js')
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;

  //now call a func that adds the date and time to the database

  console.log(dateTime);//remove this later


}

 export default logDateTime;
