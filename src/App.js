import './App.css';
import { useState} from 'react';
import Navbar from './components/navbar/Navbar';

function App() {
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
