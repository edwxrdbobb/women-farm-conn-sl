'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Search, ArrowRight, Check } from 'lucide-react'
import agribusiness from '@/assets/images/agribusiness.jpeg'
import alliance from '@/assets/images/alliance.jpeg'
import sustainableHousehold from '@/assets/images/sustainable-household.jpeg'
import refugees from '@/assets/images/refugees.jpeg'
import nourish from '@/assets/images/nourish.jpeg'
import participatoryForest from '@/assets/images/participatory-forest.jpeg'
import healthInitiative from '@/assets/images/Health-Initiative.jpeg'
import agriculturalTraining from '@/assets/images/Agricultural-Training-Program.jpeg'
import youthEmpowerment from '@/assets/images/Youth-Empowerment.jpeg'
import sustainableFarming from '@/assets/images/Sustainable-Farming.jpeg'
import womenAgriculture from '@/assets/images/Women-Agriculture.jpeg'
import climateResilience from '@/assets/images/Climate-Resilience.jpeg'
import ProgrammeModal from '@/components/ProgrammeModal'

interface Programme {
  id: number
  title: string
  isActive: boolean
  runningSince: string
  district: string
  targetReach: string
  keyFocusAreas: string[]
  image: StaticImageData
}

const programmes: Programme[] = [
  {
    id: 1,
    title: "Youth and women in agribusiness",
    isActive: true,
    runningSince: "2023",
    district: "Western Area Urban",
    targetReach: "60,000",
    keyFocusAreas: [
      "Boost youth employment",
      "Empower women",
      "Support businesses"
    ],
    image: agribusiness
  },
  {
    id: 2,
    title: "Farm to Market Alliance",
    isActive: true,
    runningSince: "2022",
    district: "Western Area Rural",
    targetReach: "28,000",
    keyFocusAreas: [
      "Boost productivity",
      "Connect farmers to markets",
      "Support businesses"
    ],
    image: alliance
  },
  {
    id: 3,
    title: "Leveraging investment for sustainable household economic development",
    isActive: true,
    runningSince: "2021",
    district: "Bombali",
    targetReach: "7,589",
    keyFocusAreas: [
      "Boost youth employment",
      "Empower women",
      "Increase food security and nutrition",
      "Increase incomes"
    ],
    image: sustainableHousehold
  },
  {
    id: 4,
    title: "Entrepreneurship for young refugees",
    isActive: true,
    runningSince: "2022",
    district: "Koinadugu",
    targetReach: "105",
    keyFocusAreas: [
      "Boost youth employment",
      "Increase access to finance",
      "Support businesses"
    ],
    image: refugees
  },
  {
    id: 5,
    title: "NOURISH",
    isActive: true,
    runningSince: "2024",
    district: "Kambia",
    targetReach: "200,000",
    keyFocusAreas: [
      "Act on climate change",
      "Boost productivity",
      "Increase food security and nutrition"
    ],
    image: nourish
  },
  {
    id: 6,
    title: "Participatory forest management",
    isActive: true,
    runningSince: "2022",
    district: "Port Loko",
    targetReach: "7,200",
    keyFocusAreas: [
      "Act on climate change",
      "Increase incomes",
      "Protect ecosystems"
    ],
    image: participatoryForest
  },
  {
    id: 7,
    title: "Community Health Initiative",
    isActive: true,
    runningSince: "2023",
    district: "Tonkolili",
    targetReach: "15,000",
    keyFocusAreas: [
      "Improve healthcare access",
      "Promote health education"
    ],
    image: healthInitiative
  },
  {
    id: 8,
    title: "Agricultural Training Program",
    isActive: true,
    runningSince: "2022",
    district: "Bo",
    targetReach: "10,000",
    keyFocusAreas: [
      "Enhance agricultural skills",
      "Increase crop yields"
    ],
    image: agriculturalTraining
  },
  {
    id: 9,
    title: "Youth Empowerment Project",
    isActive: true,
    runningSince: "2021",
    district: "Kenema",
    targetReach: "5,000",
    keyFocusAreas: [
      "Boost youth employment",
      "Provide vocational training"
    ],
    image: youthEmpowerment
  },
  {
    id: 10,
    title: "Sustainable Farming Practices",
    isActive: true,
    runningSince: "2024",
    district: "Pujehun",
    targetReach: "8,000",
    keyFocusAreas: [
      "Promote sustainable agriculture",
      "Increase food security"
    ],
    image: sustainableFarming
  },
  {
    id: 11,
    title: "Women in Agriculture",
    isActive: true,
    runningSince: "2023",
    district: "Moyamba",
    targetReach: "12,000",
    keyFocusAreas: [
      "Empower women farmers",
      "Support women's cooperatives"
    ],
    image: womenAgriculture
  },
  {
    id: 12,
    title: "Climate Resilience Program",
    isActive: true,
    runningSince: "2022",
    district: "Bonthe",
    targetReach: "9,000",
    keyFocusAreas: [
      "Adapt to climate change",
      "Promote environmental sustainability"
    ],
    image: climateResilience
  }
]

export default function ProgrammesPage() {
  const [selectedDistrict, setSelectedDistrict] = useState('All districts')
  const [selectedFocusArea, setSelectedFocusArea] = useState('All key focus areas')
  const [showActive, setShowActive] = useState(true)
  const [showComplete, setShowComplete] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Example districts of Sierra Leone for the dropdown
  const districts = [
    'All districts',
    'Western Area Urban',
    'Western Area Rural',
    'Bombali',
    'Koinadugu',
    'Kambia',
    'Port Loko',
    'Tonkolili',
    'Bo',
    'Kenema',
    'Pujehun',
    'Moyamba',
    'Bonthe',
    'Karene',
    'Kono',
    'Falaba',
    'Kailahun',
  ];

  const focusAreas = ['All key focus areas', 'Boost youth employment', 'Empower women', 'Support businesses'];

  const handleProgrammeClick = (programme: Programme) => {
    setSelectedProgramme(programme)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProgramme(null)
  }

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

          {/* Search button */}
          <button className="bg-[#3d8168] text-white px-6 py-2 rounded">
            Go
          </button>

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
          {programmes
            .filter(programme => 
              (selectedDistrict === 'All districts' || programme.district === selectedDistrict) &&
              (selectedFocusArea === 'All key focus areas' || programme.keyFocusAreas.includes(selectedFocusArea))
            )
            .map((programme) => (
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
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Active</span>
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
      {isModalOpen && (
        <ProgrammeModal programme={selectedProgramme} onClose={closeModal} />
      )}
    </div>
  )
}

