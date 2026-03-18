import { Country } from './types';

export const countries: Country[] = [
  {
    id: 'south-korea',
    name: 'South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Experience world-class education in the heart of East Asia.',
    fullDescription: 'South Korea has become a top destination for international students, offering a blend of traditional culture and cutting-edge technology. With its globally ranked universities and vibrant student life, it provides an unparalleled educational experience.',
    benefits: [
      'High-quality education at affordable costs',
      'Generous scholarship opportunities (GKS, etc.)',
      'Safe and welcoming environment',
      'Opportunity to learn a new language and culture',
      'Strong post-study work opportunities'
    ],
    universities: ['Seoul National University', 'KAIST', 'Korea University', 'Yonsei University', 'Sungkyunkwan University'],
    requirements: ['High School Diploma or equivalent', 'English Proficiency (IELTS/TOEFL) or TOPIK (Korean)', 'Statement of Purpose', 'Letters of Recommendation'],
    visaProcess: ['Receive Admission Letter', 'Apply for D-2 Student Visa', 'Submit Financial Documents', 'Interview at Embassy (if required)'],
    capital: 'Seoul',
    cities: [
      { name: 'Seoul', x: 70, y: 30, description: 'Capital city with top universities like SNU and Yonsei.' },
      { name: 'Busan', x: 80, y: 70, description: 'Port city known for its beaches and Pusan National University.' },
      { name: 'Daejeon', x: 65, y: 50, description: 'The technology hub, home to KAIST.' }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'A global leader in education with diverse opportunities.',
    fullDescription: 'Canada is consistently ranked as one of the best countries in the world for education and quality of life. Its inclusive society and high academic standards make it a dream destination for students worldwide.',
    benefits: ['Globally recognized degrees', 'Post-graduation work permit (PGWP)', 'Pathways to permanent residency', 'Diverse and multicultural society', 'High standard of living'],
    universities: ['University of Toronto', 'University of British Columbia', 'McGill University', 'University of Waterloo', 'University of Alberta'],
    requirements: ['Academic Transcripts', 'IELTS/PTE Academic scores', 'Proof of Funds', 'Study Permit application'],
    visaProcess: ['Letter of Acceptance from a DLI', 'Apply for Study Permit online', 'Biometrics collection', 'Medical examination'],
    capital: 'Ottawa',
    cities: [
      { name: 'Toronto', x: 80, y: 80, description: 'Canadas largest city and home to UofT.' },
      { name: 'Vancouver', x: 15, y: 75, description: 'Beautiful coastal city, home to UBC.' },
      { name: 'Montreal', x: 85, y: 75, description: 'Cultural hub and home to McGill University.' }
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Affordable quality education in a tropical paradise.',
    fullDescription: 'Malaysia offers a unique mix of modern infrastructure and natural beauty. It is a hub for international branch campuses, providing Western-standard education at a fraction of the cost.',
    benefits: ['Low cost of living and tuition fees', 'International branch campuses (UK, Australia)', 'English is widely spoken', 'Safe and peaceful environment', 'Easy visa processing'],
    universities: ['University of Malaya', 'Monash University Malaysia', "Taylor's University", 'Sunway University', 'Asia Pacific University (APU)'],
    requirements: ["High School or Bachelor's degree", 'English proficiency (IELTS/TOEFL)', 'Passport copies', 'Health declaration'],
    visaProcess: ['Apply for VAL (Visa Approval Letter)', 'Single Entry Visa (SEV) application', 'Post-arrival medical check-up', 'Student Pass endorsement'],
    capital: 'Kuala Lumpur',
    cities: [
      { name: 'Kuala Lumpur', x: 45, y: 60, description: 'The vibrant capital with numerous international campuses.' },
      { name: 'Penang', x: 40, y: 40, description: 'Known for its heritage and top-tier research universities.' },
      { name: 'Johor Bahru', x: 55, y: 80, description: 'Gateway to Singapore, home to EduCity.' }
    ]
  },
  {
    id: 'cyprus',
    name: 'Cyprus',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Study in a beautiful Mediterranean island with rich history.',
    fullDescription: 'Cyprus is an emerging destination for international students, offering high-quality education in a safe, sunny, and historic Mediterranean setting. It is particularly known for its business and hospitality programs.',
    benefits: ['Affordable European education', 'Safe and friendly environment', 'High standard of living', 'Opportunity to explore Europe', 'Multicultural student community'],
    universities: ['University of Cyprus', 'University of Nicosia', 'European University Cyprus', 'Cyprus International University', 'Near East University'],
    requirements: ['High School Diploma', 'English proficiency proof', 'Financial documents', 'Passport'],
    visaProcess: ['Admission Letter', 'Apply for Entry Permit', 'Medical tests and insurance', 'Final Residence Permit in Cyprus'],
    capital: 'Nicosia',
    cities: [
      { name: 'Nicosia', x: 60, y: 45, description: 'The capital and largest city of Cyprus.' },
      { name: 'Limassol', x: 50, y: 70, description: 'A major port and business hub.' },
      { name: 'Larnaca', x: 70, y: 60, description: 'Known for its palm-tree seafront and university campuses.' }
    ]
  },
  {
    id: 'europe',
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Access a wide range of prestigious universities across the continent.',
    fullDescription: 'Studying in Europe offers students the chance to experience diverse cultures, languages, and some of the oldest and most prestigious universities in the world. From Germany to France, the opportunities are endless.',
    benefits: ['Low or no tuition fees in many countries', 'Schengen visa allows travel across 27 countries', 'Rich cultural and historical experience', 'High academic standards', 'Strong focus on research and innovation'],
    universities: ['Technical University of Munich (Germany)', 'Sorbonne University (France)', 'University of Amsterdam (Netherlands)', 'Sapienza University of Rome (Italy)', 'Lund University (Sweden)'],
    requirements: ['Academic Transcripts', 'Language proficiency (English or local language)', 'Motivation Letter', 'Proof of financial means'],
    visaProcess: ['University Admission', 'National Visa (Type D) application', 'Block account or financial proof', 'Residence permit application upon arrival'],
    capital: 'Berlin',
    cities: [
      { name: 'Berlin', x: 50, y: 30, description: 'Capital of Germany, hub for tech and arts.' },
      { name: 'Paris', x: 40, y: 50, description: 'Global center for fashion, gastronomy, and culture.' },
      { name: 'Amsterdam', x: 45, y: 35, description: 'Known for its artistic heritage and elaborate canal system.' }
    ]
  }
];
