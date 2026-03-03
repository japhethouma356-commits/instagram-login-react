import "./App.css"

function App (){
  return <div className="container">
    <div className="left">
      <h1>See everyday moments from <br /> your <span className="gg" >close friends</span> .</h1>
      <br />
      <img src="./images/image.png" alt="" />
    </div>
    <div className="right">
      <h2 >Log into Instagram</h2>
      <br />
      <input type="text" placeholder="Mobile number, username or email" />
      <br />
      <input type="password" placeholder="password" />
      <br />
      <button className="one" disabled >Log in</button>
      <br />
      <p>forgot password?</p>
      <br />
      <br />
      <br />
      <button className="three">log in with facebook</button>
      <br />
      <button className="two">Create a new account</button>
      <br />
      <h3>Meta</h3>
    </div>
  </div>
}

export default App