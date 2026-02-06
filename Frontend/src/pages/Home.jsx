import React from 'react';
import { Link } from "react-router-dom";
import { BookOpen, FileText, Video, Brain, Users, CheckCircle, TrendingUp, Clock } from 'lucide-react';

function Home() {
    const features = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Organized Notes",
            description: "Well-structured notes for every subject, organized by branch and semester"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Previous Year Questions",
            description: "Extensive collection of PYQs to help you understand exam patterns"
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: "Video Lectures",
            description: "Curated video content from the best educators to supplement your learning"
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "AI-Powered Insights",
            description: "Smart recommendations and study plans tailored to your needs"
        }
    ];

    const benefits = [
        {
            icon: <CheckCircle className="w-5 h-5" />,
            text: "SPPU focused content"
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            text: "End sem oriented"
        },
        {
            icon: <Users className="w-5 h-5" />,
            text: "By students, for students"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            text: "100% free resources"
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            text: "No advertisements"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            text: "Regularly updated content"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-4 pt-4 pb-16 md:pt-8 md:pb-24">
                <div className="grid md:grid-cols-2 items-center gap-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Study smarter for your End Sem Exams
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Notes, PYQs, video lectures and AI-powered insights – all organized
                            for your branch and semester. Everything you need to ace your exams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/study-material"
                            >
                                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                                    Explore Study Material
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg aspect-square flex items-center justify-center">
                            <img src="newImageForWebsite.png" alt="" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-900 rounded-2xl opacity-10 -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-900 rounded-2xl opacity-10 -z-10"></div>
                    </div>
                </div>
            </section>

            {/* What We Provide Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Everything You Need to Excel
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Comprehensive resources designed specifically for SPPU students
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Why Choose StudyHub?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Built by students who understand what you actually need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="text-gray-900 mt-0.5">
                                    {benefit.icon}
                                </div>
                                <p className="text-gray-700 font-medium">
                                    {benefit.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Join thousands of students who are already using StudyHub to prepare better and score higher in their exams.
                        </p>
                        <Link to="/study-material">
                            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                Get Started Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
                            <div className="text-gray-600 text-sm">Study Resources</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</div>
                            <div className="text-gray-600 text-sm">Subjects Covered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
                            <div className="text-gray-600 text-sm">Free Access</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
                            <div className="text-gray-600 text-sm">Available</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;