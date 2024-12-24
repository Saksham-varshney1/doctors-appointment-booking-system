import React, { useState } from 'react';
import { Stethoscope, Search } from 'lucide-react';
import { doctors } from './data/doctors';
import { DoctorCard } from './components/DoctorCard';
import { BookingForm } from './components/BookingForm';
import { Doctor } from './types';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBooking = (formData: {
    patientName: string;
    date: string;
    time: string;
    reason: string;
  }) => {
    console.log('Booking submitted:', { doctor: selectedDoctor, ...formData });
    alert('Appointment booked successfully!');
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Doctor Appointments
              </h1>
            </div>
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelect={setSelectedDoctor}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No doctors found matching your search criteria.
            </p>
          </div>
        )}

        {selectedDoctor && (
          <BookingForm
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
            onSubmit={handleBooking}
          />
        )}
      </main>
    </div>
  );
}

export default App;