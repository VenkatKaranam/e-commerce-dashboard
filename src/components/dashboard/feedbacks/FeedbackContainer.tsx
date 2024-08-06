import { Feedback } from '@/shared/type'
import wade from '@/assets/people/wade.png'
import { StarIcon } from '@heroicons/react/24/solid'

const FeedbackContainer = () => {

    const feedbacks: Array<Feedback> =[
        {
            profileUrl: wade,
            name: 'Jenny Wilson',
            rating: 4,
            feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scalops which was awesome.lhadaburger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
        },
        {
            profileUrl: wade,
            name: 'Jenny Wilson',
            rating: 4,
            feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scalops which was awesome.lhadaburger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
        },
        {
            profileUrl: wade,
            name: 'Jenny Wilson',
            rating: 4,
            feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scalops which was awesome.lhadaburger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
        }
    ]

  return (
    <div id='feedbacks'>
        <h2 className='heading'>Customer's Feedback</h2>
        {feedbacks.map((feedback, index) => (
                    <div key={index} className='feedback-container'>
                        <div className='profile'>
                            <img className='image' src={feedback.profileUrl}/>
                            <span className='name'>{feedback.name}</span>
                        </div>

                        <div className='rating-container'>
                            {[...Array(5)].map((e, key) =>(
                                <StarIcon key={key} className={`star ${key < feedback.rating ? 'gold' : ''}`} />
                            ))}
                        </div>
                        
                        <div className='feedback'>
                            {feedback.feedback}
                        </div>
                    </div>
                ))}
    </div>
  )
}

export default FeedbackContainer