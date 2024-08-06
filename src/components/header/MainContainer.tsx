import logo from '@/assets/logo.png'
import SearchBar from '@/components/header/SearchBar'
import Profile from '@/components/header/Profile'

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