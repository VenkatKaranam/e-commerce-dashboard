import { EnvelopeIcon, Cog6ToothIcon, BellIcon} from '@heroicons/react/24/outline'
import profile from '@/assets/people/profile.png'

const Profile = () => {
  return (
    <div className='profile'>
        <EnvelopeIcon className='icon' />
        <Cog6ToothIcon className='icon' />
        <BellIcon className='icon' />
        <img className='profile-image' alt='profile' src={profile} />
    </div>
  )
}

export default Profile