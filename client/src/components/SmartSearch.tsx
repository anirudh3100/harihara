import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'wouter';

interface Project {
    id: string;
    name: string;
    location: string;
    type: string;
    price: string;
    size: string;
    metroDistance?: string;
}

const projects: Project[] = [
    {
        id: 'sri-sai-kakatiya',
        name: 'Sri Sai Kakatiya',
        location: 'Uppal in hyderabad',
        type: '2 & 3 BHK',
        price: 'Starting from 74 lakhs under 1 cr',
        size: '1335 to 1600 sft',
        metroDistance: '1.5 km from Uppal Metro near metro'
    },
    {
        id: 'vasant-villas',
        name: 'Vasant Villas',
        location: 'Keesara in hyderabad',
        type: '4 BHK Villas',
        price: '1.2 crore onwards under 1.5 cr',
        size: '187 & 223 Sq Yds'
    },
    {
        id: 'sri-sai-viradhya',
        name: 'Sri Sai Viradhya',
        location: 'Uppal in hyderabad',
        type: '3BHK',
        price: '1.25 crore onwards under 1.5 cr',
        size: '1820 - 2359 Sft',
        metroDistance: '2 km from Uppal Metro near metro'
    },
    {
        id: 'sri-sai-yatika',
        name: 'Sri Sai Yatika',
        location: 'Uppal in hyderabad',
        type: '2 & 3 BHK',
        price: 'Starting from 65 lakhs under 1 cr',
        size: '1335 to 1600 sft',
        metroDistance: '2.5 km from Uppal Metro near metro'
    }
];

const SmartSearch = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Project[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (query.trim()) {
            const searchTerms = query.toLowerCase().split(' ');
            const matches = projects.filter(project => {
                const projectText = `${project.name} ${project.location} ${project.type} ${project.price} ${project.size} ${project.metroDistance || ''}`.toLowerCase();
                return searchTerms.every(term => projectText.includes(term));
            });
            setSuggestions(matches);
        } else {
            setSuggestions([]);
        }
    }, [query]);

    return (
        <div className="relative w-full">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder="Search..."
                    className="w-full h-10 py-2 pl-10 pr-4 text-sm text-gray-700 bg-white border-0 rounded-full focus:outline-none focus:ring-0"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            </div>

            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl">
                    {suggestions.map((project) => (
                        <Link key={project.id} href={`/${project.id}`}>
                            <div className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0">
                                <div className="font-medium text-[#00827F]">{project.name}</div>
                                <div className="text-xs text-gray-600 mt-1">
                                    {project.type} | {project.location} | {project.price}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SmartSearch; 