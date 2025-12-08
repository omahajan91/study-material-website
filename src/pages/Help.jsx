import React, { useState } from 'react';
import { Check, Copy, Coffee, Heart } from 'lucide-react';

export default function Help() {
    const [copied, setCopied] = useState(false);

    // UPI Details
    const upiId = "omrmahajan@okhdfcbank";

    const handleCopyUPI = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
                {/* Compact Header */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white text-center flex items-center justify-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Coffee className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                        <h2 className="text-lg font-bold">Buy us a Chai ☕</h2>
                        <p className="text-orange-50 text-xs text-opacity-90">Support StudyHub developer</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 mb-4">
                            {/* QR Code Display */}
                            <img
                                src='qr photo.jpg'
                                alt="Payment QR Code"
                                className="w-40 h-40 object-contain"
                            />
                        </div>

                        <div className="w-full">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">UPI ID</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-1.5 rounded-lg">
                                <code className="flex-1 text-sm font-mono text-gray-800 px-2 truncate">
                                    {upiId}
                                </code>
                                <button
                                    onClick={handleCopyUPI}
                                    className="p-1.5 hover:bg-white rounded-md transition-colors shadow-sm"
                                    title="Copy UPI ID"
                                >
                                    {copied ? (
                                        <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-center bg-orange-50 rounded-lg p-3"> */}
                    {/* <p className="text-xs text-orange-800 font-medium">
                            Scan with any UPI app
                        </p>
                        <div className="flex justify-center gap-3 mt-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            <span className="text-[10px] font-bold text-gray-400">GPay</span>
                            <span className="text-[10px] font-bold text-gray-400">PhonePe</span>
                            <span className="text-[10px] font-bold text-gray-400">Paytm</span>
                        </div> */}
                    {/* </div> */}

                    {/* Instructions */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">
                                i
                            </span>
                            How to Pay
                        </h3>
                        <ol className="space-y-2 text-sm text-gray-900 ml-8">
                            <li className="list-decimal">Open any UPI app (GPay, PhonePe, Paytm, etc.)</li>
                            <li className="list-decimal">Scan the QR code above</li>
                            <li className="list-decimal">Enter ₹10 and complete the payment</li>
                        </ol>
                    </div>

                    {/* Thank You Message */}
                    <div className="text-center">
                        <Heart className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <p className="text-gray-900 font-medium">
                            Every chai counts! 💙
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            Your support keeps StudyHub running
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}