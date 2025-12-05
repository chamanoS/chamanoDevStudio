import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG ICON REPLACEMENTS (for single-file self-contained use) ---

const IconWrapper = ({ children, className = 'w-5 h-5', size = '5' }) => {
    // FIX: Removed the extra curly braces around ${size} which caused the compilation error.
    const sizeClass = size ? `w-${size} h-${size}` : className; 
    return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    );
};

const FaPlus = (props) => (
    <IconWrapper {...props}>
        <path d="M12 4.5c.276 0 .5.224.5.5v6.5h6.5c.276 0 .5.224.5.5s-.224.5-.5.5h-6.5v6.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.5h-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6.5V5c0-.276.224-.5.5-.5z" />
    </IconWrapper>
);

const FaSearch = (props) => (
    <IconWrapper {...props}>
        <path d="M21.75 20.375l-4.72-4.72a7.71 7.71 0 10-1.378 1.378l4.72 4.72c.195.195.45.293.705.293s.51-.098.705-.293c.39-.39.39-1.025 0-1.415zM8.5 14.5a6 6 0 110-12 6 6 0 010 12z" />
    </IconWrapper>
);

const FaTimes = (props) => (
    <IconWrapper {...props}>
        <path d="M18.823 5.177a.5.5 0 00-.707 0L12 11.293 5.884 5.177a.5.5 0 00-.707.707L11.293 12l-6.116 6.116a.5.5 0 00.707.707L12 12.707l6.116 6.116a.5.5 0 00.707-.707L12.707 12l6.116-6.116a.5.5 0 000-.707z" />
    </IconWrapper>
);

const FaTag = (props) => (
    <IconWrapper {...props}>
        <path d="M11.646 2.354a.5.5 0 01.707 0l9 9a.5.5 0 010 .707l-9 9a.5.5 0 01-.707 0L2.354 11.646a.5.5 0 010-.707l9-9zM15 10a1 1 0 100-2 1 1 0 000 2z" />
    </IconWrapper>
);

const FaClock = (props) => (
    <IconWrapper {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 14.25c0 .41-.34.75-.75.75-.41 0-.75-.34-.75-.75V8.5c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75v7.75z" />
    </IconWrapper>
);

const FaPen = (props) => (
    <IconWrapper {...props}>
        <path d="M21 2L14 9l-3 3 7 7 3-3L22 4l-1-2zm-7 7l-5 5-2 2H3v-2l7-7 3-3 3 3z" />
    </IconWrapper>
);

const FaCloudUploadAlt = (props) => (
    <IconWrapper {...props}>
        <path d="M19.333 13.5c.37 0 .667.297.667.667v4.666c0 .37-.297.667-.667.667H4.667c-.37 0-.667-.297-.667-.667v-4.666c0-.37.297-.667.667-.667s.667.297.667.667v4.666h13.333v-4.666c0-.37.297-.667.666-.667zM12 2.5a.667.667 0 00-.472.195l-4.333 4.333a.667.667 0 00.943.943L11.333 4.88v8.44c0 .37.297.667.667.667s.667-.297.667-.667V4.88l3.195 3.195a.667.667 0 10.943-.943l-4.333-4.333A.667.667 0 0012 2.5z" />
    </IconWrapper>
);

const FaArrowRight = (props) => (
    <IconWrapper {...props}>
        <path d="M19.293 11.293l-4-4a1 1 0 00-1.414 1.414L15.586 11H5a1 1 0 000 2h10.586l-1.707 1.707a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414z" />
    </IconWrapper>
);

// --- STATIC DATA & CONSTANTS ---

// Map categories to user-facing labels
const CategoryToTag = {
    "Web Dev": "Full-Stack",
    "Data": "Data Science",
    "Business": "Business Logic",
    "AI": "AI/ML",
    "Case Studies": "Case Studies",
};
const AvailableCategories = ["All", "My Posts", ...Object.keys(CategoryToTag)];

// Static Articles Array
const staticArticles = [
    {
      id: 1,
      title: "How I Built a Retail Inventory Forecasting System",
      category: "Case Studies",
      summary: "A breakdown of the architecture, algorithms, and BI automation behind a 37% reduction in stock-outs.",
      content: "This project used a combination of ARIMA time-series models and machine learning classifiers to predict stock-outs with 92% accuracy. The architecture involved a Python/Pandas backend for processing and a Looker frontend for visualization. Scalability was achieved using distributed processing via Dask.",
      imageUrl: "https://placehold.co/600x400/22C55E/ffffff?text=Forecasting+System",
      authorId: 'user-0001', // Static ID for demonstration
      createdAt: new Date('2024-10-20T10:00:00Z'),
      status: 'published',
    },
    {
      id: 2,
      title: "Modern Frontend Architecture for 2025",
      category: "Web Dev",
      summary: "A clean explanation of scalable component-driven development and modern frontend patterns.",
      content: "In 2025, the focus has shifted entirely to micro-frontends and server components. We explore the benefits of decoupling large applications into smaller, independently deployable units, improving both developer experience and deployment speed. Frameworks like Next.js and Remix are leading this charge.",
      imageUrl: "https://placehold.co/600x400/3B82F6/ffffff?text=Frontend+Arch",
      authorId: 'user-0002', 
      createdAt: new Date('2024-11-15T10:00:00Z'),
      status: 'published',
    },
    {
      id: 3,
      title: "Power BI vs Looker vs Tableau — Which One Wins in 2025?",
      category: "Data",
      summary: "A practical comparison based on performance, cost, modeling, and real company use cases.",
      content: "While Power BI excels in its tight integration with the Microsoft ecosystem and cost-effectiveness, Looker's LookML modeling layer offers unparalleled consistency and scalability for large data teams. Tableau remains the king of ad-hoc visual exploration but often requires more manual setup.",
      imageUrl: "https://placehold.co/600x400/F59E0B/ffffff?text=Data+Visualization",
      authorId: 'user-0001', 
      createdAt: new Date('2024-09-01T10:00:00Z'),
      status: 'published',
    },
    {
      id: 4,
      title: "Automation Workflows That Save Teams 20+ Hours Weekly",
      category: "Business",
      summary: "From API connectors to background jobs — a look at how automation transforms teams.",
      content: "Implementing simple automated checks for common business processes, like lead assignment or invoice generation, can dramatically reduce manual overhead. We outline three key automation stacks using platforms like Zapier, Airflow, and custom serverless functions.",
      imageUrl: "https://placehold.co/600x400/EF4444/ffffff?text=Automation+Tips",
      authorId: 'user-0003',
      createdAt: new Date('2024-11-28T10:00:00Z'),
      status: 'published',
    },
];

const placeholderImageUrl = (text) => `https://placehold.co/600x400/1E3A8A/ffffff?text=${text.replace(/ /g, '+')}`;

// We will simulate a user ID for the "My Posts" filter
const SIMULATED_USER_ID = 'user-0001'; 


// --- COMPONENTS ---

// Generic Modal Component
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-auto dark:bg-gray-800"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {children}
            </motion.div>
        </div>
    );
};

// 1. Create Article Modal
const ArticleCreationModal = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [imageText, setImageText] = useState('New Insight');
    const [category, setCategory] = useState(Object.keys(CategoryToTag)[0]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCreateArticle = (e) => {
        e.preventDefault();
        if (!title || !summary || !content || !category) {
            setError('Please fill in all required fields.');
            return;
        }

        setLoading(true);
        setError('');

        const newArticle = {
            id: Date.now(), // Simple unique ID for local state
            title,
            summary,
            content,
            category,
            tag: CategoryToTag[category], 
            authorId: SIMULATED_USER_ID, // Assign to the simulated user
            imageUrl: placeholderImageUrl(imageText),
            createdAt: new Date(), 
            status: 'published',
        };

        onSave(newArticle);

        // Reset form
        setTitle('');
        setSummary('');
        setContent('');
        setImageText('New Insight');
        setCategory(Object.keys(CategoryToTag)[0]);
        setLoading(false);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-8">
                <div className="flex justify-between items-center border-b pb-3 mb-6 border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <FaCloudUploadAlt className="text-indigo-600"/> Publish New Article
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition">
                        <FaTimes size={6} />
                    </button>
                </div>

                <form onSubmit={handleCreateArticle} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Article Title (e.g., Scaling Python APIs)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <textarea
                        placeholder="Short Summary (Excerpt)"
                        rows="2"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <textarea
                        placeholder="Full Article Content (Markdown supported)"
                        rows="8"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 dark:bg-gray-700 dark:text-white"
                        required
                    />
                    
                    <div className='grid grid-cols-2 gap-4'>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 dark:bg-gray-700 dark:text-white appearance-none"
                        >
                            {Object.keys(CategoryToTag).map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                         <input
                            type="text"
                            placeholder="Image Placeholder Text"
                            value={imageText}
                            onChange={(e) => setImageText(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 dark:bg-gray-700 dark:text-white"
                        />
                    </div>


                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-lg font-bold transition ${
                            loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                        } text-white shadow-lg`}
                    >
                        {loading ? 'Publishing...' : 'Publish Article'}
                    </button>
                </form>
            </div>
        </Modal>
    );
};


// 2. Article Detail Modal
const ArticleDetailModal = ({ article, onClose }) => {
    if (!article) return null;

    // createdAt is always a Date object in this static version
    const formattedDate = article.createdAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <Modal isOpen={!!article} onClose={onClose}>
            <div className="relative p-0 max-h-[90vh] overflow-y-auto">
                {/* Image and Title Header */}
                <div className="relative">
                    <img 
                        src={article.imageUrl} 
                        alt={article.title} 
                        className="w-full h-64 object-cover rounded-t-xl" 
                        onError={(e) => e.target.src = placeholderImageUrl("Full Article Image")}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-8">
                        <h2 className="text-3xl font-bold text-white leading-snug drop-shadow-lg">{article.title}</h2>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6 border-b pb-4">
                        <span className="flex items-center gap-2 font-semibold text-indigo-600"><FaTag size={4} /> {article.category}</span>
                        <span className="flex items-center gap-2"><FaClock size={4} /> Published on {formattedDate}</span>
                    </div>

                    <div className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
                        <p className="italic text-lg mb-6 border-l-4 border-indigo-400 pl-4 bg-indigo-50 p-3 rounded-md dark:bg-gray-700 dark:border-indigo-300">
                            {article.summary}
                        </p>
                        
                        {/* Display content as plain text. */}
                        <p className="whitespace-pre-wrap">{article.content}</p> 
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 text-center rounded-b-xl">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 transition font-medium">
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

// 3. Article Card Component
const ArticleCard = ({ article, onReadMore }) => {
    const formattedDate = article.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layout
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col"
        >
            <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="h-56 w-full object-cover" 
                onError={(e) => e.target.src = placeholderImageUrl("Image Not Available")}
            />

            <div className="p-6 flex flex-col flex-grow space-y-3">
                {/* Category & Date */}
                <div className="flex justify-between items-center text-sm">
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                         {article.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><FaClock size={4} /> {formattedDate}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug flex-grow">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{article.summary}</p>

                <button
                    onClick={() => onReadMore(article)}
                    className="mt-4 self-start inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition duration-200"
                >
                    Read More <FaArrowRight size={4} />
                </button>
            </div>
        </motion.div>
    );
};


// --- MAIN COMPONENT ---
export default function Articles() {
    // 1. Local State for Articles
    const [articles, setArticles] = useState(staticArticles);
    
    // 2. Local State for UI/Filtering
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Simulated Auth/User
    const userId = SIMULATED_USER_ID; // Always logged in as this user for local demo

    // Logic to add a new article to local state
    const handleSaveNewArticle = (newArticle) => {
        // Prepend the new article to the list
        setArticles(prevArticles => [newArticle, ...prevArticles]);
    };


    // FILTERING & SORTING LOGIC (Computed Value)
    const filteredArticles = useMemo(() => {
        let filtered = articles.filter(a => a.status === 'published');

        if (selectedCategory === 'My Posts') {
            filtered = filtered.filter(a => a.authorId === userId);
        } else if (selectedCategory !== 'All') {
            filtered = filtered.filter(a => a.category === selectedCategory);
        }

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            filtered = filtered.filter(
                a => a.title.toLowerCase().includes(lowerCaseSearch) ||
                     a.summary.toLowerCase().includes(lowerCaseSearch)
            );
        }
        
        // Client-side sorting by creation date (newest first)
        filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        return filtered;
    }, [articles, selectedCategory, searchTerm, userId]);

    // Handlers
    const handleReadMore = (article) => {
        setSelectedArticle(article);
    };
    
    // --- RENDER UI ---
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 min-h-screen">
            
            {/* Hero & Call to Action */}
            <div className="text-center mb-16 mt-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Engineering <span className="text-indigo-600">Insights</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
                    A collaborative platform for sharing deep dives into modern tech architecture, data science, and business logic.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    {/* Create New Article Button */}
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition flex items-center gap-2 transform hover:scale-105"
                    >
                        <FaPlus size={4} /> Create New Article
                    </button>
                    <button
                        className={`px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium transition flex items-center gap-2 ${selectedCategory === 'My Posts' ? 'bg-indigo-100 dark:bg-indigo-900 border-indigo-500' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        onClick={() => setSelectedCategory('My Posts')}
                    >
                        <FaPen size={4} /> My Posts
                    </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Simulated User ID: {userId} (All posts are saved locally in your browser session)</p>
            </div>

            {/* Controls: Search and Filters */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md mb-12">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-2/5">
                        <FaSearch size={4} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles by title or summary..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="w-full md:w-3/5 flex overflow-x-auto py-2">
                        {AvailableCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 px-4 py-2 mx-1 rounded-full text-sm font-medium transition whitespace-nowrap ${
                                    selectedCategory === cat 
                                        ? 'bg-indigo-600 text-white shadow-md' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-indigo-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    {selectedCategory === 'All' ? 'Latest Insights' : selectedCategory} ({filteredArticles.length})
                </h2>
                
                <AnimatePresence>
                    {filteredArticles.length > 0 ? (
                        <motion.div 
                            layout 
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {filteredArticles.map(article => (
                                <ArticleCard 
                                    key={article.id} 
                                    article={article} 
                                    onReadMore={handleReadMore} 
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                            <FaSearch size={8} className="mx-auto text-4xl mb-4" />
                            <p className="text-lg font-semibold">No articles found matching your criteria.</p>
                            <p className="text-sm">Be the first to create an article in this category!</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Modals */}
            <ArticleCreationModal 
                isOpen={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)} 
                onSave={handleSaveNewArticle}
            />

            <ArticleDetailModal 
                article={selectedArticle} 
                onClose={() => setSelectedArticle(null)} 
            />

        </section>
    );
}