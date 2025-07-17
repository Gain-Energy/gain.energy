import img1 from '../img/news-1.jpg'
import img2 from '../img/news-2.jpg'
import img3 from '../img/news-3.jpg'
const screenWidth = window.innerWidth

const featuresTexts = [
    {
        id: 1,
        top: screenWidth <= 1024 ? '60px' : '40px',
        header: 'AI Agent Marketplace',
        imageSrc: img1,
        text: 'Upstrima Marketplace provides access to numerous ready-to-use practical AI Agents. Each AI Agent functions as a micro AI app that is data-driven and focused on executing a specific task. The Marketplace features a diverse range of AI Agents, including those for report summarization, data analytics, and task automation. These AI Agents produce results that can be further refined and exported from Upstrima. FIND THE AGENT YOU NEED OR ASK US TO BUILD A CUSTOM AGENT FOR YOU!'
    },
    {
        id: 2,
        top: screenWidth <= 1024 ? '95px' : '135px',
        header: 'Static and Live AI Agents',
        imageSrc: img2,
        text: 'The Marketplace comes pre-loaded with impactful AI agents, both static and live. Static agents are great for offset analysis, well planning, reporting and so on. However, Live AI Agents can connect to any WITSML and perform critical tasks in real-time, such as data QA/QC, drilling risks forecasting, predictive maintenance, geosteering, visualizations and much more.'
    },
    {
        id: 3,
        top: screenWidth <= 1024 ? '135px' : '230px',
        header: 'Data Sources and Processing',
        imageSrc: img3,
        text: 'Working with large variety of data types and sources - we make it easy by supporting different data sources: manual upload, Gdrive, One Drive, Sharepoint, SQL database or WITSML stream. No pre-processing needed. UPSTRIMA will automatically recognize industry specific formats (DDR, DMR, LAS, DLIS, etc) and will process a Drilling Report as a Drilling Report, not as a pdf.'
    },
    {
        id: 4,
        top: screenWidth <= 1024 ? '175px' : '320px',
        header: 'Specialized AI Assistant',
        imageSrc: img1,
        text: 'Our AI Assistant is pre-trained on a verified Upstrima Knowledge Base, assembled by our engineers and partners. This approach ensures consistent and repeatable answers with high precision and low level of hallucinations. General queries, engineering calculations, or extracting insights from your historical or real-time well data – it’s all here.'
    },
    {
        id: 5,
        top: screenWidth <= 1024 ? '215px' : '415px',
        header: 'Third-Party AI Agent Listings on the Marketplace',
        imageSrc: img2,
        text: "Have you created an impressive application or utility that you wish to share with your colleagues or clients around the globe? We invite third-party developers and engineers from various sectors to showcase your applications on the Upstrima Marketplace. With the support of our AI engine, your applications will excel and deliver significant results for clients, while providing you with consistent revenue and recognition."
    },
    {
        id: 6,
        top: screenWidth <= 1024 ? '270px' : '550px',
        header: 'Customization and Support',
        imageSrc: img3,
        text: 'We provide extensive customization options to tailor our AI Agents to your specific requirements, challenges, and criteria, whether adapting existing AI Agents or creating entirely new ones. Let us manage the integration of various data sources, extract operational insights, and automate your specific tasks and workflows by developing customized AI Agents that are tested on your data and deployed on-site.'
    }
]

export default featuresTexts;