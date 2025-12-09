import React, { useState } from 'react';
import { Upload, Send, Heart, FileText, Users, Star, CheckCircle, ExternalLink, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContributePage() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Replace these with your actual links
  const GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/1smxfCWS8-DZaxnJmJU2206LpS-nQSmINmfKXdIbkncg/edit';
  const TELEGRAM_LINK = 'https://t.me/om_mahajan9477';

  const contributionMethods = [
    {
      id: 'google-form',
      title: 'Submit via Google Form',
      description: 'Fill out a simple form and upload your study materials',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      buttonText: 'Open Google Form',
      features: [
        'Easy to use form',
        'Upload multiple files',
        'Add subject details',
        'Track your submission'
      ]
    },
    {
      id: 'telegram',
      title: 'Send via Telegram',
      description: 'Quick and direct - send files directly to our Telegram',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      buttonText: 'Open Telegram',
      features: [
        'Instant delivery',
        'Direct communication',
        'Send multiple files',
        'Get quick feedback'
      ]
    }
  ];

  const impactStats = [
    { number: '500+', label: 'Students Helped' },
    { number: '200+', label: 'Resources Shared' },
    { number: '50+', label: 'Contributors' },
    { number: '100%', label: 'Free Access' }
  ];

  const contributionTypes = [
    { icon: <FileText className="w-6 h-6" />, title: 'Previous Year Questions', desc: 'Help others prepare better' },
    { icon: <FileText className="w-6 h-6" />, title: 'Handwritten Notes', desc: 'Share your study notes' },
    { icon: <FileText className="w-6 h-6" />, title: 'Books & References', desc: 'Upload textbooks and guides' },
    { icon: <FileText className="w-6 h-6" />, title: 'Video Links', desc: 'Share helpful lecture videos' }
  ];

  const handleMethodClick = (methodId) => {
    if (methodId === 'google-form') {
      window.open(GOOGLE_FORM_LINK, '_blank');
    } else if (methodId === 'telegram') {
      window.open(TELEGRAM_LINK, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Back Button */}
      <Link
        to="/study-material"
        className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 border border-gray-200 fixed"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Study Material</span>
      </Link>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium">Join Our Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contribute & Make a Difference
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Help fellow students by sharing your study materials. Your contribution can help thousands prepare better for their exams.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Contribution Methods */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Choose Your Contribution Method
            </h2>
            <p className="text-gray-600 text-lg">
              Pick the most convenient way for you to share resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contributionMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${method.color} p-8 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-white/90">{method.description}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {method.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleMethodClick(method.id)}
                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    {method.buttonText}
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Can Contribute */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What Can You Contribute?
            </h2>
            <p className="text-gray-600 text-lg">
              We accept various types of study materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4">
                  {type.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Contribution Guidelines
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✅ Do's</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Upload clear, readable PDFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Include subject name and semester</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Verify the content before uploading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Add your name for credit (optional)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">❌ Don'ts</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Upload copyrighted materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Share blurry or unreadable content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Upload irrelevant or spam files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Share personal information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Contribute Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl font-bold mb-4">Why Should You Contribute?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Help Others</h3>
              <p className="text-gray-300 text-sm">Your notes can help hundreds of students prepare better</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-semibold mb-2">Get Recognition</h3>
              <p className="text-gray-300 text-sm">Your contribution will be credited to you</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-semibold mb-2">Build Community</h3>
              <p className="text-gray-300 text-sm">Be part of a growing student community</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleMethodClick('google-form')}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contribute Now
            </button>
            <button
              onClick={() => handleMethodClick('telegram')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact on Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributePage;