import React, { useState } from 'react';
import './App.css';

let binfo = ["First Button", "Second Button", "Third Button"
  ];  

function App() {

    return (
      <div className="App">
        <header className="flexBox">
          <ExampleInteraction text="First Button" />   
          <ExampleInteraction text="Second Button"/>  
          <ExampleInteraction text="Third Button"/>  
        </header>
      </div>
    );

}

function ExampleInteraction(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  } 

  if(count > 0) {
    return (
      <div className="flexItem">
        <button id="first" onClick={handleClick}>
         CLICKED!
        </button>
      </div>
    )
  } else {
    return (
    <div className="flexItem">
      <button id="second" onClick={handleClick}>
        {props.text}
      </button>
    </div>
  );
}
}

export default App;

// {
//   id: "first",
//   text: 'First Button'
// },
// {
//   id: "second",
//   text: 'Second Button'
// },
// {
//   id: "third",
//   text: 'Third Button'
// },
// ];


// function App() {

//   return (
//     <div className="App">
//       <ButtonLayout/>
//     </div>
//   );
// };

// function createButton(singleButton) {
//   return (
//     <Button id={singleButton.id} text={singleButton.text}/>
//   )
// }

// function ButtonLayout() {
//   let buttons =  binfo.map(createButton);
//   return(
//     <div className="buttonlayout">
//         {binfo.map(item=>{
//           return Button(item);
//         })}
//     </div>
//   );
// }



// function Button(props) {
//   return(
//     <div className="button">
//       <button id={props.id} type="button">{props.text}</button>
//     </div>
//   )
// }


// // onClick="document.getElementsByClassName('button1').style.backgroundColor = 'red'

// export default App;
