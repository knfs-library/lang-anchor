/**
 * @typedef {Object} ModelRole
 * @property {string} PERSONAL_ASSISTANT - A smart assistant that helps with daily tasks and answers general questions.
 * @property {string} SOFTWARE_ENGINEER - A professional developer who writes, optimizes, and debugs code.
 * @property {string} CYBERSECURITY_EXPERT - A security expert specializing in encryption, penetration testing, and system security.
 * @property {string} AI_ML_RESEARCHER - An AI/ML researcher who explains algorithms, optimizes models, and compares techniques.
 * @property {string} SYSTEM_ARCHITECT - An architect specializing in designing scalable microservices and cloud-based infrastructures.
 * @property {string} LEGAL_ADVISOR - A legal consultant who explains laws, contracts, and compliance policies.
 * @property {string} JOURNALIST - A professional journalist who writes articles, analyzes trends, and reports news.
 * @property {string} DATA_SCIENTIST - A data scientist specializing in data processing, visualization, and big data analysis.
 * @property {string} MEDICAL_ADVISOR - A healthcare professional providing medical insights based on scientific research.
 * @property {string} FINANCIAL_ADVISOR - A financial expert advising on investments, personal finance, and market trends.
 * @property {string} PROJECT_MANAGER - A project manager ensuring workflow efficiency, team collaboration, and task tracking.
 * @property {string} UX_UI_DESIGNER - A UX/UI designer who enhances user experience and optimizes interfaces.
 * @property {string} DEVOPS_ENGINEER - A DevOps engineer focusing on CI/CD pipelines, infrastructure automation, and deployment.
 * @property {string} GAME_DEVELOPER - A game developer specializing in gameplay mechanics, game engines, and AI logic.
 * @property {string} CLOUD_ARCHITECT - A cloud computing expert specializing in AWS, Azure, and Google Cloud architectures.
 * @property {string} NETWORK_ENGINEER - A networking specialist handling network security, configurations, and optimizations.
 * @property {string} BLOCKCHAIN_DEVELOPER - A blockchain developer working on smart contracts, decentralized apps, and Web3.
 * @property {string} EDUCATOR - A teacher or educator explaining concepts and providing detailed learning materials.
 * @property {string} MARKETING_EXPERT - A marketing specialist providing strategies for branding, SEO, and social media engagement.
 * @property {string} HR_SPECIALIST - A human resources specialist who advises on recruitment, workplace policies, and employee engagement.
 * @property {string} TRANSLATOR - A professional translator who accurately translates content between languages.
 * @property {string} HISTORIAN - A historian specializing in historical events, timelines, and cultural analyses.
 * @property {string} SCIENTIFIC_RESEARCHER - A researcher focusing on physics, chemistry, biology, and other sciences.
 * @property {string} CUSTOMER_SUPPORT - A customer service expert handling queries and troubleshooting problems.
 * @property {string} SOCIAL_MEDIA_MANAGER - A social media strategist optimizing online presence and engagement.
 * @property {string} AUTOMATION_ENGINEER - An engineer specializing in robotic process automation (RPA) and AI-driven workflows.
 * @property {string} FILM_CRITIC - A film critic who reviews movies, analyzes cinematography, and discusses storytelling techniques.
 * @property {string} PRODUCT_MANAGER - A product manager overseeing product development, features, and market fit.
 * @property {string} MILITARY_STRATEGIST - A military expert analyzing defense strategies, tactics, and geopolitical scenarios.
 * @property {string} ETHICAL_HACKER - A penetration tester identifying and mitigating security vulnerabilities.
 */

/**
 * @typedef {Object} UserRole
 * @property {string} NORMAL_USER - A normal user.
 * @property {string} ADMIN - A superuser with full control over the system.
 * @property {string} MODERATOR - A moderator managing content, enforcing rules, and handling reports.
 * @property {string} AUTHOR - A user who creates and publishes content.
 * @property {string} EDITOR - A user responsible for reviewing and editing content before publication.
 * @property {string} SUBSCRIBER - A user with read access to premium content.
 * @property {string} MEMBER - A regular user with basic interaction capabilities.
 * @property {string} GUEST - A user with limited access, typically viewing public content only.
 * @property {string} CUSTOMER - A paying user purchasing services or products.
 * @property {string} STUDENT - A user enrolled in educational programs.
 * @property {string} TEACHER - A user providing lessons or educational content.
 * @property {string} RECRUITER - A user posting jobs and searching for candidates.
 * @property {string} JOB_SEEKER - A user looking for job opportunities.
 * @property {string} CONSULTANT - A user providing expert advice in a specific domain.
 * @property {string} INVESTOR - A user investing in projects, startups, or stocks.
 * @property {string} FREELANCER - A self-employed user offering services on a contract basis.
 * @property {string} CLIENT - A user hiring freelancers or service providers.
 * @property {string} REVIEWER - A user providing feedback on products, services, or content.
 * @property {string} GAMER - A user participating in gaming communities and competitions.
 * @property {string} STREAMER - A user broadcasting live content to an audience.
 * @property {string} ENTREPRENEUR - A user starting and managing a business.
 * @property {string} RESEARCHER - A user conducting studies and analysis in various fields.
 * @property {string} HEALTHCARE_PROVIDER - A medical professional providing patient care.
 * @property {string} PATIENT - A user seeking medical information or treatment.
 * @property {string} VOLUNTEER - A user participating in non-profit or community service activities.
 * @property {string} DONOR - A user contributing funds or resources to causes.
 * @property {string} CITIZEN - A general user engaging in civic discussions and services.
 * @property {string} REPORTER - A user gathering and sharing news updates.
 * @property {string} PHOTOGRAPHER - A user capturing and sharing visual content.
 * @property {string} DESIGNER - A user creating digital, graphic, or product designs.
 */

module.exports = {
	modelRole: /** @type {ModelRole} */ {
		PERSONAL_ASSISTANT: "a smart assistant that helps with daily tasks and answers general questions.",
		SOFTWARE_ENGINEER: "a professional developer who writes, optimizes, and debugs code.",
		CYBERSECURITY_EXPERT: "a security expert specializing in encryption, penetration testing, and system security.",
		AI_ML_RESEARCHER: "an AI/ML researcher who explains algorithms, optimizes models, and compares techniques.",
		SYSTEM_ARCHITECT: "an architect specializing in designing scalable microservices and cloud-based infrastructures.",
		LEGAL_ADVISOR: "a legal consultant who explains laws, contracts, and compliance policies.",
		JOURNALIST: "a professional journalist who writes articles, analyzes trends, and reports news.",
		DATA_SCIENTIST: "a data scientist specializing in data processing, visualization, and big data analysis.",
		MEDICAL_ADVISOR: "a healthcare professional providing medical insights based on scientific research.",
		FINANCIAL_ADVISOR: "a financial expert advising on investments, personal finance, and market trends.",
		PROJECT_MANAGER: "a project manager ensuring workflow efficiency, team collaboration, and task tracking.",
		UX_UI_DESIGNER: "a UX/UI designer who enhances user experience and optimizes interfaces.",
		DEVOPS_ENGINEER: "a DevOps engineer focusing on CI/CD pipelines, infrastructure automation, and deployment.",
		GAME_DEVELOPER: "a game developer specializing in gameplay mechanics, game engines, and AI logic.",
		CLOUD_ARCHITECT: "a cloud computing expert specializing in AWS, Azure, and Google Cloud architectures.",
		NETWORK_ENGINEER: "a networking specialist handling network security, configurations, and optimizations.",
		BLOCKCHAIN_DEVELOPER: "a blockchain developer working on smart contracts, decentralized apps, and Web3.",
		EDUCATOR: "a teacher or educator explaining concepts and providing detailed learning materials.",
		MARKETING_EXPERT: "a marketing specialist providing strategies for branding, SEO, and social media engagement.",
		HR_SPECIALIST: "a human resources specialist who advises on recruitment, workplace policies, and employee engagement.",
		TRANSLATOR: "a professional translator who accurately translates content between languages.",
		HISTORIAN: "a historian specializing in historical events, timelines, and cultural analyses.",
		SCIENTIFIC_RESEARCHER: "a researcher focusing on physics, chemistry, biology, and other sciences.",
		CUSTOMER_SUPPORT: "a customer service expert handling queries and troubleshooting problems.",
		SOCIAL_MEDIA_MANAGER: "a social media strategist optimizing online presence and engagement.",
		AUTOMATION_ENGINEER: "an engineer specializing in robotic process automation (RPA) and AI-driven workflows.",
		FILM_CRITIC: "a film critic who reviews movies, analyzes cinematography, and discusses storytelling techniques.",
		PRODUCT_MANAGER: "a product manager overseeing product development, features, and market fit.",
		MILITARY_STRATEGIST: "a military expert analyzing defense strategies, tactics, and geopolitical scenarios.",
		ETHICAL_HACKER: "a penetration tester identifying and mitigating security vulnerabilities.",
	},
	userRole: /** @type {UserRole} */ {
		NORMAL_USER: "A normal user",
		ADMIN: "A superuser with full control over the system.",
		MODERATOR: "A moderator managing content, enforcing rules, and handling reports.",
		AUTHOR: "A user who creates and publishes content.",
		EDITOR: "A user responsible for reviewing and editing content before publication.",
		SUBSCRIBER: "A user with read access to premium content.",
		MEMBER: "A regular user with basic interaction capabilities.",
		GUEST: "A user with limited access, typically viewing public content only.",
		CUSTOMER: "A paying user purchasing services or products.",
		STUDENT: "A user enrolled in educational programs.",
		TEACHER: "A user providing lessons or educational content.",
		RECRUITER: "A user posting jobs and searching for candidates.",
		JOB_SEEKER: "A user looking for job opportunities.",
		CONSULTANT: "A user providing expert advice in a specific domain.",
		INVESTOR: "A user investing in projects, startups, or stocks.",
		FREELANCER: "A self-employed user offering services on a contract basis.",
		CLIENT: "A user hiring freelancers or service providers.",
		REVIEWER: "A user providing feedback on products, services, or content.",
		GAMER: "A user participating in gaming communities and competitions.",
		STREAMER: "A user broadcasting live content to an audience.",
		ENTREPRENEUR: "A user starting and managing a business.",
		RESEARCHER: "A user conducting studies and analysis in various fields.",
		HEALTHCARE_PROVIDER: "A medical professional providing patient care.",
		PATIENT: "A user seeking medical information or treatment.",
		VOLUNTEER: "A user participating in non-profit or community service activities.",
		DONOR: "A user contributing funds or resources to causes.",
		CITIZEN: "A general user engaging in civic discussions and services.",
		REPORTER: "A user gathering and sharing news updates.",
		PHOTOGRAPHER: "A user capturing and sharing visual content.",
		DESIGNER: "A user creating digital, graphic, or product designs.",
	}
};
