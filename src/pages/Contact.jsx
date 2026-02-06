import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Coffee, Github, Twitter, Linkedin, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7Zeb0Zy4vJe3ZunzHzEv38VBjVWtc7CGmATea31NgZlWsRxz21tPFzSnrxeYjSQ/exec";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // basic validation
            if (!formData.name || !formData.email || !formData.message) {
                alert("Please fill in name, email and message.");
                return;
            }

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // important for Apps Script
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify({
                    ...formData,
                    createdAt: new Date().toISOString(),
                }),
            });

            alert("Thank you for reaching out! Your message has been recorded.");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            name: 'GitHub',
            handle: '@omahajan91',
            action: 'Please give a Star',
            href: 'https://github.com/omahajan91/study-material-website',
            bgColor: 'bg-gray-900',
            hoverColor: 'hover:bg-gray-800'
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            name: 'Twitter',
            handle: '@Om_Mahajan9477',
            action: 'Do Follow',
            href: 'https://x.com/Om_Mahajan9477',
            bgColor: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            name: 'LinkedIn',
            handle: 'Om Mahajan',
            action: 'Let\'s connect',
            href: 'https://www.linkedin.com/in/om-mahajan-43805223b/',
            bgColor: 'bg-blue-700',
            hoverColor: 'hover:bg-blue-800'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
                    <p className="text-lg text-gray-600">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your query..."
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-sm border border-orange-200 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <Coffee className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Buy me a Chai ☕</h3>
                            </div>
                            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                Enjoying StudyHub? Support the project and help me keep it running with just ₹10!
                            </p>
                            <Link to="/help">
                                <button className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all duration-200 flex items-center justify-center gap-2">
                                    <Coffee className="w-4 h-4" />
                                    Support with ₹10
                                </button>
                            </Link>
                            <p className="text-xs text-gray-600 text-center mt-3">
                                Every chai counts! 💙
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Connect with Me</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Join the community and stay updated!
                            </p>

                            <div className="space-y-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block ${social.bgColor} ${social.hoverColor} text-white rounded-lg p-4 transition-all duration-200 transform hover:scale-105`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {social.icon}
                                                <div>
                                                    <div className="font-semibold text-sm">{social.name}</div>
                                                    <div className="text-xs opacity-90">{social.handle}</div>
                                                </div>
                                            </div>
                                            {social.name === 'GitHub' && (
                                                <Star className="w-5 h-5" />
                                            )}
                                        </div>
                                        <div className="text-xs mt-2 opacity-90">
                                            → {social.action}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;