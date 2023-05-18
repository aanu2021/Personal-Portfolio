import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import SharedLayOut from "./SharedLayOut";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Feedback from "./Feedback";
import Extra from "./Extra";

const App = ()=> {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayOut/>} >
                   <Route index element={<Home/>} />
                   <Route path="/services" element={<Services/>} />
                   <Route path="/about" element={<About/>} />
                   <Route path="/contact" element={<Contact/>} />
                   <Route path="/extra" element={<Extra/>} />
                   <Route path="/feedback" element={<Feedback/>} />
                   <Route path="*" element={<Error/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}

export default App;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Contact = () => {

//   const [item,setItem] = useState(
//     {
//         fullName : "",
//         contact : "",
//         email : "",
//         message : ""
//     }
//   );

//   const navigate = useNavigate();

//   const inputEvent = (event)=> {
//      const name = event.target.name;
//      const value = event.target.value;
//      setItem((oldItem)=>{
//         return {
//            ...oldItem,
//            [name] : value
//         };
//      })
//   }

//   const formSubmit = (event)=> {
//       event.preventDefault();
//       navigate("/feedback",{ state: { fullName : item.fullName , contact : item.contact , email : item.email , message : item.message } });
//   }

//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center contact-heading">Contact Us</h1>
//       </div>
//       <div className="container contact-div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             <form onSubmit={formSubmit}>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" className="form-label">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   name="fullName"
//                   value={item.fullName}
//                   onChange ={inputEvent}
//                   placeholder="Enter your name" required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" className="form-label">
//                   Contact No.
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   name="contact"
//                   value={item.contact}
//                   onChange ={inputEvent}
//                   placeholder="Enter your contact no." required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   name="email"
//                   value={item.email}
//                   onChange ={inputEvent}
//                   placeholder="Enter your email address" required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlTextarea1" className="form-label">
//                   Message
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   name="message"
//                   value={item.message}
//                   onChange ={inputEvent}
//                   rows="3"
//                 ></textarea>
//               </div>
//               <div className="col-12">
//                 <button className="btn-get-started" type="submit">
//                   Submit form
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;