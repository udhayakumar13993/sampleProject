import React from 'react';
 
import './homepage.component.scss';

const HomePage=()=>{

    return(
        <div className="homePage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DEMO1</h1>
                    <span className="subtitle">Sub content</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DEMO2</h1>
                    <span className="subtitle">Sub content2</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DEMO3</h1>
                    <span className="subtitle">Sub content2</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DEMO4</h1>
                    <span className="subtitle">Sub content2</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DEMO5</h1>
                    <span className="subtitle">Sub content2</span>
                </div>
            </div>
         </div>
        </div> 
    )
}

export default HomePage;