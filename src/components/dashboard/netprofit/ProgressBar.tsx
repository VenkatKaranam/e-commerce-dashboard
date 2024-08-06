import { useEffect, useState } from "react";

type props = {
    value: number
}

const ProgressBar = ({value}: props ) => {

    const [progress, setProgress] = useState<number>(0)
    const dashArray = 2*Math.PI*40;
    const [dashOffSet, setDashOffSet] = useState<number>(0)

    useEffect(()=>{
       let timeOut = setTimeout(() =>{
            if (progress <= value){
                setProgress(progress+1)
            }
       }, 10)

       return ()=>{
        clearTimeout(timeOut)
       }
    },[progress])

    useEffect(() => {
        setDashOffSet(dashArray*(100- progress)/100)
    }, [progress])

  return (
    <div id='progress_bar' className='progress-bar'>
        <svg className="svg-pi">
            <circle 
            className='track-circle'  
            cx={50} 
            cy={50} 
            r={40}
            fill='transparent'
            strokeWidth={10}
             />

            <circle 
            className='progress-circle'
            cx={50} 
            cy={50} 
            r={40}
            fill='transparent'
            strokeWidth={10}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffSet}
            strokeLinecap="round"
            />
        </svg>
        <span className="center-label">
                <d className="progress-value">
                    {`${
                        progress > 100 ? 100 : progress
                    }%`}
                </d>

                <span>
                    Goal
                </span>
                <span>
                    Completed
                </span>
                
                
        </span>      
    </div>
  )
}

export default ProgressBar