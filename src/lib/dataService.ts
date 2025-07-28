// Data service to handle JSON file operations
const DATA_URL = '/data/data.json';

// In a real application, you would need a backend API to handle writing operations
// For this demo, we'll simulate the file update with localStorage as fallback
export const loadContentFromJSON = async () => {
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading content from JSON:', error);
        // Fallback to localStorage if JSON file can't be loaded
        const savedContent = localStorage.getItem('anoxesContent');
        if (savedContent) {
            return JSON.parse(savedContent);
        }
        throw error;
    }
};

// Note: In a production environment, this would send data to a backend API
// that would then update the JSON file on the server
export const saveContentToJSON = async (content: any) => {
    try {
        // For development, we'll save to localStorage as a fallback
        // In production, this would be an API call to update the JSON file
        localStorage.setItem('anoxesContent', JSON.stringify(content));

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        console.log('Content saved successfully (simulated)');
        return { success: true };
    } catch (error) {
        console.error('Error saving content:', error);
        throw error;
    }
};

// Default content structure
// export const getDefaultContent = () => ({
//     hero: {
//         title: "Intelligent Software Solutions",
//         subtitle: "End-to-end software development and digital transformation services across Healthcare, Industry 4.0, AI, and Medical Technology domains.",
//         primaryButton: "Explore Our Services",
//         secondaryButton: "View Portfolio"
//     },
//     services: [
//         {
//             id: 1,
//             title: "Healthcare Solutions",
//             description: "Digital transformation for healthcare providers with cutting-edge medical technology integration, HIPAA-compliant systems, and telemedicine platforms."
//         },
//         {
//             id: 2,
//             title: "Industry 4.0",
//             description: "Smart manufacturing solutions with IoT integration, predictive maintenance, real-time monitoring, and data-driven automation for operational excellence."
//         },
//         {
//             id: 3,
//             title: "Artificial Intelligence",
//             description: "Advanced AI/ML solutions using TensorFlow, PyTorch, and modern frameworks for intelligent automation, computer vision, and natural language processing."
//         },
//         {
//             id: 4,
//             title: "Custom IT Services",
//             description: "End-to-end software development with modern tech stacks including React, Python, Node.js, cloud-native architectures, and DevOps practices."
//         }
//     ],
//     technologies: [
//         { name: "React", category: "Frontend" },
//         { name: "TypeScript", category: "Frontend" },
//         { name: "Next.js", category: "Frontend" },
//         { name: "Python", category: "Backend" },
//         { name: "Django", category: "Backend" },
//         { name: "Node.js", category: "Backend" },
//         { name: "PostgreSQL", category: "Database" },
//         { name: "MongoDB", category: "Database" },
//         { name: "TensorFlow", category: "AI/ML" },
//         { name: "PyTorch", category: "AI/ML" },
//         { name: "AWS", category: "Cloud" },
//         { name: "Docker", category: "DevOps" }
//     ],
//     portfolio: [],
//     testimonials: [],
//     team: [],
//     contact: {
//         address: "Silicon Valley Tech Park, 123 Innovation Drive, Suite 500, San Jose, CA 95110",
//         phone: "+1 (555) 123-4567",
//         email: "contact@anoxes.com",
//         mapUrl: "https://maps.google.com"
//     },
//     blog: []
// });