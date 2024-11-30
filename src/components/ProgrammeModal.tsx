import React from 'react';
import Image from 'next/image';
import { Programme } from '@/types/Programme';

interface ProgrammeModalProps {
  programme: Programme | null;
  onClose: () => void;
}

const ProgrammeModal: React.FC<ProgrammeModalProps> = ({ programme, onClose }) => {
  if (!programme) return null;

  const handleRequestMeet = () => {
    const email = "example@example.com"; // Replace with the desired email address
    const subject = encodeURIComponent(`Request a Meeting about ${programme.title}`);
    const body = encodeURIComponent(`I would like to request a meeting to discuss the programme: ${programme.title}.`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full overflow-y-auto" style={{ maxHeight: '80vh' }}>
        <h2 className="text-2xl font-bold mb-4 text-green-600">{programme.title}</h2>
        <Image src={programme.image} alt={programme.title} width={400} height={300} className="mb-4 rounded w-full h-[450px] object-cover" />
        <p><strong className="text-green-600 p-1">Running Since:</strong> {programme.runningSince}</p>
        <p><strong className="text-green-600 p-1">District:</strong> {programme.district}</p>
        <p><strong className="text-green-600 p-1">Target Reach:</strong> {programme.targetReach}</p>
        <p><strong className="text-green-600 p-1">Key Focus Areas:</strong></p>
        <ul className="list-disc ml-5">
          {programme.keyFocusAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 mr-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
        <button onClick={handleRequestMeet} className="mt-4 mr-4 bg-green-500 text-white px-4 py-2 rounded">Reach Out</button>
      </div>
    </div>
  );
};

export default ProgrammeModal; 