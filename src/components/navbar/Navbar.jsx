import './Navbar.css'
import { useState } from 'react';
import NavBar_Image from "../assests/Display.svg";
import Down_Image from "../assests/down.svg";
const groupOptions = [
    {
        label: "Status",
        value: "status",
    },
    {
        label: "User",
        value: "user",
    },
    {
        label: "Priority",
        value: "priority",
    }];
const orderOptions = [
    {
        label: "Priority",
        value: "priority",
    },

    {
        label: "Title",
        value: "title",
    }];


const Navbar = ({ group, order, onGroupchange, onOrderChange }) => {
    const [expandMore, setExpandMore] = useState(false);
    const [groupedBy, setGroupedBy] = useState(group);
    const [orderedBy, setOrderedBy] = useState(order);


    const handleGroupChange = (e) => {
        setGroupedBy(e.target.value);
        onGroupchange(e.target.value);
    }

    const handleOrderChange = (e) => {
        setOrderedBy(e.target.value);
        onOrderChange(e.target.value);
    }



    return (
        <div className='nav'>
            <div
                className='expand_btn'
                onClick={() => { setExpandMore(prev => !prev) }}
            >
                <img src={NavBar_Image} alt="Display" style={{ width: '20px', height: '20px' }} /> 
                <span>Display</span>
                <img src={Down_Image} alt="Display" style={{ width: '20px', height: '20px' }} /> 
            </div>

            {expandMore && <div className="dropdown" >
                <div className='display'>
                    <p>Grouping</p>
                    <select
                        name="group"
                        id="groupBy"
                        defaultValue={group}
                        onChange={handleGroupChange}>
                        {groupOptions.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.label}</option>
                        ))}

                    </select>
                </div>
                <div className='display'>
                    <p>Ordering</p>
                    <select
                        name="order"
                        id="orderBy"
                        defaultValue={order}
                        onChange={handleOrderChange}
                    >
                        {orderOptions.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>}
        </div>
    )
}
export default Navbar;