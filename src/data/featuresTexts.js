import img11 from '../img/features/01/AI Agent Marketplace_01.png'
import img12 from '../img/features/01/AI Agent Marketplace_02.png'
import img13 from '../img/features/01/AI Agent Marketplace_03.png'
import img14 from '../img/features/01/AI Agent Marketplace_04.png'
import img21 from '../img/features/02/Static and Live AI Agents_01.png'
import img22 from '../img/features/02/Static and Live AI Agents_02.png'
import img23 from '../img/features/02/Static and Live AI Agents_03.png'
import img24 from '../img/features/02/Static and Live AI Agents_04.png'
import img25 from '../img/features/02/Static and Live AI Agents_05.png'
import img26 from '../img/features/02/Static and Live AI Agents_06.png'
import img27 from '../img/features/02/Static and Live AI Agents_07.png'
import img31 from '../img/features/03/Data Sources and Processing_01.png'
import img32 from '../img/features/03/Data Sources and Processing_02.png'
import img33 from '../img/features/03/Data Sources and Processing_03.png'
import img41 from '../img/features/04/Specialized AI Assistant_01.png'
import img42 from '../img/features/04/Specialized AI Assistant_02.png'
import img43 from '../img/features/04/Specialized AI Assistant_03.png'
import img44 from '../img/features/04/Specialized AI Assistant_04.png'
import img45 from '../img/features/04/Specialized AI Assistant_05.png'
import img51 from '../img/features/05/Third-Party AI Agent Listings on the Marketplace_01.png'
import img52 from '../img/features/05/Third-Party AI Agent Listings on the Marketplace_02.png'
import img53 from '../img/features/05/Third-Party AI Agent Listings on the Marketplace_03.png'
import img61 from '../img/features/06/Customization and Support.png'
const screenWidth = window.innerWidth

const featuresTexts = [
    {
        id: 1,
        top: screenWidth <= 1024 ? '30px' : '40px',
        header: 'AI Agent Marketplace',
        headerPopup: screenWidth <= 1024 ? <>AI Agent <br />Marketplace</> : <>AI Agent Marketplace</>,
        imageSrc: [img11, img12, img13, img14],
        text: 'Upstrima Marketplace provides access to numerous ready-to-use practical AI Agents. Each AI Agent functions as a micro AI app that is data-driven and focused on executing a specific task. The Marketplace features a diverse range of AI Agents, including those for report summarization, data analytics, and task automation. These AI Agents produce results that can be further refined and exported from Upstrima. FIND THE AGENT YOU NEED OR ASK US TO BUILD A CUSTOM AGENT FOR YOU!'
    },
    {
        id: 2,
        top: screenWidth <= 1024 ? '65px' : '135px',
        header: 'Static and Live AI Agents',
        headerPopup: screenWidth <= 1024 ? <>Static and Live <br />AI Agents</> : <>Static and Live AI Agents</>,
        imageSrc: [img21, img22, img23, img24, img25, img26, img27],
        text: 'The Marketplace comes pre-loaded with impactful AI agents, both static and live. Static agents are great for offset analysis, well planning, reporting and so on. However, Live AI Agents can connect to any WITSML and perform critical tasks in real-time, such as data QA/QC, drilling risks forecasting, predictive maintenance, geosteering, visualizations and much more.'
    },
    {
        id: 3,
        top: screenWidth <= 1024 ? '105px' : '230px',
        header: 'Data Sources and Processing',
        headerPopup: screenWidth <= 1024 ? <>Data Sources and <br />Processing</> : <>Data Sources and Processing</>,
        imageSrc: [img31, img32, img33],
        text: 'Working with large variety of data types and sources - we make it easy by supporting different data sources: manual upload, Gdrive, One Drive, Sharepoint, SQL database or WITSML stream. No pre-processing needed. UPSTRIMA will automatically recognize industry specific formats (DDR, DMR, LAS, DLIS, etc) and will process a Drilling Report as a Drilling Report, not as a pdf.'
    },
    {
        id: 4,
        top: screenWidth <= 1024 ? '145px' : '320px',
        header: 'Specialized AI Assistant',
        headerPopup: screenWidth <= 1024 ? <>Specialized <br />AI Assistant</> : <>Specialized AI Assistant</>,
        imageSrc: [img41, img42, img43, img44, img45],
        text: 'Our AI Assistant is pre-trained on a verified Upstrima Knowledge Base, assembled by our engineers and partners. This approach ensures consistent and repeatable answers with high precision and low level of hallucinations. General queries, engineering calculations, or extracting insights from your historical or real-time well data – it’s all here.'
    },
    {
        id: 5,
        top: screenWidth <= 1024 ? '185px' : '415px',
        header: 'Third-Party AI Agent Listings on the Marketplace',
        headerPopup: screenWidth <= 1024 ? <>Third-Party AI Agent <br />Listings on the Marketplace</> : <>Third-Party AI Agent Listings on the Marketplace</>,
        imageSrc: [img51, img52, img53],
        text: "Have you created an impressive application or utility that you wish to share with your colleagues or clients around the globe? We invite third-party developers and engineers from various sectors to showcase your applications on the Upstrima Marketplace. With the support of our AI engine, your applications will excel and deliver significant results for clients, while providing you with consistent revenue and recognition."
    },
    {
        id: 6,
        top: screenWidth <= 1024 ? '240px' : '550px',
        header: 'Customization and Support',
        headerPopup: screenWidth <= 1024 ? <>Customization <br />and Support</> : <>Customization and Support</>,
        imageSrc: [img61],
        text: 'We provide extensive customization options to tailor our AI Agents to your specific requirements, challenges, and criteria, whether adapting existing AI Agents or creating entirely new ones. Let us manage the integration of various data sources, extract operational insights, and automate your specific tasks and workflows by developing customized AI Agents that are tested on your data and deployed on-site.'
    }
]

export default featuresTexts;