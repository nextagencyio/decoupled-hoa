import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        __typename
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Announcements
export const GET_ANNOUNCEMENTS = gql`
  query GetAnnouncements($first: Int = 20) {
    nodeAnnouncements(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeAnnouncement {
          body {
            processed
            summary
          }
          announcementDate {
            timestamp
          }
          priority
          category
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ANNOUNCEMENT_BY_PATH = gql`
  query GetAnnouncementByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAnnouncement {
            __typename
            id
            title
            path
            body {
              processed
            }
            announcementDate {
              timestamp
            }
            priority
            category
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Board Members
export const GET_BOARD_MEMBERS = gql`
  query GetBoardMembers($first: Int = 20) {
    nodeBoardMembers(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeBoardMember {
          body {
            processed
          }
          positionTitle
          email
          termExpires
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_BOARD_MEMBER_BY_PATH = gql`
  query GetBoardMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeBoardMember {
            __typename
            id
            title
            path
            body {
              processed
            }
            positionTitle
            email
            termExpires
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          rsvpRequired
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            rsvpRequired
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Resources
export const GET_RESOURCES = gql`
  query GetResources($first: Int = 20) {
    nodeResources(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeResource {
          body {
            processed
            summary
          }
          resourceCategory
          lastUpdated
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_PATH = gql`
  query GetResourceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeResource {
            __typename
            id
            title
            path
            body {
              processed
            }
            resourceCategory
            lastUpdated
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeAnnouncement {
            __typename
            id
            title
            path
            body {
              processed
            }
            announcementDate {
              timestamp
            }
            priority
            category
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeBoardMember {
            __typename
            id
            title
            path
            body {
              processed
            }
            positionTitle
            email
            termExpires
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            rsvpRequired
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeResource {
            __typename
            id
            title
            path
            body {
              processed
            }
            resourceCategory
            lastUpdated
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured announcements for homepage (limit to 3)
export const GET_FEATURED_ITEMS = gql`
  query GetFeaturedItems {
    nodeAnnouncements(first: 3, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeAnnouncement {
          announcementDate {
            timestamp
          }
          priority
          category
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
