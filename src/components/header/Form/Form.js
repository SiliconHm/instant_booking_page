import React from "react";

const Form = () => {

    return (
        <form id="front-search-form1" method="post" action="" className="mob-search mt-3 mb-3 p-2">
 			<input type="hidden" name="_token" value=""/>
               <div className="row">
                    <input className="form-control p-3 text-14 ml-3 m-0 text-white" id="front-search-field1" placeholder="Where are you going?" name="location" type="text" required/>

                    <button type="submit" className="btn vbtn-default p-2 ml-5 text-14">
                        <i className="fas fa-search"></i>
                    </button>
               </div>
        </form>
    )

}

export default Form