import { Statistic } from "@/shared/type"
import orders from "@/assets/stats/orders.png"
import delivered from "@/assets/stats/delivered.png"
import cancelled from "@/assets/stats/cancelled.png"
import revenue from "@/assets/stats/revenue.png"
import Stat from "./Stat"


const StatsContainer = () => {

    const stats : Array<Statistic>=[
        {
            iconUrl: orders,
            name: 'Total Orders',
            value: '75',
            type: 'profit',
            percent: '3%'
        },
        {
            iconUrl: delivered,
            name: 'Total Delivered',
            value: '70',
            type: 'loss',
            percent: '3%'
        },
        {
            iconUrl: cancelled,
            name: 'Total Cancelled',
            value: '05',
            type: 'profit',
            percent: '3%'
        },
        {
            iconUrl: revenue,
            name: 'Total Revenue',
            value: '$12k',
            type: 'loss',
            percent: '3%'
        }
    ]


  return (
    <div className='stats-container'>
            {stats.map((stat : Statistic,index: number) =>(
                 <Stat key={index} stat={stat}/>
            ))}
    </div>
  )
}

export default StatsContainer