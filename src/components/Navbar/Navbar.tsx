import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <img src='logo.svg' alt='' />
          <span>Padmin</span>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="" className='icon' />
          <img src="/app.svg" alt="" className='icon' />
          <img src="/expand.svg" alt="" className='icon' />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img src="https://i.pinimg.com/1200x/c6/da/f0/c6daf08ee3cdace92467bb0a2bb11bd5.jpg" alt="" />
            <span>Jane</span>
          </div>
          <img src="/settings.svg" alt="" className='icon' />
        </div>
    </div>
  )
}

export default Navbar