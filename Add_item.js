import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ItemListManager = () => {
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded">
            <span className="text-green-500 font-bold">H</span>
          </div>
          <CardTitle className="text-green-500">Item List Manager</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter item"
              className="w-full"
            />
            <Button 
              onClick={handleAddItem}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Add Item
            </Button>
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
      </CardContent>
    </Card>
  );
};

export default ItemListManager;