import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FileText, PenTool, BookOpen, BookMarked, Video, Book, Sparkles, Download, Eye, CheckCircle, XCircle, ChevronLeft, ExternalLink } from 'lucide-react';

function SubjectResourcesPage() {
    const { branch: branchParam, semester: semesterParam, subject: subjectParam } = useParams();

    const [resources, setResources] = useState(null);
    const [subjectTitle, setSubjectTitle] = useState('');
    const [loading, setLoading] = useState(true);

    // Helper to normalize strings for comparison (remove spaces, lowercase)
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const branches = {
        'cs': 'CS',
        'entc': 'ENTC',
        'it': 'IT',
        'mech': 'Mechanical',
        'civil': 'Civil',
        'ee': 'Electrical'
    };

    const resourceTypes = [
        {
            id: 'pyqs',
            name: 'Previous Year Questions',
            icon: <FileText className="w-6 h-6" />,
            gradient: 'from-blue-500 to-blue-600',
            key: 'pyqs'
        },
        {
            id: 'handwrittenNotes',
            name: 'Handwritten Notes',
            icon: <PenTool className="w-6 h-6" />,
            gradient: 'from-purple-500 to-purple-600',
            key: 'handwrittenNotes'
        },
        {
            id: 'decodeBooks',
            name: 'Decoded Books',
            icon: <BookOpen className="w-6 h-6" />,
            gradient: 'from-green-500 to-green-600',
            key: 'decodeBooks'
        },
        {
            id: 'fullBooks',
            name: 'Full Books',
            icon: <BookMarked className="w-6 h-6" />,
            gradient: 'from-orange-500 to-orange-600',
            key: 'fullBooks'
        },
        {
            id: 'videoLectures',
            name: 'Video Lectures',
            icon: <Video className="w-6 h-6" />,
            gradient: 'from-red-500 to-red-600',
            key: 'videoLectures'
        },
        {
            id: 'miscellaneous',
            name: 'Miscellaneous',
            icon: <Book className="w-6 h-6" />,
            gradient: 'from-pink-500 to-pink-600',
            key: 'miscellaneous'
        },
        {
            id: 'aiInsights',
            name: 'AI Driven Insights',
            icon: <Sparkles className="w-6 h-6" />,
            gradient: 'from-indigo-500 to-indigo-600',
            key: 'aiInsights'
        },
    ];

    useEffect(() => {
        setLoading(true);
        fetch('/subject.json')
            .then(response => response.json())
            .then(data => {
                // Find correct branch key (handle lowercase URL to uppercase JSON key)
                const branchKey = branches[branchParam] || Object.keys(data).find(key => normalize(key) === normalize(branchParam));

                if (branchKey && data[branchKey]) {
                    const branchData = data[branchKey];
                    // Determine semester (URL might be string '7', JSON key '7')
                    const semesterData = branchData[semesterParam];

                    if (semesterData) {
                        // Find subject matching the slug
                        // User slug: "cloud-computing" -> normalized: "cloudcomputing"
                        // JSON key: "Cloud Computing" -> normalized: "cloudcomputing"
                        const subjectKey = Object.keys(semesterData).find(key =>
                            normalize(key) === normalize(subjectParam)
                        );

                        if (subjectKey) {
                            setSubjectTitle(subjectKey);
                            setResources(semesterData[subjectKey] || null);
                        } else {
                            setResources(null);
                        }
                    }
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching resources:', error);
                setLoading(false);
            });
    }, [branchParam, semesterParam, subjectParam]);

    const handleViewPDF = (url) => {
        window.open(url, '_blank');
    };

    const handleDownloadPDF = (url, title) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getAvailableResources = () => {
        if (!resources) return [];
        return resourceTypes.filter(type =>
            resources[type.key] && resources[type.key].length > 0
        );
    };

    const getUnavailableResources = () => {
        if (!resources) return resourceTypes;
        return resourceTypes.filter(type =>
            !resources[type.key] || resources[type.key].length === 0
        );
    };

    const availableResources = getAvailableResources();
    const unavailableResources = getUnavailableResources();

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span>Back to Subjects</span>
                    </button>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{subjectTitle || subjectParam}</h1>
                    <p className="text-gray-600">{branchParam.toUpperCase()} - Semester {semesterParam}</p>
                </div>

                {/* Available Resources */}
                {availableResources.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Available Resources</h2>
                        </div>

                        <div className="space-y-8">
                            {availableResources.map((resourceType) => {
                                const items = resources[resourceType.key];
                                return (
                                    <div key={resourceType.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                        {/* Resource Type Header */}
                                        <div className={`bg-gradient-to-r ${resourceType.gradient} p-6`}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                    <div className="text-white">
                                                        {resourceType.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">{resourceType.name}</h3>
                                                    <p className="text-white/90 text-sm">{items.length} {items.length === 1 ? 'item' : 'items'} available</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Resource Items */}
                                        <div className="p-6">
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="group border-2 border-gray-200 rounded-xl p-5 hover:border-gray-900 hover:shadow-md transition-all duration-200"
                                                    >
                                                        <div className="flex items-start gap-3 mb-4">
                                                            <div className={`w-10 h-10 bg-gradient-to-br ${resourceType.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                                                <FileText className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                                                                    {item.title}
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => handleViewPDF(item.url)}
                                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                                                            >
                                                                <Eye className="w-4 h-4" />
                                                                View
                                                            </button>
                                                            <button
                                                                onClick={() => handleDownloadPDF(item.url, item.title)}
                                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium"
                                                            >
                                                                <Download className="w-4 h-4" />
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Unavailable Resources */}
                {unavailableResources.length > 0 && (
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <XCircle className="w-6 h-6 text-gray-400" />
                            <h2 className="text-2xl font-bold text-gray-600">Coming Soon</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {unavailableResources.map((resourceType) => (
                                <div
                                    key={resourceType.id}
                                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 opacity-60"
                                >
                                    <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                                        <div className="text-gray-400">
                                            {resourceType.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-500 mb-2">
                                        {resourceType.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Resources not available yet
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* No Resources Available */}
                {!resources && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                        <XCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-600 mb-2">No Resources Found</h3>
                        <p className="text-gray-500">
                            Resources for this subject are not available yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SubjectResourcesPage;