import React from 'react'
import './appdownload.css'
import { asset } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br></br> Tomato App</p>
        <div className="app-download-platforms">
            <img src={asset.play_store} alt="" />
            <img src={asset.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload