'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, ArrowRight, Check } from 'lucide-react'
import { Programme } from '@/types/Programme'
import { programmes } from '@/data/Programme'
import ProgrammeModal from '@/components/ProgrammeModal'

export default function ProgrammesPage() {
  const [selectedDistrict, setSelectedDistrict] = useState('All districts')
  const [selectedFocusArea, setSelectedFocusArea] = useState('All key focus areas')
  const [showActive, setShowActive] = useState(true)
  const [showComplete, setShowComplete] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const districts = ['All districts', ...new Set(programmes.map(p => p.district))]
  const focusAreas = ['All key focus areas', ...new Set(programmes.flatMap(p => p.keyFocusAreas))]

  const handleProgrammeClick = (programme: Programme) => {
    setSelectedProgramme(programme)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProgramme(null)
  }

  const filteredProgrammes = programmes.filter(programme => 
    (selectedDistrict === 'All districts' || programme.district === selectedDistrict) &&
    (selectedFocusArea === 'All key focus areas' || programme.keyFocusAreas.includes(selectedFocusArea)) &&
    ((showActive && programme.isActive) || (showComplete && !programme.isActive)) &&
    (searchQuery === '' || programme.title.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-[#f9f7f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a382c] mb-4">
            Active Seeker
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our programmes to learn more about the innovative ways we are
            partnering with farmers to grow a greener future.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[#1a382c] rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="text-white mr-4">Filter by:</div>
          
          {/* District dropdown */}
          <div className="relative">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-white rounded px-4 py-2"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* Focus areas dropdown */}
          <div className="relative">
            <select
              value={selectedFocusArea}
              onChange={(e) => setSelectedFocusArea(e.target.value)}
              className="bg-white rounded px-4 py-2"
            >
              {focusAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Status checkboxes */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={showActive}
                onChange={(e) => setShowActive(e.target.checked)}
                className="form-checkbox h-4 w-4"
              />
              <span>Active</span>
            </label>
            <label className="flex items-center space-x-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={showComplete}
                onChange={(e) => setShowComplete(e.target.checked)}
                className="form-checkbox h-4 w-4"
              />
              <span>Complete</span>
            </label>
          </div>

          {/* Search input */}
          <div className="relative flex-1 max-w-md ml-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded pl-10 pr-4 py-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Programme grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((programme) => (
            <div
              key={programme.id}
              className="bg-[#e6e1d7] rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => handleProgrammeClick(programme)}
            >
              {/* Programme info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-[#1a382c] flex-1 mr-4">
                    {programme.title}
                  </h3>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${programme.isActive ? 'bg-green-500' : 'bg-red-500'} mr-2`} />
                    <span className="text-sm text-gray-600">{programme.isActive ? 'Active' : 'Complete'}</span>
                  </div>
                </div>

                {/* Programme details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div>
                    <div className="text-gray-600 mb-1">Running since</div>
                    <div className="font-medium">{programme.runningSince}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">District</div>
                    <div className="font-medium">{programme.district}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Target reach</div>
                    <div className="font-medium">{programme.targetReach}</div>
                  </div>
                </div>

                {/* Key focus areas */}
                <div className="mb-6">
                  <div className="text-gray-600 mb-2">Key focus areas</div>
                  <ul className="space-y-2">
                    {programme.keyFocusAreas.map((area, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-[#3d8168] mr-2" />
                        <span className="text-sm">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Programme image */}
              <div className="relative h-48">
                <Image
                  src={programme.image}
                  alt={programme.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                    <ArrowRight className="h-6 w-6 text-[#1a382c]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Programme Details */}
      {isModalOpen && selectedProgramme && (
        <ProgrammeModal programme={selectedProgramme} onClose={closeModal} />
      )}
    </div>
  )
}

