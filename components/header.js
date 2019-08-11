
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <div className="header section">
      <img className="logo" src="/static/Logo.jpg" alt="" />
    </div>
    <style jsx>{`
      .logo {
        margin-bottom: 15px;
      }
      .title {
        font-weight: bold;
        color: #282828;
      }
      .header {
        text-align: center;
        background-color: white;
        color: black;
      }
    `}</style>

  </div>
)

export default Header 