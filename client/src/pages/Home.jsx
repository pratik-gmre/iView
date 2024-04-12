import React from 'react'
import { Sidebar } from '../components/Home/Sidebar'
import { RightSidebar } from '../components/Home/RightSidebar'
import { Feed } from '../components/Home/Feed'

export const Home = () => {
  return (
    <div className='bg-[#15202B] text-white'> 
    <div className='flex  justify-between h-screen w-[80%] m-auto'>
<Sidebar/>

<Feed/>
<RightSidebar/>

</div>
    </div>
  )
}
