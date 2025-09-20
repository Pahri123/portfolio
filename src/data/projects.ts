const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  repoLabel?: string
  liveLink: string
  liveLabel?: string
}[] = [
  {
    name: 'State-Owned Asset Maintenance Information System',
    description: 'Developed a Laravel-based web system for managing 2,400+ state-owned assets in LLDIKTI Region IV, integrating real-time status, routine maintenance scheduling, and automated document generation to reduce errors and processing time.',
    liveLink: '',
    previewImage: '/akunkeun.png',
    repoUrl: '',
  },
  {
    name: 'E-Archive & Lecturer Information System',
    description: 'Built a web-based e-archive and lecturer information system with Laravel, supporting the management and organisation of data for more than 35,000 lecturers in Banten and West Java.',
    liveLink: '',
    previewImage: '/earsip.png',
    repoUrl: '',
  },
  {
    name: 'Jakarta MRT Station Dashboard',
    description: 'Took part in Jakarta MRT station data analysis project, did a lot of cleaning and exploring the data to make sure it was solid, then built an interactive Tableau dashboard that gave useful insights to improve the user experience and support public transport development.',
    liveLink: 'https://public.tableau.com/app/profile/tarisha.andhera/viz/MRTBraincore/ringkasan',
    liveLabel: 'Tableau Public',
    previewImage: '/mrt.png',
    repoUrl: 'https://jakartamrt.co.id/id/val/stasiuns',
    repoLabel: 'Data Source',
  },
  {
    name: 'Aspect-based Sentiment Analysis on Indonesian Restaurant Reviews',
    description: 'Built an Aspect-Based Sentiment Analysis (ABSA) project with a teammate, fine-tuned Hugging Face models using the SetFit-ABSA method, and trained it on Indonesian Google Maps restaurant reviews that we labeled ourselves with a custom HTML/JavaScript annotation tool.',
    liveLink: 'https://www.linkedin.com/posts/fakhrie-n_braincore-dsa-absa-activity-7196839448595062785-vb4K?',
    liveLabel: 'LinkedIn Post',
    previewImage: '/absa.png',
    repoUrl: '',
  },
  {
    name: 'Lokergo - Vacancy Recommendation',
    description: 'Led a team project to build a website that pulls together job postings from different platforms and adds job recommendations based on user profiles. I contributed on improving the recommendation system accuracy, speeding up data scraping process, and deploys the model on Google Cloud.',
    liveLink: 'https://www.linkedin.com/posts/aldrianaliv_lokergo-elevator-pitch-activity-7142482890180689920-cufs?',
    liveLabel: 'LinkedIn Post',
    previewImage: '/lokergo.png',
    repoUrl: 'https://github.com/Lokergo-Dev/',
  },
]

export default PROJECTS
