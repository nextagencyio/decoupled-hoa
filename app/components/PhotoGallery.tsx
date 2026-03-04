'use client'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop',
    alt: 'Community homes',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&fit=crop',
    alt: 'Community pool area',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&fit=crop',
    alt: 'Neighborhood park',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop',
    alt: 'Community entrance',
  },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Life at Willowbrook
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the beauty and community spirit that makes our neighborhood special.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
