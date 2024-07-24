import InvoiceItem from "../invoiceItem/InvoiceItem";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useContext, useState, useEffect } from "react";
import {
  CautionIcon,
  CloseIcon,
  DeleteIcon,
  SurfBoardIcon,
  SurfCartel,
} from "../../icons/Icons";
import ErrorWinXp from "../errorWinXp/ErrorWinXp";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";
import FooterWinError from "../footerWinError/FooterWinError";

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Invoice = ({ invoice }) => {
  const { user } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = invoice.filter((inv) => inv.userId === user.id);
    setFilteredInvoices(filtered);
    setLoading(false);
  }, [invoice, user.id]);

  const clickHandler = () => {
    navigate("/home");
  };

  const formatId = (id) => {
    return id.toString().padStart(5, "0");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-1/3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="px-6 py-4">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 w-2/3"></div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // if (filteredInvoices.length <= 0) {
  //   return <ErrorWinXp />;
  // }

  const invoicesMapped = filteredInvoices.map((invoiceItem) => (
    <div key={invoiceItem.id} className="invoice">
      <div className="bg-[#EDE0D4] rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto gap-4 my-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <SurfCartel />
            <div className="text-gray-700 font-bold text-2xl">Waiikiki</div>
          </div>
          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">
              Date:{" "}
              {new Date(invoiceItem.createdAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </div>
            <div className="text-sm">
              Invoice #: INV{formatId(invoiceItem.id)}
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
          <div className="text-gray-700 mb-2">
            {toTitleCase(user.name) + " " + toTitleCase(user.lastname)}
          </div>
          <div className="text-gray-700 mb-2">{user.email}</div>

          <div className="text-gray-700 mb-2">Zeballos 1400</div>
          <div className="text-gray-700">Santa Fe, Argentina ❤️</div>
        </div>
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">
                Product
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">
                Quantity
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">Price</th>
              <th className="text-gray-700 font-bold uppercase py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItem.products.map((product, index) => (
              <InvoiceItem
                key={index}
                name={product.name}
                quantity={product.quantity}
                price={product.price}
                total={product.price * product.quantity}
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Subtotal:</div>
          <div className="text-gray-700">${invoiceItem.totalPrice}</div>
        </div>
        <div className="text-right mb-8">
          <div className="text-gray-700 mr-2">Tax:</div>
          <div className="text-gray-700">$25.50</div>
        </div>
        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Total:</div>
          <div className="text-gray-700 font-bold text-xl">
            ${invoiceItem.totalPrice + 25.5}
          </div>
        </div>
        <div className="border-t-2 border-gray-300 pt-8 mb-8">
          <div className="text-gray-700 mb-2">
            Payment is due within 30 days. Late payments are subject to fees.
          </div>
          <div className="text-gray-700 mb-2">
            Please make checks payable to Your Company Name and mail to:
          </div>
          <div className="text-gray-700">123 Main St., Anytown, USA 12345</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {filteredInvoices.length > 0 ? (
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-5xl font-md p-4 pb-10 text-[#b08a72]">
            Facturas
          </h1>
          <div className="relative inline-flex max-h-12  mb-6">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#ffbb7c] via-[#e7e7e7] to-[#DDB892] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/home"
              title="Back to home"
              className="relative  px-4 py-2 text-lg font-bold text-[#9C6644] transition-all duration-200 bg-[#EDE0D4] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Home
            </a>
          </div>
        </div>
      ) : (
        <>
          <ErrorWinXp />
        </>
      )}
      {filteredInvoices.length > 0 && (
        <div className="flex items-center justify-center flex-col gap-6">
          {invoicesMapped}
        </div>
      )}
    </div>
  );
};

export default Invoice;
