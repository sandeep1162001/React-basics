import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// As App is just a function so we can also use our function

function MyApp(){
  return(
    <div>
      <h1>
        Custom app
      </h1>
    </div>
  )
}

// reactElement is an object.This will not run as we are using render of react which expect a function.
//But in our customReact it runs because we use our own render(customrender) which expect object.

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "Click me to visit google.",
// };

// To overcome this above problem we can do something like below:
// we can run anotherElement below in render after removing StrictMode and as single element(As jsx is passed as single parent).
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
// Summary of above two example is syntax that render or react expects.

//Now we will create elements according to what react accept(syntaxically correct).
//This will also run in same way as anotherElement.
const anotheruser ="sandeep"
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotheruser
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <MyApp/>
  </StrictMode>
)
