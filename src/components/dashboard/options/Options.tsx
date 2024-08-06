import { option } from '@/shared/type'
import goal from '@/assets/options/goal.png'
import dish from '@/assets/options/dish.png'
import menu from '@/assets/options/menu.png'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Options = () => {
    
    const options: Array<option> = [
        {
            iconUrl: goal,
            name: 'Goal'
        },
        {
            iconUrl: dish,
            name: 'Popular Dishes'
        },
        {
            iconUrl: menu,
            name: 'Menu'
        }
    ]

  return (
    <div id='options'>
        <div className='options-container'>
            {options.map((option, index) => (
                <div key={index} className='option'>
                    <img alt='icon' className='icon' src={option.iconUrl} />
                    <span className='name'>{option.name}</span>
                    <ChevronRightIcon className='chevron-right' />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Options