import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="hero_container">
                <div className="menu">
                    <p className="logo">FOOBLO</p>
                    <div className="menu_option">
                        <p className="menu_op">Home</p>
                        <p className="menu_op">Recipes</p>
                        <p className="menu_op">Pages</p>
                        <p className="menu_op">About Me</p>
                        <p className="menu_op">Blog</p>
                        <p className="menu_op">Contact</p>
                    </div>
                    <div className="search">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#FE4A51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 14L11.1 11.1" stroke="#FE4A51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <input type="text" name="Hit enter to search" id="" value="Hit enter to search" />
                    </div>
                </div>
                <div className="images"></div>
                <div className="mexican"></div>
                {/* <img src="https://i83.servimg.com/u/f83/20/31/79/72/backgr10.jpg" alt="Mexican Grilled Corn Recipe" /> */}
            </div>   
        </>
    )
}
