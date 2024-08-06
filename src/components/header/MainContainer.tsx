import logo from '@/assets/logo.png'
import SearchBar from './SearchBar'
import Profile from './Profile'

function MainContainer() {
  return (
    <div className='header' id="header">
        <img className='logo' src={logo}/>
        <SearchBar/>
        <Profile/>
    </div>
  )
}

export default MainContainer