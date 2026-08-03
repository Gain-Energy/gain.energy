import img11 from "../img/features/01/AI Agent Marketplace_01.png";
import img12 from "../img/features/01/AI Agent Marketplace_02.png";
import img13 from "../img/features/01/AI Agent Marketplace_03.png";
import img21 from "../img/features/02/Static and Live AI Agents_01.png";
import img22 from "../img/features/02/Static and Live AI Agents_02.png";
import img23 from "../img/features/02/Static and Live AI Agents_03.png";
import img24 from "../img/features/02/Static and Live AI Agents_04.png";
import img31 from "../img/features/03/Data Sources and Processing_01.png";
import img32 from "../img/features/03/Data Sources and Processing_02.png";
import img41 from "../img/features/04/Specialized AI Assistant_01.png";
import img42 from "../img/features/04/Specialized AI Assistant_02.png";
import img51 from "../img/features/05/3rd Party AI Apps Listings on the Marketplace_01.png";
import img52 from "../img/features/05/3rd Party AI Apps Listings on the Marketplace_02.png";
import img53 from "../img/features/05/3rd Party AI Apps Listings on the Marketplace_03.png";
import img54 from "../img/features/05/3rd Party AI Apps Listings on the Marketplace_04.png";
import img61 from "../img/features/06/Customization and Support.png";
import img71 from "../img/features/07/Experts Network_01.jpg";
import img72 from "../img/features/07/Experts Network_02.jpg";
import img81 from "../img/features/08/AI Workflows_01.jpg";
import img82 from "../img/features/08/AI Workflows_02.jpg";
import img83 from "../img/features/08/AI Workflows_03.jpg";
import img84 from "../img/features/08/AI Workflows_04.jpg";
import img85 from "../img/features/08/AI Workflows_05.jpg";
const screenWidth = window.innerWidth;

const featuresTexts = [
  {
    id: 1,
    top: screenWidth <= 1024 ? "30px" : "40px",
    header: "AI Agents Marketplace",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          AI Agents <br />
          Marketplace
        </>
      ) : (
        <>AI Agents Marketplace</>
      ),
    imageSrc: [img11, img12, img13],
    text: "Upstrima Marketplace provides access to numerous ready-to-use practical AI Agents. Each AI Agent functions as a micro AI app that is data-driven and focused on executing a specific task. The Marketplace features a diverse range of AI Agents, including those for report summarization, data analytics, and task automation. These AI Agents produce results that can be further refined and exported from Upstrima. FIND THE AGENT YOU NEED OR ASK US TO BUILD A CUSTOM AGENT FOR YOU!",
  },
  {
    id: 2,
    top: screenWidth <= 1024 ? "65px" : "135px",
    header: "High Impact AI Agents",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          High Impact <br />
          AI Agents
        </>
      ) : (
        <>High Impact AI Agents</>
      ),
    imageSrc: [img21, img22, img23, img24],
    text: "The Marketplace comes pre-loaded with impactful AI agents, both static and live. Static agents are great for offset analysis, well planning, reporting and so on. However, Live AI Agents can connect to any WITSML and perform critical tasks in real-time, such as data QA/QC, drilling risks forecasting, predictive maintenance, geosteering, visualizations and much more.",
  },
  {
    id: 3,
    top: screenWidth <= 1024 ? "105px" : "230px",
    header: "Intelligent O&G Data Processing",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          Intelligent O&G <br />
          Data Processing
        </>
      ) : (
        <>Intelligent O&G Data Processing</>
      ),
    imageSrc: [img31, img32],
    text: "Working with large variety of data types and sources - we make it easy by supporting different data sources: manual upload, Gdrive, One Drive, Sharepoint, SQL database or WITSML stream. No pre-processing needed. UPSTRIMA will automatically recognize industry specific formats (DDR, DMR, LAS, DLIS, etc) and will process a Drilling Report as a Drilling Report, not as a pdf.",
  },
  {
    id: 4,
    top: screenWidth <= 1024 ? "145px" : "320px",
    header: "Specialized AI Assistant",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          Specialized <br />
          AI Assistant
        </>
      ) : (
        <>Specialized AI Assistant</>
      ),
    imageSrc: [img41, img42],
    text: "Our AI Assistant is pre-trained on a verified Upstrima Knowledge Base, assembled by our engineers and partners. This approach ensures consistent and repeatable answers with high precision and low level of hallucinations. General queries, engineering calculations, or extracting insights from your historical or real-time well data – it’s all here.",
  },
  {
    id: 5,
    top: screenWidth <= 1024 ? "185px" : "415px",
    header: "Experts Network",
    headerPopup: <>Experts Network</>,
    imageSrc: [img71, img72],
    text: "Experts Network connects you directly with experienced industry professionals for focused, one-hour technical consultation sessions. During each session, experts work with your team to understand your operational challenges, discuss engineering use cases, and provide practical technical guidance and industry best practices. As a unique outcome, every consultation also produces a conceptual prototype of a custom AI Agent designed specifically to address your identified pain point. This gives you immediate value in two ways: expert recommendations you can apply today, and a tangible AI solution blueprint you can choose to have Upstrima develop into a production-ready AI Agent—or simply use as a roadmap for future innovation.",
  },
  {
    id: 6,
    top: screenWidth <= 1024 ? "225px" : "510px",
    header: "Automated AI Workflows",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          Automated <br />
          AI Workflows
        </>
      ) : (
        <>Automated AI Workflows</>
      ),
    imageSrc: [img81, img82, img83, img84, img85],
    text: "AI Workflows enable engineers to automate complex technical processes by visually connecting AI Agents, specialized tools, and decision logic into intelligent, repeatable workflows. Whether executed with a single click or reviewed step by step, AI Workflows streamline multi-stage engineering tasks while allowing users to inspect, validate, and guide each stage of the process. By combining automation with human oversight, Upstrima helps organizations accelerate execution, standardize best practices, and tackle workflows of virtually any complexity without sacrificing engineering control or confidence.",
  },
  {
    id: 7,
    top: screenWidth <= 1024 ? "265px" : "600px",
    header: "3rd Party AI Apps Listings on the Marketplace",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          3rd Party AI Apps <br />
          Listings on the Marketplace
        </>
      ) : (
        <>3rd Party AI Apps Listings on the Marketplace</>
      ),
    imageSrc: [img51, img52, img53, img54],
    text: "Have you created an impressive application or utility that you wish to share with your colleagues or clients around the globe? We invite third-party developers and engineers from various sectors to showcase your applications on the Upstrima Marketplace. With the support of our AI engine, your applications will excel and deliver significant results for clients, while providing you with consistent revenue and recognition.",
  },
  {
    id: 8,
    top: screenWidth <= 1024 ? "320px" : "740px",
    header: "Customizations and Support",
    headerPopup:
      screenWidth <= 1024 ? (
        <>
          Customizations <br />
          and Support
        </>
      ) : (
        <>Customizations and Support</>
      ),
    imageSrc: [img61],
    text: "We provide extensive customization options to tailor our AI Agents to your specific requirements, challenges, and criteria, whether adapting existing AI Agents or creating entirely new ones. Let us manage the integration of various data sources, extract operational insights, and automate your specific tasks and workflows by developing customized AI Agents that are tested on your data and deployed on-site.",
  },
];

export default featuresTexts;
