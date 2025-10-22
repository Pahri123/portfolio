const CERTIF: {
  name: string
  description: string
  date: string
  pdfUrl?: string
}[] = [
  {
    name: 'TOEFL ITP',
    description:'Earned an English Proficiency certification administered by the Language Center of Universitas Komputer Indonesia, assessing Listening Comprehension, Structure and Written Expression, and Reading Comprehension, with a total score of 567.',
    date: 'April 2025',
  pdfUrl: '/certs/toefl-itp.pdf',
  },
  {
    name: 'Junior Web Developer',
    description: 'Earned the BNSP Junior Web Developer certification, demonstrating competency in UI implementation, structured programming, clean code practices, and the use of programming libraries and resources.',
    date: 'December 2024',
  pdfUrl: '/certs/junior-web-developer.pdf',
  },
  {
    name: 'Tensorflow Dev Certificate',
    description: 'Earned the TensorFlow Developer Certificate from Bangkit Academy, demonstrating proficiency in building and deploying ML models with TensorFlow.',
    date: 'April 2024',
  pdfUrl: '/certs/tensorflow-developer-certificate.pdf',
  },
]

export default CERTIF
