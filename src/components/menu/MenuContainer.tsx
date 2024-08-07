import { ChartBarIcon, ClipboardDocumentCheckIcon, WalletIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeIconSolid } from '@heroicons/react/24/solid'

const MenuContainer = () => {
  return (
    <div id='menu' className='menu-bar'>
        <div className='tabs-container'>
        <HomeIconSolid className='icon active'/>
        <ChartBarIcon className='icon'/>
        <ClipboardDocumentCheckIcon className='icon'/>
        <WalletIcon className='icon'/>
        <ShoppingBagIcon className='icon'/>
        </div>
    </div>
  )
}

export default MenuContainer