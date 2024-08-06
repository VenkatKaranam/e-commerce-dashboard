import { ChevronUpIcon } from '@heroicons/react/24/solid'
import ProgressBar from './ProgressBar'

const NetProfit = () => {
    const netProfit = {
        heading: 'Net Profit',
        value: '$ 6759.25',
        profitPercent: '3%',
        completedPercent : 70,
        description: '+The values here has been rounded off.'
    } 


  return (
    <div id='net_profit'>
        <div className='details'>
            <p className='heading'>{netProfit.heading}</p>
            <p className='value'>{netProfit.value}</p> 
            <div className='percent'>
                <ChevronUpIcon className="chevron up"/>
                <p className={`percent-value profit`}>{netProfit.profitPercent}</p>
            </div>
        </div>

        <ProgressBar value={75}/>
    </div>
  )
}

export default NetProfit