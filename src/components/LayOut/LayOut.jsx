import React from 'react'
import styles from './layout.module.css'



export default function LayOut(props) {
  
  return (
    <div className={styles.layout}>
    <div className={styles.header}>
       <span>문희 todoList</span>
       <p>포도말구 하고 싶은게 있눈댕</p>
       <span><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MDRfMzMg/MDAxNTkxMTk2ODU1OTY3.Pk7h3jOI0pUkzNpi5mrbdyJLui_b-F-_Shr1AsfX66Ug.M75aQ0nDCq2eAwa-cHvFNFPkCk_Xf98uxPEOQfxbEqQg.JPEG.umm-_-a/1591196854333.jpg?type=w800" alt="" /></span>
    </div>

    {/* FormController */}
    
   {props.children}



 </div>
  )
}
