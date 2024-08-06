import StatsContainer from './stats/StatsContainer'
import NetProfit from './netprofit/NetProfit'
import ActivityContainer from './activity/ActivityContainer'
import Options from './options/Options'
import Orders from './orders/Orders'
import FeedbackContainer from './feedbacks/FeedbackContainer'

function MainContainer() {
  return (
    <div id='dashboard' className='dashboard'>
        <h2 className='tab-heading'>
            Dashboard
        </h2>

        <div className='compontents'>
            <div className='row'>
            <StatsContainer/>
            <NetProfit/>
            </div>
            
            <div className='row'>
              <ActivityContainer/>
              <Options/>
            </div>
            
            <div className='row'>
              <Orders/>
              <FeedbackContainer/>
            </div>
            
        </div>
        
    </div>
  )
}

export default MainContainer