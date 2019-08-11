const Navbar = (props) => (
      
    <div className= "navbar"> 
      <nav className ="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#tagline">About</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="https://www.instagram.com/_gilbproducing/" target="_blank">Instagram</a>
        </div>
        <div className="navbar-item">
          <div className="field is-separated">
  <p className="control">
              <a
                className="button is-white"
                href="#submit">
                <span>Convert my file</span>
              </a>
              <a
                className="button is-white"
                href="https://soundcloud.com/user-403367525">
                <span>Soundcloud</span>
              </a>
  </p>
          </div>
        </div>
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
            </p>
          </div>
        </div>
    </nav>
  
    { <style jsx="true">{`
          {
              .elevator {
                text-align: center;
              }
              #twitter {
                  color: #55acee;
                  border-color: #55acee;
              }
              #twitter:hover {
                  background: #55acee;
                  border-color: #55acee;
                  color: white;
              }
              .navbar {
                { background-color: #f36d21; }
              }
              .navbar-item {
                { color: white;
                font-weight: bold;
              }
              img {
                height: 250px;
                border-radius: 50%;
              }
          }
        `}</style> }
       </div> 
  )
  
  export default Navbar