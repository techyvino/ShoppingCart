import React from 'react'

export default function NavBar(props) {
  const {countCartItems} = props;
  return (
    <header className="block row center">
     <div>
       <a href="#/">
          <h1>Space and Beauty</h1>
       </a>
     </div>
      <div>
        <a href="#/"> 
        
        Cart {" "}
        {countCartItems?
        (<button className="badge">{countCartItems}</button>)
        :
        ("")
        }

        </a>
        <a href="#/"> Sign-In</a>
      </div>
    </header>
  )
}
