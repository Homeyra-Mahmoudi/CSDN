<template>
  <div class="lg:container mx-auto">
    <div class="grid lg:grid-cols-2">
  
      <div class="basis-1/2 bg-blue-950">
      <P class="font-Roboto text-5xl text-white font-normal sm:pl-14 sm:pr-8 sm:pt-20">Incontro - Dibattito</P>
      <p class="font-Roboto text-3xl text-white font-normal sm:pl-14 sm:pr-8 sm:pt-8 sm:pb-1 whitespace-break-spaces ">12 maggio 2023 
Sala Conferenze del Museo Nazionale
    </p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces">Matera, 12 maggio 2023, ore 16.00 - 19.00, c/o Camera di Commercio Matera, via Lucana n. 82 
L'evento è organizzato dal Centro Nazionale Studi di Diritto del Lavoro "D. Napoletano" - Sezione Lucania in collaborazione con l'Ordine degli Avvocati di Matera e con il patrocinio di Comune di Matera, ANCI Basilicata e ALI Basilicata</p>
      </div>
      <div class="slideshow-container bg-blue-950 basis-1/2 sm:pr-14">
        <img class="mx-auto" src="/EventiPassatii/slide 1.png" alt="event pics"/>
<!--             
              <transition-group name="slide-fade" tag="div">
                <div v-for="(image, index) in images" :key="generateSlideKey(image, index)" class="mySlides">
                  <img
                    :src="image"
                    alt="Slideshow Image"
                    class="max-w-full h-auto"
                    @click="openOverlay(index)"
                  />
                </div>
              </transition-group>
             
              <a class="prev" @click="prevSlide">&#10094;</a>
              <a class="next" @click="nextSlide">&#10095;</a> -->
            
          </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/EventiPassatii/unsplash__wDZkpybAfY.png",
        "/EventiPassatii/unsplash_bzdhc5b3Bxs.png",
        "/EventiPassatii/unsplash_dGxOgeXAXm8.png",
        "/EventiPassatii/unsplash_F2KRf_QfCqw.png",
      ], // Add your image URLs
      currentSlideIndex: 0,
      overlayVisible: false,
    };
  },
  methods: {
    generateSlideKey(image, index) {
      // Generate a unique key based on the image URL and index
      return `${image}-${index}`;
    },
    openOverlay(index) {
      this.currentSlideIndex = index;
      this.overlayVisible = true;
    },
    closeOverlay() {
      this.overlayVisible = false;
    },
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>

</style>