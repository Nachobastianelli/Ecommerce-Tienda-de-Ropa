import React, { useState } from "react";

const ManageCartsModal = ({ onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const toggleCheckbox = (value, amount) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
      setTotal(total - amount);
    } else {
      setSelectedItems([...selectedItems, value]);
      setTotal(total + amount);
    }
  };

  const handleConfirm = () => {
    console.log("Selected Items:", selectedItems);
    console.log("Total:", total);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-100 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        <header className="border-b border-gray-200 px-5 py-4">
          <div className="font-semibold text-gray-800">Manage Carts</div>
        </header>

        <div className="overflow-x-auto p-3">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
              <tr>
                <th></th>
                <th className="p-2">
                  <div className="text-left font-semibold">Product Name</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Quantity</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Total</div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold">Action</div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="p-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    value="id-1"
                    onChange={() => toggleCheckbox("id-1", 2890.66)}
                  />
                </td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">
                    Samsung Galaxy Note 4
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">1</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">
                    RM 2,890.66
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
                    <button>
                      <svg
                        className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    value="id-2"
                    onChange={() => toggleCheckbox("id-2", 120.5)}
                  />
                </td>
                <td className="p-2">
                  <div>
                    <div className="font-medium text-gray-800">
                      Logitech Keyboard
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">1</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">
                    RM 120.50
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
                    <button>
                      <svg
                        className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
          <div>Total</div>
          <div className="text-blue-600">RM {total.toFixed(2)}</div>
        </div>

        <div className="flex justify-end">
          <input
            type="hidden"
            className="border border-black bg-gray-50"
            value={selectedItems.join(",")}
          />
        </div>

        <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCartsModal;
