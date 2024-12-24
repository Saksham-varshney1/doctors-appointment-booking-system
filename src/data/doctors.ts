import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    availability: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
    education: 'MD - Harvard Medical School',
    experience: '15 years',
    languages: ['English', 'Spanish'],
    rating: 4.9,
    reviews: 127,
    specializations: ['Heart Disease', 'Hypertension', 'Cardiac Surgery'],
    location: 'Medical Arts Building, Suite 302',
    consultationFee: 200
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    availability: ['9:30 AM', '10:30 AM', '1:30 PM', '2:30 PM', '3:30 PM'],
    education: 'MD - Stanford University',
    experience: '12 years',
    languages: ['English', 'Mandarin'],
    rating: 4.8,
    reviews: 98,
    specializations: ['Newborn Care', 'Pediatric Immunology', 'Development Disorders'],
    location: 'Children\'s Medical Center, Floor 4',
    consultationFee: 150
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    availability: ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '4:00 PM'],
    education: 'MD - Yale School of Medicine',
    experience: '10 years',
    languages: ['English', 'Portuguese'],
    rating: 4.7,
    reviews: 156,
    specializations: ['Cosmetic Dermatology', 'Skin Cancer', 'Laser Treatment'],
    location: 'Dermatology Clinic, Suite 205',
    consultationFee: 180
  }
];