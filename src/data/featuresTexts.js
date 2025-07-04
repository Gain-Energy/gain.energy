const screenWidth = window.innerWidth

const featuresTexts = [
    {
        id: 1,
        top: screenWidth <= 1024 ? '60px' : '90px',
        header: 'Data and Document Processing',
        text: 'Upload your drilling reports, mud logging reports, well plans, LAS time or depth series data, operational procedures, safety policies, corporate guidelines, technical manuals, and more—no pre-processing needed. UPSTRIMA classifies and extracts knowledge from any data source.'
    },
    {
        id: 2,
        top: screenWidth <= 1024 ? '115px' : '225px',
        header: 'Specialized AI Assistant',
        text: 'Based on the custom-made OGAI 3.1 Engineer LLM Framework and pre-trained on a verified knowledge base, our intelligent assistant answers your general queries, performs precise engineering calculations, executes generative tasks, and extracts insights from your historical or real-time well data.'
    },
    {
        id: 3,
        top: screenWidth <= 1024 ? '155px' : '320px',
        header: 'AI Agent Builder',
        text: 'UPSTRIMA comes pre-loaded with impactful AI agents, while allowing you to build custom agents to automate tasks of any complexity—from routine calculations or reporting to complex drilling, geosteering, or geological workflows and data analytics. Make agents work together to add a new level of power. Connect agents to WITSML feeds to create real-time widgets.'
    },
    {
        id: 4,
        top: screenWidth <= 1024 ? '195px' : '415px',
        header: 'AI Agent Marketplace',
        text: 'As our marketplace grows, you’ll gain access to thousands of AI agents built by colleagues and peers across the industry worldwide. Share your own agents internally within your company or externally with the entire industry to receive recognition and financial revenue. The marketplace is designed not only to solve problems but also to capture knowledge directly from SMEs within your organization.'
    },
    {
        id: 5,
        top: screenWidth <= 1024 ? '230px' : '505px',
        header: 'Quantum-Enhanced Drilling Optimization',
        text: "Upstrima employs Quantum Computing principles and qubits for data processing and engineering calculations tasks to consume large amounts of data in minutes and perform vast number of operations simultaneously. These essential building blocks make Upstrima fully ready and compatible for a new era of quantum computing."
    },
    {
        id: 6,
        top: screenWidth <= 1024 ? '290px' : '640px',
        header: 'Internal and Third-Party Software Integration',
        text: 'Create a customized, powerful workspace by integrating specialized third-party apps within UPSTRIMA. Use UPSTRIMA as a control center to operate various technical software through simple prompts. By bringing your favorite tools together, you can reduce time spent switching between applications, importing/exporting data, and learning new interfaces.'
    },
    {
        id: 7,
        top: screenWidth <= 1024 ? '345px' : '780px',
        header: 'Collaborative Streams',
        text: 'UPSTRIMA offers a new team-machine approach for collaboration. Build your own task-specific workspace, which we call Streams. Invite colleagues, clients, or customers, add relevant AI agents, share data or documents, and work together on what matters most: innovation and impact.'
    },
    {
        id: 8,
        top: screenWidth <= 1024 ? '385px' : '870px',
        header: 'Customization and Support',
        text: 'We provide full-scale customization services to tailor our AI solution to your very specific needs, challenges and requirements. Let us take care of connecting to your data infrastructure, processing your proprietary knowledge base; and building unique AI Agents to automate your specific workflows and processes.'
    }
]

export default featuresTexts;