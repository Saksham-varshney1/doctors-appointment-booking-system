import React from 'react';
import { Star, GraduationCap, Globe2, Award } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorInfoProps {
  doctor: Doctor;
}

export function DoctorInfo({ doctor }: DoctorInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{doctor.name}</h3>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">{doctor.rating}</span>
            </div>
            <span className="text-gray-500">({doctor.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Education</p>
            <p className="font-medium">{doctor.education}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Experience</p>
            <p className="font-medium">{doctor.experience}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Globe2 className="w-5 h-5 text-gray-600" />
          <p className="font-medium">Languages</p>
        </div>
        <div className="flex gap-2">
          {doctor.languages.map((language) => (
            <span
              key={language}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Specializations</h4>
        <div className="flex flex-wrap gap-2">
          {doctor.specializations.map((spec) => (
            <span
              key={spec}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}