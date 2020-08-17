import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "file:///Users/karleighponnock/Downloads/production%20ID_4820525.mp4"
    return (
        <div className={classes.Container} >
          <iframe src="https://embed.wave.video/5f3ac9ed46e0fb000dae39cc" style={{left: "800px"}} height="1500px" width="1500px" frameborder="0" allow="loop; fullscreen"></iframe>
                </div>
    )
}

export default BackgroundVideo