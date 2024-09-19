import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [users, setUsers] = useState([]);
  const [group, setGroup] = useState('status');
  const [order, setOrder] = useState('priority');

  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  }

  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await res.json();
        setTasks(data.tickets); 
        setUsers(data.users);
      } catch (error) {
        console.error("Unable to fetch data!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App scroll-container">
      <Navbar 
        group={group} 
        order={order} 
        onGroupChange={handleGroupChange} 
        onOrderChange={handleOrderChange} 
      />
    </div>
  );
}

export default App;
