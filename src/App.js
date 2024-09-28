
import React, { useState } from 'react';

import './Datatable.css';
import Datatable from './Datatable';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <Datatable />
    </div>
  );
};

export default App;
