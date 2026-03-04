// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Announcement
export interface DrupalAnnouncement extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  announcementDate?: {
    timestamp: number
  }
  priority?: string
  category?: string
  image?: DrupalImage
}

export interface AnnouncementsData {
  nodeAnnouncements: {
    nodes: DrupalAnnouncement[]
  }
}

// Board Member
export interface DrupalBoardMember extends DrupalNode {
  body?: {
    processed: string
  }
  positionTitle?: string
  email?: string
  termExpires?: string
  photo?: DrupalImage
}

export interface BoardMembersData {
  nodeBoardMembers: {
    nodes: DrupalBoardMember[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  rsvpRequired?: boolean
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Resource
export interface DrupalResource extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  resourceCategory?: string
  lastUpdated?: string
  image?: DrupalImage
}

export interface ResourcesData {
  nodeResources: {
    nodes: DrupalResource[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
