import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-md">
        <div className="bg-gray-800 p-4 border-b flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded">
            <span className="text-green-500 font-bold">H</span>
          </div>
          <h1 className="text-green-500 text-lg font-semibold">Item List Manager</h1>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter item"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring"
            />
            <button
              onClick={handleAddItem}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-all"
            >
              Add Item
            </button>
          </div>

          <div className="mt-4">
            {items.length > 0 ? (
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="p-2 bg-gray-50 rounded"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No items added yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
