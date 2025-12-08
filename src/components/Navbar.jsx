import React, { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/study-material", label: "Study Material" },
        { path: "/help", label: "Help" }
    ];

    const isActive = (path) => {
        if (path === "/" && location.pathname !== "/") return false;
        return location.pathname === path;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-sm shadow-sm"
                    : "bg-white border-b border-gray-100"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 font-semibold text-lg text-gray-900 hover:text-gray-700 transition-colors duration-200 group"
                >
                    <div className="p-1.5 bg-gray-900 rounded-md group-hover:bg-gray-800 transition-colors duration-200">
                        <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    StudyHub
                </Link>

                {/* Desktop Center links */}
                <div className="hidden md:flex gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? "text-gray-900"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {link.label}
                            {isActive(link.path) && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Right side button and mobile menu toggle */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/contribute"
                        className="hidden md:block px-4 py-1.5 rounded-md border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
                    >
                        Contribute
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-gray-700" />
                        ) : (
                            <Menu className="w-5 h-5 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-3 bg-white border-t border-gray-100 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contribute"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full px-3 py-2 mt-2 rounded-md border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
                    >
                        Contribute
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;