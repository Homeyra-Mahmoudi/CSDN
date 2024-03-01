<template>
    <div class="lg:container mx-auto pl-38 pr-38">
      <div class="grid lg:grid-cols-2 ">
    
        <div class="basis-1/2 bg-light-blue-row bg-opacity-50 sm:py-8">
        <P class="font-Roboto md:text-3xl text-black font-normal pl-14 pr-8 pt-4">Incontro - Dibattito</P>
        <p class="font-Roboto md:text-xl text-black font-normal pl-14 pr-8 pt-2 whitespace-break-spaces ">NUOVE BUONE PRASSI DELLA SEZIONE LAVORO E DEONTOLOGIA</p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces">GIOVEDÌ 14 DICEMBRE 2023, ore 17.00-20.00</p>
        <p class="font-Roboto md:text-xl text-black font-extrathin pb-2 pt-4 pl-14 pr-8 whitespace-break-spaces">PRESIEDONO:</p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces "><span class="md:font-bold">Dott.ssa Clotilde Fierro <br>Avv.to Giovanna Pacchiana Parravicini<br>Dott.ssa Daniela Paliaga</span></p> 
        <p class="font-Roboto md:text-xl text-black font-extrathin pb-2 pt-4 pl-14 pr-8 whitespace-break-spaces">RELAZIONA:</p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces "><span class="md:font-bold">Avv.to Paolo BERTI</span><br>Consigliere dell’Ordine degli Avvocati di Torino “Le buone prassi e la deontologia dell’Avvocato”</p>
        </div>
        <div class="basis-1/2 bg-light-blue-row bg-opacity-50 sm:py-8">
        <P class="font-Roboto md:text-3xl text-black font-normal pl-14 pr-8 pt-4">Incontro - Dibattito</P>
        <p class="font-Roboto md:text-xl text-black font-normal pl-14 pr-8 pt-2 whitespace-break-spaces ">RIFORMA CARTABIA E RIFLESSI SUL PROCESSO DEL LAVORO</p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces">MERCOLEDI’ 28 GIUGNO 2023, ore 17.00-19.00</p>
        <p class="font-Roboto md:text-xl text-black font-extrathin pb-2 pt-4 pl-14 pr-8 whitespace-break-spaces">PRESIEDE E MODERA:</p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces "><span class="md:font-bold">Dott.ssa DANIELA PALIAGA</span>, Presidente Centro Studi Sezione Piemonte e Presidente della sezione lavoro del Tribunale di Torino</p> 
        <p class="font-Roboto md:text-xl text-black font-extrathin pb-2 pt-4 pl-14 pr-8 whitespace-break-spaces">RELAZIONANO:</p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces "><span class="md:font-bold">Prof. Avv.to Giorgio Frus, Foro di Torino</span></p>
        <p class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces "><span class="md:font-bold">Dr. Mauro Mollo, Magistrato Tribunale di Torino Sezione Lavoro</span></p>
        <br><br><p class="font-Roboto md:text-xl text-black font-extrathin pb-2 pt-4 pl-14 pr-8 whitespace-break-spaces">Archivio di diapositive </p>
        <ul class="list-image-[url(/EventiPassatii/Presentation-white.svg)] list-inside pl-2 py-4" >
                    <a  href="https://mega.nz/#P!AgGwlADcJMv_ZEE4ly5XWmokXV-qmSTeM7Eei-OYtdzHgPx6EZJRiI2PVsNmfPR424e8uyZr4ORjFkGJI_tY18jCcbV8XlZwQVyblRVUnc2vN2i1c9T2okAexj-qmDPIiXJQoW-7_GQ" target="_blank"><li class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces hover:text-sky-500">RIFORMA CARTABIA E RIFLESSI SUL PROCESSO DEL LAVORO - Avv. prof. Giorgio Frus</li></a>
                    <a href="https://mega.nz/#P!AgHVmmUYDBJ4sgV8MtKNMYxpmu5g_ZIp9D-9N2FjxMXwCBdXz2iXUdeM72HMJRdRO2nwHI69JiYLpxG75xg7J8Cfq4kLDs9DDy78fLrs7eP13YcdYgX7bMUuRJoFHh9rD5YrRunyDHM" target="_blank"><li class="font-Roboto md:text-l text-black font-extrathin pl-14 pr-8 whitespace-break-spaces hover:text-sky-500">RIFORMA CARTABIA E RIFLESSI SUL PROCESSO DEL LAVORO - Mauro Mollo</li></a>
                </ul>
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