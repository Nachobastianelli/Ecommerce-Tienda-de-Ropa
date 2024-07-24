const InvoiceItem = ({ name, quantity, price, total }) => {
  return (
    <tr>
      <td className="py-4 text-gray-700">{name}</td>
      <td className="py-4 text-gray-700">{quantity}</td>
      <td className="py-4 text-gray-700">${price}</td>
      <td className="py-4 text-gray-700">${total}</td>
    </tr>
  );
};

export default InvoiceItem;
