import React from "react";
import heroGallery from "../Assets/images/gallery/gallery (7).jpg";
function GalleryHero() {
  return (
    <div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            style={{height: '550px', objectFit: 'cover', width: '100%', objectPosition:'center'}}
            src={heroGallery}
            alt=""
            loading="lazy"
          />
        </div>
        
      </div>
    </div>
  );
}

export default GalleryHero;
