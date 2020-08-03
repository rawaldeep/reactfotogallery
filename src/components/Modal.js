import React from 'react';
import {motion} from 'framer-motion';

export default function Modal({selectedImg, setSelectedImg, handleDelete}) {
    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
        
    }
    return (
        <motion.div className='backdrop' onClick={handleClick}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
        <div onClick={handleDelete} className='closebtn'><span>Delete</span></div>
            <motion.img src={selectedImg} alt='enlarged pic'
                initial={{y: "-100vh"}}
                animate={{y: "0"}}
                transition={{
                    type: "tween",
                    stiffness: 260,
                    damping: 20
                }}
            />
            
        </motion.div>
    )
}
