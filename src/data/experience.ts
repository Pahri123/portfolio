const PAST_ROLES: {
  company: string
  role: string
  description: string[] // ubah ke array
  startDate: string
  endDate: string
}[] = [
  {
    company: 'LLDIKTI Region IV',
    role: 'Data Processor & Web Developer',
    description: [
      'Collaborated on the planning and execution of multiple outreach events, assisting with logistics and activities for over 50 participants in various out-of-town locations.',
      'Built an web-based e-archive and data dashboard using Laravel Framework, which was instrumental in organizing and presenting data for 35,000+ lecturers across West Java and Banten.'
    ],
    startDate: 'February 2024',
    endDate: 'June 2024',
  },
  {
    company: 'Braincore.id',
    role: 'Data Scientist',
    description: [
      'Developed an Aspect-Based Sentiment Analysis (ABSA) project with a teammate, fine-tuning Hugging Face models using the SetFit-ABSA method on a custom dataset of Indonesian Google Maps restaurant reviews, labeled through a self-built HTML/JavaScript annotation tool.',
      'Collaborated on a Jakarta MRT station data analysis project, performing extensive data cleaning and exploration to ensure data quality, and developed an interactive Tableau dashboard that delivers valuable insights to enhance user experience and support public transportation development.',
    ],
    startDate: 'March 2024',
    endDate: 'Aug 2024',
  },
]


export default PAST_ROLES
