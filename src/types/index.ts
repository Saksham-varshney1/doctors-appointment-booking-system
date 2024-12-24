export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  availability: string[];
  education: string;
  experience: string;
  languages: string[];
  rating: number;
  reviews: number;
  specializations: string[];
  location: string;
  consultationFee: number;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  reason: string;
}