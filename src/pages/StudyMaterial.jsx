// import React, { useState } from 'react';
// import { BookOpen, FileText, PenTool, Book, BookMarked, Video, Sparkles, CheckCircle, XCircle, ChevronRight, ArrowRight } from 'lucide-react';

// function StudyMaterialPage() {
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [selectedSemester, setSelectedSemester] = useState(null);

//   const branches = [
//     { id: 'cs', name: 'Computer Science', short: 'CS', available: false },
//     { id: 'entc', name: 'Electronics & Telecommunication', short: 'ENTC', available: true },
//     { id: 'it', name: 'Information Technology', short: 'IT', available: false },
//     { id: 'mechanical', name: 'Mechanical Engineering', short: 'MECH', available: false },
//     { id: 'civil', name: 'Civil Engineering', short: 'CIVIL', available: false },
//     { id: 'electrical', name: 'Electrical Engineering', short: 'EE', available: false },
//   ];

//   const semesters = [
//     { id: 1, name: 'Semester 1', available: false },
//     { id: 2, name: 'Semester 2', available: false },
//     { id: 3, name: 'Semester 3', available: false },
//     { id: 4, name: 'Semester 4', available: false },
//     { id: 5, name: 'Semester 5', available: false },
//     { id: 6, name: 'Semester 6', available: false },
//     { id: 7, name: 'Semester 7', available: true },
//     { id: 8, name: 'Semester 8', available: false },
//   ];

//   const materialTypes = [
//     { 
//       id: 'pyqs', 
//       name: 'Previous Year Questions',
//       shortName: 'PYQs',
//       icon: <FileText className="w-8 h-8" />, 
//       available: true,
//       description: 'Access previous year question papers',
//       gradient: 'from-blue-500 to-blue-600'
//     },
//     { 
//       id: 'handwritten', 
//       name: 'Handwritten Notes',
//       shortName: 'Notes',
//       icon: <PenTool className="w-8 h-8" />, 
//       available: false,
//       description: 'Student-contributed handwritten notes',
//       gradient: 'from-purple-500 to-purple-600'
//     },
//     { 
//       id: 'decoded', 
//       name: 'Decoded Books',
//       shortName: 'Decoded',
//       icon: <BookOpen className="w-8 h-8" />, 
//       available: false,
//       description: 'Simplified and decoded textbooks',
//       gradient: 'from-green-500 to-green-600'
//     },
//     { 
//       id: 'fullbooks', 
//       name: 'Full Books',
//       shortName: 'Books',
//       icon: <BookMarked className="w-8 h-8" />, 
//       available: false,
//       description: 'Complete reference textbooks',
//       gradient: 'from-orange-500 to-orange-600'
//     },
//     { 
//       id: 'videos', 
//       name: 'Video Lectures',
//       shortName: 'Videos',
//       icon: <Video className="w-8 h-8" />, 
//       available: false,
//       description: 'Curated video lecture collections',
//       gradient: 'from-red-500 to-red-600'
//     },
//     { 
//       id: 'misc', 
//       name: 'Miscellaneous',
//       shortName: 'Misc',
//       icon: <Book className="w-8 h-8" />, 
//       available: false,
//       description: 'Additional study resources',
//       gradient: 'from-pink-500 to-pink-600'
//     },
//     { 
//       id: 'ai', 
//       name: 'AI Driven Insights',
//       shortName: 'AI Insights',
//       icon: <Sparkles className="w-8 h-8" />, 
//       available: false,
//       description: 'Smart study recommendations',
//       gradient: 'from-indigo-500 to-indigo-600'
//     },
//   ];

//   const availableBranches = branches.filter(b => b.available);
//   const unavailableBranches = branches.filter(b => !b.available);
//   const availableSemesters = semesters.filter(s => s.available);
//   const unavailableSemesters = semesters.filter(s => !s.available);
//   const availableMaterials = materialTypes.filter(m => m.available);
//   const unavailableMaterials = materialTypes.filter(m => !m.available);

//   const handleMaterialClick = (material) => {
//     if (material.available) {
//       // In real app, use: navigate(`/${selectedBranch.short}/${selectedSemester.id}/${material.id}`)
//       const url = `/${selectedBranch.short}/${selectedSemester.id}/${material.id}`;
//       console.log('Navigating to:', url);
//       alert(`Redirecting to: ${url}\n\nIn your actual React Router setup, this will navigate to the material page.`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Study Material</h1>
//           <p className="text-gray-600">Select your branch and semester to access study resources</p>
//         </div>

//         {/* Branch Selection */}
//         {!selectedBranch && (
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Branch</h2>

//             {/* Available Branches */}
//             <div className="mb-8">
//               <div className="flex items-center gap-2 mb-4">
//                 <CheckCircle className="w-5 h-5 text-green-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">Available Branches</h3>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {availableBranches.map((branch) => (
//                   <button
//                     key={branch.id}
//                     onClick={() => setSelectedBranch(branch)}
//                     className="group p-6 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-md transition-all duration-200 text-left"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-900 group-hover:text-white transition-colors">
//                         {branch.short}
//                       </span>
//                       <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
//                     </div>
//                     <h4 className="font-semibold text-gray-900">{branch.name}</h4>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Unavailable Branches */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <XCircle className="w-5 h-5 text-gray-400" />
//                 <h3 className="text-lg font-semibold text-gray-600">Content Coming Soon</h3>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {unavailableBranches.map((branch) => (
//                   <div
//                     key={branch.id}
//                     className="p-6 border-2 border-gray-100 rounded-xl bg-gray-50 opacity-60 cursor-not-allowed"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
//                         {branch.short}
//                       </span>
//                     </div>
//                     <h4 className="font-semibold text-gray-500">{branch.name}</h4>
//                     <p className="text-xs text-gray-400 mt-2">Not available yet</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Semester Selection */}
//         {selectedBranch && !selectedSemester && (
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-1">Select Semester</h2>
//                 <p className="text-sm text-gray-600">Branch: {selectedBranch.name}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedBranch(null)}
//                 className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 Change Branch
//               </button>
//             </div>

//             {/* Available Semesters */}
//             <div className="mb-8">
//               <div className="flex items-center gap-2 mb-4">
//                 <CheckCircle className="w-5 h-5 text-green-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">Available Semesters</h3>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {availableSemesters.map((semester) => (
//                   <button
//                     key={semester.id}
//                     onClick={() => setSelectedSemester(semester)}
//                     className="group p-6 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-md transition-all duration-200"
//                   >
//                     <div className="text-3xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors mb-2">
//                       {semester.id}
//                     </div>
//                     <div className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
//                       {semester.name}
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Unavailable Semesters */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <XCircle className="w-5 h-5 text-gray-400" />
//                 <h3 className="text-lg font-semibold text-gray-600">Content Coming Soon</h3>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {unavailableSemesters.map((semester) => (
//                   <div
//                     key={semester.id}
//                     className="p-6 border-2 border-gray-100 rounded-xl bg-gray-50 opacity-60 cursor-not-allowed"
//                   >
//                     <div className="text-3xl font-bold text-gray-300 mb-2">
//                       {semester.id}
//                     </div>
//                     <div className="text-sm font-medium text-gray-400">
//                       {semester.name}
//                     </div>
//                     <p className="text-xs text-gray-400 mt-2">Not available yet</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Material Type Selection */}
//         {selectedBranch && selectedSemester && (
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-1">Choose Study Material Type</h2>
//                 <p className="text-sm text-gray-600">
//                   {selectedBranch.name} - {selectedSemester.name}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setSelectedSemester(null)}
//                 className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 Change Semester
//               </button>
//             </div>

//             {/* Available Materials */}
//             <div className="mb-8">
//               <div className="flex items-center gap-2 mb-6">
//                 <CheckCircle className="w-5 h-5 text-green-600" />
//                 <h3 className="text-lg font-semibold text-gray-900">Available Resources</h3>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {availableMaterials.map((material) => (
//                   <button
//                     key={material.id}
//                     onClick={() => handleMaterialClick(material)}
//                     className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${material.gradient}`}
//                   >
//                     <div className="relative z-10">
//                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
//                         <div className="text-white">
//                           {material.icon}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-2">
//                         {material.name}
//                       </h3>
//                       <p className="text-sm text-white/90 mb-4">
//                         {material.description}
//                       </p>
//                       <div className="flex items-center gap-2 text-white font-medium">
//                         <span className="text-sm">View Resources</span>
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Unavailable Materials */}
//             {unavailableMaterials.length > 0 && (
//               <div>
//                 <div className="flex items-center gap-2 mb-6">
//                   <XCircle className="w-5 h-5 text-gray-400" />
//                   <h3 className="text-lg font-semibold text-gray-600">Coming Soon</h3>
//                 </div>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {unavailableMaterials.map((material) => (
//                     <div
//                       key={material.id}
//                       className="relative overflow-hidden rounded-2xl p-6 text-left bg-gray-100 opacity-60 cursor-not-allowed"
//                     >
//                       <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
//                         <div className="text-gray-400">
//                           {material.icon}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-500 mb-2">
//                         {material.name}
//                       </h3>
//                       <p className="text-sm text-gray-400 mb-4">
//                         {material.description}
//                       </p>
//                       <div className="text-xs text-gray-400 font-medium">
//                         Not available yet
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudyMaterialPage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, PenTool, Book, BookMarked, Video, Sparkles, CheckCircle, XCircle, ChevronRight, ArrowRight } from 'lucide-react';

function StudyMaterialPage() {
    const [selectedBranch, setSelectedBranch] = useState(() => {
        const saved = localStorage.getItem('selectedBranch');
        return saved ? JSON.parse(saved) : null;
    });
    const [selectedSemester, setSelectedSemester] = useState(() => {
        const saved = localStorage.getItem('selectedSemester');
        return saved ? JSON.parse(saved) : null;
    });
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);

    // Persist state changes
    useEffect(() => {
        if (selectedBranch) {
            localStorage.setItem('selectedBranch', JSON.stringify(selectedBranch));
        } else {
            localStorage.removeItem('selectedBranch');
        }
    }, [selectedBranch]);

    useEffect(() => {
        if (selectedSemester) {
            localStorage.setItem('selectedSemester', JSON.stringify(selectedSemester));
        } else {
            localStorage.removeItem('selectedSemester');
        }
    }, [selectedSemester]);

    const branches = [
        { id: 'cs', name: 'Computer Science', short: 'CS', apiKey: 'CS', available: false },
        { id: 'entc', name: 'Electronics & Telecommunication', short: 'ENTC', apiKey: 'ENTC', available: true },
        { id: 'it', name: 'Information Technology', short: 'IT', apiKey: 'IT', available: false },
        { id: 'mechanical', name: 'Mechanical Engineering', short: 'MECH', apiKey: 'Mechanical', available: false },
        { id: 'civil', name: 'Civil Engineering', short: 'CIVIL', apiKey: 'Civil', available: false },
        { id: 'electrical', name: 'Electrical Engineering', short: 'EE', apiKey: 'Electrical', available: false },
    ];

    const semesters = [
        { id: 1, name: 'Semester 1', available: false },
        { id: 2, name: 'Semester 2', available: false },
        { id: 3, name: 'Semester 3', available: false },
        { id: 4, name: 'Semester 4', available: false },
        { id: 5, name: 'Semester 5', available: false },
        { id: 6, name: 'Semester 6', available: false },
        { id: 7, name: 'Semester 7', available: true },
        { id: 8, name: 'Semester 8', available: false },
    ];

    const availableBranches = branches.filter(b => b.available);
    const unavailableBranches = branches.filter(b => !b.available);
    const availableSemesters = semesters.filter(s => s.available);
    const unavailableSemesters = semesters.filter(s => !s.available);

    // Fetch subjects when branch and semester are selected
    useEffect(() => {
        if (selectedBranch && selectedSemester) {
            setLoading(true);
            fetch('/subject.json')
                .then(response => response.json())
                .then(data => {
                    const branchData = data[selectedBranch.apiKey];
                    if (branchData) {
                        const semesterData = branchData[selectedSemester.id.toString()];
                        const subjectList = semesterData ? Object.keys(semesterData) : [];
                        setSubjects(subjectList);
                    } else {
                        setSubjects([]);
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching subjects:', error);
                    setSubjects([]);
                    setLoading(false);
                });
        }
    }, [selectedBranch, selectedSemester]);

    const navigate = useNavigate();

    const handleSubjectClick = (subject) => {
        // Format subject name for URL (replace spaces with hyphens, lowercase)
        const subjectSlug = subject.toLowerCase().replace(/\s+/g, '-');
        const url = `/${selectedBranch.short.toLowerCase()}/${selectedSemester.id}/${subjectSlug}`;
        console.log('Navigating to:', url);
        navigate(url);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Study Material</h1>
                    <p className="text-gray-600">Select your branch and semester to access study resources</p>
                </div>

                {/* Branch Selection */}
                {!selectedBranch && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Branch</h2>

                        {/* Available Branches */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Available Branches</h3>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {availableBranches.map((branch) => (
                                    <button
                                        key={branch.id}
                                        onClick={() => setSelectedBranch(branch)}
                                        className="group p-6 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-md transition-all duration-200 text-left"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                                {branch.short}
                                            </span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900">{branch.name}</h4>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Unavailable Branches */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <XCircle className="w-5 h-5 text-gray-400" />
                                <h3 className="text-lg font-semibold text-gray-600">Content Coming Soon</h3>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {unavailableBranches.map((branch) => (
                                    <div
                                        key={branch.id}
                                        className="p-6 border-2 border-gray-100 rounded-xl bg-gray-50 opacity-60 cursor-not-allowed"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                                                {branch.short}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-gray-500">{branch.name}</h4>
                                        <p className="text-xs text-gray-400 mt-2">Not available yet</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Semester Selection */}
                {selectedBranch && !selectedSemester && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Select Semester</h2>
                                <p className="text-sm text-gray-600">Branch: {selectedBranch.name}</p>
                            </div>
                            <button
                                onClick={() => setSelectedBranch(null)}
                                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Change Branch
                            </button>
                        </div>

                        {/* Available Semesters */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Available Semesters</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {availableSemesters.map((semester) => (
                                    <button
                                        key={semester.id}
                                        onClick={() => setSelectedSemester(semester)}
                                        className="group p-6 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="text-3xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors mb-2">
                                            {semester.id}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                                            {semester.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Unavailable Semesters */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <XCircle className="w-5 h-5 text-gray-400" />
                                <h3 className="text-lg font-semibold text-gray-600">Content Coming Soon</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {unavailableSemesters.map((semester) => (
                                    <div
                                        key={semester.id}
                                        className="p-6 border-2 border-gray-100 rounded-xl bg-gray-50 opacity-60 cursor-not-allowed"
                                    >
                                        <div className="text-3xl font-bold text-gray-300 mb-2">
                                            {semester.id}
                                        </div>
                                        <div className="text-sm font-medium text-gray-400">
                                            {semester.name}
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2">Not available yet</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Subject Selection */}
                {selectedBranch && selectedSemester && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Select Subject</h2>
                                <p className="text-sm text-gray-600">
                                    {selectedBranch.name} - {selectedSemester.name}
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedSemester(null);
                                    setSubjects([]);
                                }}
                                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Change Semester
                            </button>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                            </div>
                        ) : subjects.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {subjects.map((subject, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSubjectClick(subject)}
                                        className="group p-6 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all duration-200 text-left"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <BookOpen className="w-6 h-6 text-white" />
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {subject}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            View study materials
                                        </p>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <XCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Subjects Found</h3>
                                <p className="text-sm text-gray-500">
                                    No subjects available for this semester yet.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudyMaterialPage;