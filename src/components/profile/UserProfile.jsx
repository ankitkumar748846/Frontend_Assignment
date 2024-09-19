import './UserProfile.css'
import { FaCircle } from 'react-icons/fa6'

const UserProfile = ({ intials, available, bgColor }) => {
    return (
        <div className='user'>
            <div className='icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='dot' style={available ? { color: "#50B053" } : {}}>
                <FaCircle />
            </div>
        </div>
    )
}

export default UserProfile;