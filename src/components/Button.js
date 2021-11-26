import React from 'react'

const Button = () => {

    //handeling the phone number entered
    const handleSubmit = (e)=>{
        e.preventDefault();//preventing the page from reloading
        console.log('hello would');
    }

    return ( 
        <div className="button-wrapper">
            <form onSubmit = {handleSubmit}>
            <label>
                Enter a Phone Number
                <input type="text" name="name" />
            </label>
            <input onSubmit = {handleSubmit} type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Button;