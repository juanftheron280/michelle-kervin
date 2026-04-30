export default function ImageGallery({ photos }) {
  return (
    <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl px-4 mx-auto">
      {photos.map((src, idx) => (
        <div
          key={idx}
          className="relative flex-grow transition-all w-40 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          style={{ minWidth: '40px' }}
        >
          <img
            className="h-full w-full object-cover object-center"
            src={src}
            alt={`gallery-${idx}`}
          />
        </div>
      ))}
    </div>
  )
}
