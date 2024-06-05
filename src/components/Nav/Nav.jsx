import "./NavStyle.css";

function Nav() {
  return (
    <section id="nav">
        <div className="-brand">
            <div className="-ham">
                <img src="hamburger-menu.svg" alt="" />
            </div>
            <div className="-logo">
                <img src="logo.svg" alt="" />
            </div>
        </div>
        <div className="-center">
            <div className="-search">
                <div className="-search-box">
                    <input type="text" className="-search-input" />
                </div>
                <div className="-btn">
                    <img src="search.svg" alt="" />
                </div>
            </div>
            <div className="-voice">
                <img src="mic.svg" alt="" />
            </div>
        </div>
        <div className="-end">
            <div className="-end-item">
                <img src="create-video.png" alt="" />
            </div>
            <div className="-end-item">
                <img src="bell.svg" alt="" />
            </div>
            <div className="-end-item">
                <img src="profile.svg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Nav;