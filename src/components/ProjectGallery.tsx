import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  type?: 'app' | 'web';
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title, type = 'web' }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const isApp = type === 'app';

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  };

  return (
    <div className="space-y-6 mt-12">
      <div className="flex items-center space-x-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Galería del Proyecto</h2>
        <div className="h-px flex-1 bg-gray-800"></div>
      </div>
      
      <div className={`grid gap-4 ${isApp ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`group relative ${isApp ? 'aspect-[9/16]' : 'aspect-video'} bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10`}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image} 
              alt={`${title} - Imagen ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          <button 
            className="absolute left-4 p-4 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className={`${isApp ? 'max-w-[400px]' : 'max-w-[90vw]'} max-h-[85vh] relative group px-4`}>
            <img 
              src={images[selectedImage]} 
              alt={`${title} full - Imagen ${selectedImage + 1}`}
              className="w-full h-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center text-white/70 text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          <button 
            className="absolute right-4 p-4 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;