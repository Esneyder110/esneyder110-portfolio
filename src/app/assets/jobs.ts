export interface JobInterface {
  role: string;
  company: string;
  yearStart: string;
  monthStart: string;
  yearEnd?: string;
  monthEnd?: string;
  descriptions?: string[];
}

export const jobs: JobInterface[] = [
  {
    role: 'Backend Developer',
    company: 'LPSysco',
    yearStart: '2025',
    monthStart: 'Oct',
    yearEnd: '',
    monthEnd: '',
    descriptions: [
      'Migrated a critical legacy-to-modern infrastructure, transitioning core services from Ruby to Go (Golang) to enhance system concurrency and performance.',
      'Architected high-performance backend modules for a major internet backbone infrastructure project, focusing on low-latency and high-throughput data processing.',
      'Implemented clean code principles and Go design patterns to ensure the new codebase is maintainable, scalable, and highly efficient.',
      'Collaborated with cross-functional teams to ensure zero-downtime during the phased migration of critical service components.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Equilibrio Agency',
    yearStart: '2024',
    monthStart: 'Feb',
    yearEnd: '2025',
    monthEnd: 'Oct',
    descriptions: [
      'Improved the application performance by optimizing the back-end code.',
      'Developed a full-stack web application that handled concurrent users with minimal downtime.',
      'Created a RESTful API that allowed for seamless integration with other applications.',
      'Implemented a Responsive Design that allowed the application to be used on various devices with the same user experience',
      'Utilized serverless architecture to reduce costs and improve scalability.',
      'Created a Continuous Integration/Continuous Deployment (CI/CD) pipeline that reduced time-to-deployment from 15 minutes to 2 minutes.',
      'Optimized database queries to improve application performance.',
      'Refactored legacy code to improve reliability, scalability and maintainability.'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'Digital Node',
    yearStart: '2022',
    monthStart: 'Nov',
    yearEnd: '2024',
    monthEnd: 'Feb',
    descriptions: [
      'Developed a RESTful and GraphQL APIS to allow for interoperability between different systems.',
      'Developed features and optimized existing code to improve application scalability.',
      'Utilized GCP technologies to create a highly available and cost-effective backend environment.',
      'Worked closely with the front-end development team to ensure the smooth integration of the backend system.'
    ]
  },
]
