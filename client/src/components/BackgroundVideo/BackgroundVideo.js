import React from 'react';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo  = () => { "file:///Users/karleighponnock/Downloads/production%20ID_4820525.mp4"
    return (
        <div className={classes.Container} >
          <iframe title="main page video" src="https://embed.wave.video/5f3ac9ed46e0fb000dae39cc" style={{left: "800px"}} height="1500px" width="100%" frameborder="0" allow="loop; fullscreen"></iframe>
                </div>
    )
}

export default BackgroundVideo