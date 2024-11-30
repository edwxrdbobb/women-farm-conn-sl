import { StaticImageData } from 'next/image'

export interface Programme {
  id: number
  title: string
  isActive: boolean
  runningSince: string
  district: string
  targetReach: string
  keyFocusAreas: string[]
  image: StaticImageData
  description: string
  startDate: string
  endDate: string
  eligibilityCriteria: string
  resources: string[]
}