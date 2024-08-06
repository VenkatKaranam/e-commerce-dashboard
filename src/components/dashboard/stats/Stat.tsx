import { Statistic } from '@/shared/type'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import React from 'react'

type props ={
    stat: Statistic
}

const Stat = ({stat}: props) => {
  return (
    <div className='stat'>
                 <img className='icon' src={stat.iconUrl}/>
                 <p className='name'>{stat.name}</p>
                 <div className='value-container'>
                     <p className='value'>{stat.value}</p>
                     <div className='percent'>
                        {
                            stat.type === 'loss' ?
                            <ChevronDownIcon className="chevron down"/>
                            :<ChevronUpIcon className="chevron up"/>

                        }
                         <p className={`percent-value ${stat.type}`}>{stat.percent}</p>
                     </div>
                 </div>
             </div>
  )
}

export default Stat