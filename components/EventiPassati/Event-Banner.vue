<template>
  <div class="lg:container mx-auto">
    <div class="grid lg:grid-cols-2">
  
      <div class="basis-1/2 bg-blue-950">
      <P class="font-Roboto text-5xl text-white font-normal sm:pl-14 sm:pr-8 sm:pt-20">Incontro - Dibattito</P>
      <p class="font-Roboto text-3xl text-white font-normal sm:pl-14 sm:pr-8 sm:pt-8 sm:pb-1 whitespace-break-spaces ">RIFORMA CARTABIA E RIFLESSI SUL PROCESSO DEL LAVORO
    </p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces">MERCOLEDI’ 28 GIUGNO 2023, ore 17.00-19.00</p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces">Palazzo di giustizia Maxi Aula 1</p> 
      <p class="font-Roboto text-xl text-white font-extrathin sm:pb-2 sm:pt-4 sm:pl-14 sm:pr-8 whitespace-break-spaces">PRESIEDE E MODERA:</p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces "><span class="font-bold">Dott.ssa DANIELA PALIAGA</span>, Presidente Centro Studi Sezione Piemonte e
Presidente della sezione lavoro del Tribunale di Torino</p> 
<p class="font-Roboto text-xl text-white font-extrathin sm:pb-2 sm:pt-4 sm:pl-14 sm:pr-8 whitespace-break-spaces">RELAZIONANO:</p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces "><span class="font-bold">Prof. Avv.to Giorgio Frus, Foro di Torino</span></p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces "><span class="font-bold">Dr. Mauro Mollo, Magistrato Tribunale di Torino Sezione Lavoro</span></p>
      <p class="font-Roboto text-xl text-white font-extrathin sm:pl-14 sm:pr-8 whitespace-break-spaces "><span class="font-bold">eguirà dibattito</span></p>
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