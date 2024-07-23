import React from 'react';
import { WaveRealIcon } from '../../icons/Icons';

const Purchases = () => {

    const purchases = []; // Suponemos que no hay compras registradas

    return (
        <div className="h-screen bg-yellow-200 p-8">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
                {purchases.length === 0 ? (
                    <div className="text-center">
                        <div className="flex items-center">
                            <WaveRealIcon />
                            <div className="text-gray-700 font-semibold text-lg">WAIKIKI</div>
                        </div>
                        <div className="text-gray-700 font-semibold text-lg">Order History</div>
                        <p className="text-gray-600 mt-4">You have no purchases made so far.</p>

                        <div className='mt-8'>
                            <a
                                href="/home"
                                className="py-2 px-4 flex items-center justify-center bg-indigo-500 text-white rounded-lg"
                            >
                                Back to Main Menu
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center">
                                <WaveRealIcon />
                                <div className="text-gray-700 font-semibold text-lg">WAIKIKI</div>
                            </div>
                            <div className="text-gray-700">
                                <div className="font-bold text-xl mb-2">INVOICE</div>
                                <div className="text-sm">Date: 01/05/2023</div>
                                <div className="text-sm">Invoice #: INV12345</div>
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-300 pb-8 mb-8">
                            <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
                            <div className="text-gray-700 mb-2">John Doe</div>
                            <div className="text-gray-700">johndoe@example.com</div>
                        </div>
                        <table className="w-full text-left mb-8">
                            <thead>
                                <tr>
                                    <th className="text-gray-700 font-bold uppercase py-2">Description</th>
                                    <th className="text-gray-700 font-bold uppercase py-2">Quantity</th>
                                    <th className="text-gray-700 font-bold uppercase py-2">Price</th>
                                    <th className="text-gray-700 font-bold uppercase py-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 text-gray-700">Product 1</td>
                                    <td className="py-4 text-gray-700">1</td>
                                    <td className="py-4 text-gray-700">$100.00</td>
                                    <td className="py-4 text-gray-700">$100.00</td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-gray-700">Product 2</td>
                                    <td className="py-4 text-gray-700">2</td>
                                    <td className="py-4 text-gray-700">$50.00</td>
                                    <td className="py-4 text-gray-700">$100.00</td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-gray-700">Product 3</td>
                                    <td className="py-4 text-gray-700">3</td>
                                    <td className="py-4 text-gray-700">$75.00</td>
                                    <td className="py-4 text-gray-700">$225.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mb-8">
                            <div className="text-gray-700 mr-2">Subtotal:</div>
                            <div className="text-gray-700">$425.00</div>
                        </div>
                        <div className="text-right mb-8">
                            <div className="text-gray-700 mr-2">Tax:</div>
                            <div className="text-gray-700">$25.50</div>
                        </div>
                        <div className="flex justify-end mb-8">
                            <div className="text-gray-700 mr-2">Total:</div>
                            <div className="text-gray-700 font-bold text-xl">$450.50</div>
                        </div>
                        <div className="border-t-2 border-gray-300 pt-8 mb-8">
                            <div className="text-gray-700 mb-2">
                                Payment is due within 30 days. Late payments are subject to fees.
                            </div>
                            <div className="text-gray-700 mb-2">
                                Make checks payable to your company and mail them.
                            </div>
                            <div className="text-gray-700">We hope you enjoy your purchase</div>
                        </div>
                        <div>
                            <a
                                href="/home"
                                className="py-2 px-4 flex items-center justify-center bg-indigo-500 text-white rounded-lg"
                            >
                                Back to Main Menu
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Purchases;
