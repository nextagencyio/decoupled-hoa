'use client'

import { Home, Users, TreePine, Shield, Calendar, Mail } from 'lucide-react'

const reasons = [
  {
    icon: Home,
    title: 'Beautiful Community',
    description: 'Well-maintained common areas and landscaping that enhance property values for all residents.',
  },
  {
    icon: Users,
    title: 'Active Residents',
    description: 'A vibrant community of engaged neighbors who participate in events and decision-making.',
  },
  {
    icon: TreePine,
    title: 'Green Spaces',
    description: 'Parks, trails, and green spaces designed for recreation and natural beauty.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Comprehensive security measures and community watch programs for peace of mind.',
  },
  {
    icon: Calendar,
    title: 'Community Events',
    description: 'Regular social gatherings, seasonal celebrations, and family-friendly activities.',
  },
  {
    icon: Mail,
    title: 'Clear Communication',
    description: 'Transparent governance with regular updates, newsletters, and open board meetings.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Willowbrook HOA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to community excellence makes Willowbrook a wonderful place to call home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
