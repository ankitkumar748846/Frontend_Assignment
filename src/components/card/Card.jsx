import './Card.css'
import { FaCircle } from "react-icons/fa";
const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    const userIntials = user?.name.split(' ').map(word => word.charAt(0)).join('');
    return (
        <div className='card'>
            <div className='header'>
                <p className='id'>{ticket?.id}</p>
               
            </div>
            <div className='info'>
                <span style={{ color: statusColor }}>{statusIcon}</span>
                <p>
                    {ticket?.title}
                </p>
            </div>
            <div className='footer'>
                {icon && <div>
                    {icon}
                </div>}
                <div className="tag">
                    <FaCircle />
                    {
                        ticket?.tag.map((tg, id) => (
                            <p key={id} >{tg}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Card;