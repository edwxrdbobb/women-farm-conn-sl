import { Programme } from '@/types/Programme'
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

export const programmes: Programme[] = [
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
    image: agribusiness,
    description: "A programme focused on empowering youth and women in the agricultural sector.",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    eligibilityCriteria: "Open to all youth and women in agriculture.",
    resources: ["Training materials", "Financial support"],
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
    image: alliance,
    description: "An alliance to connect farmers with markets and boost agricultural productivity.",
    startDate: "2022-01-01",
    endDate: "2024-12-31",
    eligibilityCriteria: "Open to small-scale farmers and agricultural businesses.",
    resources: ["Market access support", "Agricultural inputs"],
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
    image: sustainableHousehold,
    description: "A programme aimed at sustainable economic development for households.",
    startDate: "2021-06-01",
    endDate: "2024-05-31",
    eligibilityCriteria: "Open to low-income households in rural areas.",
    resources: ["Financial literacy training", "Micro-loans"],
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
    image: refugees,
    description: "Supporting young refugees in starting and growing their own businesses.",
    startDate: "2022-03-15",
    endDate: "2023-12-31",
    eligibilityCriteria: "Young refugees aged 18-35 residing in Koinadugu district.",
    resources: ["Business mentorship", "Seed funding"],
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
    image: nourish,
    description: "A comprehensive programme to improve nutrition and food security while addressing climate change.",
    startDate: "2024-01-01",
    endDate: "2028-12-31",
    eligibilityCriteria: "Open to all residents of Kambia district.",
    resources: ["Nutritional education", "Climate-smart agriculture techniques"],
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
    image: participatoryForest,
    description: "Engaging local communities in sustainable forest management practices.",
    startDate: "2022-07-01",
    endDate: "2025-06-30",
    eligibilityCriteria: "Communities living in or near forested areas in Port Loko district.",
    resources: ["Forest management training", "Sustainable harvesting equipment"],
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
    image: healthInitiative,
    description: "Improving community health through better access to healthcare and education.",
    startDate: "2023-04-01",
    endDate: "2026-03-31",
    eligibilityCriteria: "All residents of Tonkolili district.",
    resources: ["Mobile health clinics", "Health education materials"],
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
    image: agriculturalTraining,
    description: "Providing comprehensive agricultural training to improve farming practices and yields.",
    startDate: "2022-09-01",
    endDate: "2025-08-31",
    eligibilityCriteria: "Farmers in Bo district with less than 5 acres of land.",
    resources: ["Agricultural workshops", "Demonstration farms"],
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
    image: youthEmpowerment,
    description: "Empowering youth through vocational training and employment opportunities.",
    startDate: "2021-11-01",
    endDate: "2024-10-31",
    eligibilityCriteria: "Youth aged 18-30 in Kenema district.",
    resources: ["Vocational training courses", "Job placement assistance"],
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
    image: sustainableFarming,
    description: "Introducing and promoting sustainable farming practices to improve food security.",
    startDate: "2024-02-01",
    endDate: "2027-01-31",
    eligibilityCriteria: "Farmers in Pujehun district interested in adopting sustainable practices.",
    resources: ["Sustainable farming workshops", "Eco-friendly farming inputs"],
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
    image: womenAgriculture,
    description: "Supporting and empowering women in agriculture through training and cooperative development.",
    startDate: "2023-05-01",
    endDate: "2026-04-30",
    eligibilityCriteria: "Women farmers and aspiring farmers in Moyamba district.",
    resources: ["Agricultural skills training", "Cooperative management support"],
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
    image: climateResilience,
    description: "Building community resilience to climate change through adaptation strategies.",
    startDate: "2022-08-01",
    endDate: "2025-07-31",
    eligibilityCriteria: "Residents of coastal communities in Bonthe district.",
    resources: ["Climate adaptation training", "Resilient infrastructure support"],
  }
]

