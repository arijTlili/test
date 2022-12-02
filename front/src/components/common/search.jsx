import React, { Component } from 'react';
import "react-easter";

import './search2.css'

const EasterEgg = require("react-easter");

const code = ["c", "o", "f", "f", "e", "e"];
const code1 = ["a", "s", "t", "r", "o", "n", "o", "m", "e"];

const Search = ({value, onChange}) => {
    return (
        <div> 
        <input

            type="text"
            name='query'
            className='form-control my-3 table-secondary'
            placeholder="Serach..."
            value={value} 
            onChange={e => {onChange(e.currentTarget.value)
                if (e.currentTarget.value.toString() === "coffee") {
                    console.log("coffee");
                  }
                  else if(e.currentTarget.value.toString() === "astronome"){
                    console.log("astronome");
                  }}
            } />
            <EasterEgg keys={code} timeout={5000}>
        <div class="image">
          <div class="container">
            <div class="coffee-header">
              <div class="coffee-header__buttons coffee-header__button-one"></div>
              <div class="coffee-header__buttons coffee-header__button-two"></div>
              <div class="coffee-header__display"></div>
              <div class="coffee-header__details"></div>
            </div>
            <div class="coffee-medium">
              <div class="coffe-medium__exit"></div>
              <div class="coffee-medium__arm"></div>
              <div class="coffee-medium__liquid"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
              <div class="coffee-medium__cup"></div>
            </div>
            <div class="coffee-footer"></div>
          </div>
        </div>
      </EasterEgg >

      <EasterEgg keys={code1} timeout={5000}>
      <div class="backg">
    <div class="planet">
      <div class="r1"></div>
      <div class="r2"></div>
      <div class="r3"></div>
      <div class="r4"></div>
      <div class="r5"></div>
      <div class="r6"></div>
      <div class="r7"></div>
      <div class="r8"></div>
      <div class="shad"></div>
    </div>
    <div class="stars">
      <div class="s1"></div>
      <div class="s2"></div>
      <div class="s3"></div>
      <div class="s4"></div>
      <div class="s5"></div>
      <div class="s6"></div>
    </div>
    <div class="an">
      <div class="tank"></div>
      <div class="astro">
          
          <div class="helmet">
            <div class="glass">
              <div class="shine"></div>
            </div>
          </div>
          <div class="dress">
            <div class="c">
              <div class="btn1"></div>
              <div class="btn2"></div>
              <div class="btn3"></div>
              <div class="btn4"></div>
            </div>
          </div>
          <div class="handl">
            <div class="handl1">
              <div class="glovel">
                <div class="thumbl"></div>
                <div class="b2"></div>
              </div>
            </div>
          </div>
          <div class="handr">
            <div class="handr1">
              <div class="glover">
                <div class="thumbr"></div>
                <div class="b1"></div>
              </div>
            </div>
          </div>
          <div class="legl">
            <div class="bootl1">
              <div class="bootl2"></div>
            </div>
          </div>
          <div class="legr">
            <div class="bootr1">
              <div class="bootr2"></div>
            </div>
          </div>
          <div class="pipe">
            <div class="pipe2">
              <div class="pipe3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
<a class="hello" href="https://youtu.be/RLCKShRRwG0" target="_blank">
  <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;Watch More  
</a>


      </EasterEgg>
      </div>

        // <div className="form-outline">
        //     <input list="datalistOptions"  className="form-control" placeholder="Serach..." style={{ marginBottom: 15 }} />
        //     <datalist id="datalistOptions">{courses.map(course  => (
        //         <option key={course._id} value={course.title}/>
        //     ))}
                
        //     </datalist>
        // </div>
     );
}
 
export default Search;



// import React from "react";
// import "react-easter";
// const EasterEgg = require("react-easter");

// const code = ["c", "o", "f", "f", "e", "e"];
// const code1 = ["a", "s", "t", "r", "o", "n", "o", "m", "e"];

// function App({ value, onChange }) {
//   return (
//     <div>
//       <input
//         type="text"
//         name="query"
//         className="form-control my-3 table-secondary"
//         placeholder="Serach..."
//         value={value}
//         onChange={(e) => {
//           //onChange(e.currentTarget.value)
//           if (e.currentTarget.value.toString() === "coffee") {
//             console.log("coffee");
//           }
//           else if(e.currentTarget.value.toString() === "astronome"){
//             console.log("astronome");
//           }
//         }}
//       ></input>

//       <EasterEgg keys={code} timeout={5000}>
//         <div class="image">
//           <div class="container">
//             <div class="coffee-header">
//               <div class="coffee-header__buttons coffee-header__button-one"></div>
//               <div class="coffee-header__buttons coffee-header__button-two"></div>
//               <div class="coffee-header__display"></div>
//               <div class="coffee-header__details"></div>
//             </div>
//             <div class="coffee-medium">
//               <div class="coffe-medium__exit"></div>
//               <div class="coffee-medium__arm"></div>
//               <div class="coffee-medium__liquid"></div>
//               <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
//               <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
//               <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
//               <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
//               <div class="coffee-medium__cup"></div>
//             </div>
//             <div class="coffee-footer"></div>
//           </div>
//         </div>
//       </EasterEgg >

//       <EasterEgg keys={code1} timeout={5000}>
//       <div class="backg">
//     <div class="planet">
//       <div class="r1"></div>
//       <div class="r2"></div>
//       <div class="r3"></div>
//       <div class="r4"></div>
//       <div class="r5"></div>
//       <div class="r6"></div>
//       <div class="r7"></div>
//       <div class="r8"></div>
//       <div class="shad"></div>
//     </div>
//     <div class="stars">
//       <div class="s1"></div>
//       <div class="s2"></div>
//       <div class="s3"></div>
//       <div class="s4"></div>
//       <div class="s5"></div>
//       <div class="s6"></div>
//     </div>
//     <div class="an">
//       <div class="tank"></div>
//       <div class="astro">
          
//           <div class="helmet">
//             <div class="glass">
//               <div class="shine"></div>
//             </div>
//           </div>
//           <div class="dress">
//             <div class="c">
//               <div class="btn1"></div>
//               <div class="btn2"></div>
//               <div class="btn3"></div>
//               <div class="btn4"></div>
//             </div>
//           </div>
//           <div class="handl">
//             <div class="handl1">
//               <div class="glovel">
//                 <div class="thumbl"></div>
//                 <div class="b2"></div>
//               </div>
//             </div>
//           </div>
//           <div class="handr">
//             <div class="handr1">
//               <div class="glover">
//                 <div class="thumbr"></div>
//                 <div class="b1"></div>
//               </div>
//             </div>
//           </div>
//           <div class="legl">
//             <div class="bootl1">
//               <div class="bootl2"></div>
//             </div>
//           </div>
//           <div class="legr">
//             <div class="bootr1">
//               <div class="bootr2"></div>
//             </div>
//           </div>
//           <div class="pipe">
//             <div class="pipe2">
//               <div class="pipe3"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
// <a href="https://youtu.be/RLCKShRRwG0" target="_blank">
//   <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;Watch More  
// </a>


//       </EasterEgg>


//     </div>
//   );
// }

// export default App;