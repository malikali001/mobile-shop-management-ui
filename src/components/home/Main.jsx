import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ContentTable from './ContentTable';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('Products');
  const [data, setData] = useState({
    Products: [
      { id: 1, name: 'Mobile A', price: '$500', stock: 25 },
      { id: 2, name: 'Mobile B', price: '$600', stock: 15 }
    ],
    Inventory: [
      { id: 1, item: 'Mobile A', quantity: 25 },
      { id: 2, item: 'Mobile B', quantity: 15 }
    ],
    Sales: [
      { id: 1, item: 'Mobile A', quantity: 5, total: '$2500' },
      { id: 2, item: 'Mobile B', quantity: 2, total: '$1200' }
    ]
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleSectionSelect = (section) => {
    setActiveSection(section);
  };

  const handleAddNewItem = () => {
    setIsEditing(true);
    setEditingItem({ id: 'new', name: '', price: '', stock: 0 });
  };

  const handleEditItem = (item) => {
    setIsEditing(true);
    setEditingItem(item);
  };

  const handleDeleteItem = (id) => {
    setData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[activeSection] = updatedData[activeSection].filter(item => item.id !== id);
      return updatedData;
    });
  };

  const handleSaveItem = (item) => {
    setData((prevData) => {
      const updatedData = { ...prevData };
      if (item.id === 'new') {
        item.id = prevData[activeSection].length + 1; // Assign new ID for new item
        updatedData[activeSection].push(item); // Add new item
      } else {
        updatedData[activeSection] = updatedData[activeSection].map((existingItem) =>
          existingItem.id === item.id ? item : existingItem
        );
      }
      return updatedData;
    });
    setIsEditing(false);
    setEditingItem(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <Sidebar
            sections={Object.keys(data)}
            activeSection={activeSection}
            onSectionSelect={handleSectionSelect}
          />
        </div>
        <div className="col-md-9 col-lg-10">
          <h2>{activeSection}</h2>
          {!isEditing ? (
            <>
              <button className="btn btn-success mb-3" onClick={handleAddNewItem}>
                Add New Item
              </button>
              <ContentTable
                data={data[activeSection]}
                onEdit={handleEditItem}
                onDelete={handleDeleteItem}
                onAdd={handleSaveItem}
              />
            </>
          ) : (
            <div className="p-3">
              <h3>{editingItem.id === 'new' ? 'Add New Item' : 'Edit Item'}</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveItem(editingItem);
                }}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={editingItem.price}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    value={editingItem.stock}
                    onChange={(e) => setEditingItem({ ...editingItem, stock: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {editingItem.id === 'new' ? 'Add Item' : 'Save Changes'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
