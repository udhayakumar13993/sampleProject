import React from 'react';
 
import './homepage.component.scss';
import DirectoryComponent from '../Components/Directory/directory.component';
const HomePage=()=>{

    return(
        <div className="homePage">
            <DirectoryComponent/>
        </div> 
    )
}

export default HomePage;