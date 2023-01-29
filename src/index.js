import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import "./index.css";
// import App from './App';

import MovieCards from './MovieCards';
import Navbar from './Navbar';

import movieData from './MovieData';



// JSX Code ==> this code internally convert into Pure 'React Code' by "Babel" it is a JS Compiler. 
//ReactDom.render(<h1><b>Hello,<br /> Vishal Tawar</b></h1>,
//   document.getElementById("root"));

// Pure React Code
// ReactDom.render(React.createElement("h1", null, "Hello Shubbhu"),
//  document.getElementById("root"));

// Pure JavaScript
// var h1=document.createElement("h1");
// h1.innerHTML="Hello, Shingham";
// document.getElementById("root").appendChild(h1);

// But inside React we only write 'JSX' Code. 'Babel' convert JSX --> React

// ***********************************************************************//
// Chalange Task 1 :- show Developer Subject in order list form.
/*
ReactDom.render(
<div>
    <h1>FullStack Developer in Java subject's :- </h1>
    
    <ol>
        <h3>
        <li>SQL</li>
        <li>CORE JAVA</li>
        <li>WEB TECHNOLOGY</li>
        <li>ADVANCE JAVA</li>
        </h3>
    </ol>
    
</div>
,document.getElementById("root"));
*/
// ***********************************************************************//
// Task 2:- Show Your Details usig JSX Expresion. 
/* const name="Vishal Tawar";
 var age=25;
 const loc="Dhule, Maharastra";
 ReactDom.render(
         <React.Fragment>
             <h1> Hello, My Name is {name} and I am from {`${loc}`} and I am {age} year old.</h1>
         </React.Fragment>

     ,document.getElementById("root")
 );*/
// ***********************************************************************//
// Chalange Task 3 :- show time and date with your name.
/*const name="Vishal Tawar";
const date=new Date().toLocaleDateString();
const time= new Date().toLocaleTimeString();

    ReactDom.render(
    <>
    <h1>{` My Name Is ${name}.`}</h1>
    <p>{`todays Date is ${date}`}</p>
    <p>{`current time is ${time}`}</p>
    </>
    ,document.getElementById("root"));*/

// ***********************************************************************//
//  Task 4 :- add Image's

/*
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/350";
const img3 = "https://picsum.photos/300/400";
const img4 = "https://picsum.photos/350/450";
ReactDom.render(
    <>
        <h1 className="heading">Lorem Image's :-</h1>
        <div className='imgdiv'>
            <img className='img' src={img4} />
            <img className='img' src={img3} />
            <img className='img' src={img2} />
            <img className='img' src={img1} />
        </div>
    </>
    , document.getElementById("root"));
    */

// ***********************************************************************//
// Chalange Task 4 :- show time wise Greting ex. Good Morning, Good Afternnon & so on.

/*
let greeting = " ";
let time = new Date();
let hour = time.getHours();
const css={ };

if (hour > 1 && hour < 12) {
    greeting = "Good  Morning";
    css.color="green";
} else if (hour >= 12 && hour < 19) {
    greeting = "Good  Afternoon";
    css.color="#ffbc00";
} else {
    greeting = "Good  Night";
    css.color="black";
}

ReactDom.render(
    <div className='heading'>    
        <h1 contentEditable="true" >Hello vishal, <span style={css}>{greeting}</span></h1>
    </div>
    , document.getElementById("root")
);
*/
// ***********************************************************************//
// task 5:-Create Component's use in App.js and 'render' here.

// ReactDom.render(<App />, document.getElementById('root'));

// ***********************************************************************//
// Chalange task 6:-Create Calculator using import  & export& Component's.

//  ReactDom.render(<App/>
// ,document.getElementById("root"));

// ***********************************************************************//
//  task 7:-Develop Movies Card using Component's .


ReactDom.render(
    <>
        <Navbar />
        <div className='prop_card'>
            {movieData.map((mdata)=>{
                return (
                    <MovieCards
                        key={mdata.id}
                        img={mdata.img}
                        title={mdata.title}
                        info={mdata.info}
                        link={mdata.link}
                    />
                )
            })}
        </div>
    </>
    , document.getElementById("root"));
