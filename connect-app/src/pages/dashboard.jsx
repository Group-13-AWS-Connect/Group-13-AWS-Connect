import { Navbar, NavbarItem } from '../ui-components/navbar';
import dashboard from '../assets/dashboard.svg'
import user from '../assets/user.svg'
import call from '../assets/call.svg'
import video_play from '../assets/video-play.svg'
import profile_2user from '../assets/profile-2user.svg'
import book from '../assets/book.svg'

export function Dashboard() {
    return (
        <Navbar>
        <NavbarItem icon={<img src={dashboard} size={20}/>} text='Dashboard'/>
        <NavbarItem icon={<img src={user} size={20}/>} text='Profile'/>
        <NavbarItem icon={<img src={call} size={20}/>} text='Queue'/>
        <NavbarItem icon={<img src={video_play} size={20}/>} text='Recordings'/>
        <NavbarItem icon={<img src={profile_2user} size={20}/>} text='Team Members'/>
        <NavbarItem icon={<img src={book} size={20}/>} text='Resources'/>
      </Navbar> 
    )
}