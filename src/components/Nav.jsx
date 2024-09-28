import React, { useState } from 'react'

export const Nav = () => {
    const [sidebar, setsidebar] = useState(false)
  return (
    <header>
    <div className='container'>
        <div className="logo">
            <h1><span>B</span>len</h1>
        </div>
        <nav>
            <button className='togglemenu' onClick={() => setsidebar(!sidebar)}>{sidebar ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }</button>
            <ul className={sidebar ? 'nav-sidebar' : 'nav-links'} onClick ={()=> setsidebar(false)}>
                <li><a href='/' >Home</a></li>
                <li><a href='/' >About</a></li>
                <li><a href='/' >Experience</a></li>
                <li><a href='/' >Work</a></li>
                <li><a href='/' >Contact</a></li>
            </ul>
        </nav>
        
    </div>
    </header>
    
  )
}
export default Nav;