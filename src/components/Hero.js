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
                        <input type="text" name="Hit enter to search" id="" value="Hit enter to search"/>
                    </div>
                </div>
                <div className="images">
                    <img src="https://i83.servimg.com/u/f83/20/31/79/72/rectan11.jpg" alt="" className="plato" />
                    <img src="https://i83.servimg.com/u/f83/20/31/79/72/rectan10.jpg" alt="" className="plato" />
                    <img src="https://i83.servimg.com/u/f83/20/31/79/72/rectan12.jpg" alt="" className="plato" />
                    <img src="https://i83.servimg.com/u/f83/20/31/79/72/rectan13.jpg" alt="" className="plato" />
                </div>
                <div className="mexican">
                    <p className="mexican">Mexican Grilled Corn Recipe</p>
                    <div className="mexStatsCont">
                        <div className="mexStat">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M15.5837 13.6039L9.30981 7.33L1.97981 0H1.40697L1.29 0.297219C0.981278 1.08172 0.849372 1.88409 0.90859 2.6175C0.97609 3.4535 1.29368 4.17728 1.82709 4.71069L7.54928 10.4329L8.30403 9.67813L13.5942 15.5935C14.1204 16.1198 15.0262 16.151 15.5837 15.5935C16.1323 15.045 16.1323 14.1525 15.5837 13.6039Z" fill="#FE4A51"/><path d="M4.89773 9.10767L0.416136 13.5893C-0.132364 14.1378 -0.132364 15.0303 0.416136 15.5788C0.937198 16.0999 1.8386 16.1459 2.40567 15.5788L6.88729 11.0972L4.89773 9.10767Z" fill="#FE4A51"/><path d="M15.3204 2.66398L12.7782 5.20617L12.115 4.54298L14.6572 2.00076L13.994 1.33757L11.4518 3.87976L10.7886 3.21657L13.3308 0.674387L12.6677 0.0112305L9.35173 3.32717C8.94608 3.73282 8.70386 4.27145 8.66961 4.84389C8.66095 4.98892 8.62808 5.13157 8.57355 5.26726L10.7276 7.42129C10.8633 7.3667 11.006 7.33385 11.151 7.3252C11.7234 7.29104 12.262 7.04876 12.6677 6.6431L15.9836 3.3272L15.3204 2.66398Z" fill="#FE4A51"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <p>4 Servicing</p>    
                        </div>
                        <div className="mexStat">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="#FE4A51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 4V8L10.6667 9.33333" stroke="#FE4A51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <p>40 Minute</p>
                        </div>
                        <div className="mexStat">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="#FE4A51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" stroke="#FE4A51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <p>Luice Fonci</p>
                        </div>
                    </div>
                    <button>View Recipes</button>
                </div>
                {/* <img src="https://i83.servimg.com/u/f83/20/31/79/72/backgr10.jpg" alt="Mexican Grilled Corn Recipe" /> */}
            </div>   
        </>
    )
}
