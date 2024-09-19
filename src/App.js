import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');
  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');

  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  };

  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTasks(data.tickets); // Assuming you're using tickets from the API
      setUsers(data.users);
    } catch (error) {
      console.log("Unable to fetch data!", error);
    }
  };

  // Define status options based on the fetched tasks
  const statusOptions = ['Todo', 'In progress', 'Backlog'];
  const priorities = ['High', 'Medium', 'Low']; // Adjust this based on your logic

  return (
    <div className="App scroll-container">
      <Navbar 
        group={group} 
        order={order} 
        onGroupChange={handleGroupChange} 
        onOrderChange={handleOrderChange} 
      />
      <div className='container'>
        <div className='app'>
          {
            group === 'status' && statusOptions.map((status, id) => (
              <div key={id}>
                <h3>{status}</h3>
                {tasks.filter(task => task.status === status).map(task => (
                  <Card 
                    key={task.id} 
                    ticket={task} 
                    user={users.find(user => user.id === task.userId)} 
                  />
                ))}
              </div>
            ))
          }
          {
            group === 'user' && users.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                {tasks.filter(task => task.userId === user.id).map(task => (
                  <Card 
                    key={task.id} 
                    ticket={task} 
                    user={user} 
                  />
                ))}
              </div>
            ))
          }
          {
            group === 'priority' && priorities.map((priority, id) => (
              <div key={id}>
                <h3>{priority}</h3>
                {tasks.filter(task => {
                  const priorityValue = task.priority; // Assuming 0 is low, 1 is medium, 2 is high
                  return (priority === 'High' && priorityValue >= 2) ||
                         (priority === 'Medium' && priorityValue === 1) ||
                         (priority === 'Low' && priorityValue === 0);
                }).map(task => (
                  <Card 
                    key={task.id} 
                    ticket={task} 
                    user={users.find(user => user.id === task.userId)} 
                  />
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
