<template>
    <div>
      <section id="aboutUS-banner">
        <div class="container-fluid">
          <div class="row">
            <!-- introductory illustartion graphic of about us -->
            <div
              class="Banner-AboutUS"
              :style="'background-image: url(' + bigBanner + ');'"
            >
              <div class="col-md-12">
                <!-- introductory text of about us -->
                <div class="slide_text_aboutus">
                  <h3>Client's Satisfaction <br />is the Goal</h3>
                  <br />
                  <h4>
                    <span class="theme_color"> of Our Business</span>
                  </h4>
                  <br />
                  <!-- description of about us  -->
                  <p>
                    Our company was born in 2000 aiming at offering state-of-the-art digital innovation services and industries to small and large businesses. <br />
                    We offer our solutions in “Software & Hardware Infrastructure”, “Business process services” and “Application & Security”.
                  </p>
                  <a class="contact_bt" href="#Founder">Explore more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bigBanner: { type: String, default: () => '/2.png' },
    },
  }
  </script>
  
  <style>
  #aboutUS-banner {
    max-height: 1500px;
    width: 100%;
  }
  .Banner-AboutUS {
    background-repeat: no-repeat;
    min-height: 100vh;
    background-size: cover;
    width: 100%;
  }
  .slide_text_aboutus {
    margin-top: 220px;
    padding-left: 80px;
    display: block !important;
    word-break: break-word;
  }
  .slide_text_aboutus h3 {
    font-size: 50px;
    font-weight: 700;
    padding: 0;
    line-height: 45px !important;
    text-transform: uppercase;
  }
  
  .slide_text_aboutus h4 {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  
  .slide_text_aboutus p {
    color: #f2184f;
    font-size: 20px;
    font-weight: 300;
    padding-top: 0;
    line-height: normal;
    margin-bottom: 0;
  }
  .contact_bt {
    width: 180px;
    height: 50px;
    background: #f2184f;
    color: #fff;
    float: left;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin-top: 50px;
    border-radius: 5px;
  }
  
  .contact_bt:hover,
  .contact_bt:focus {
    color: #fff;
  }
  
  .dark_bg .contact_bt {
    margin-top: 30px;
  }
  /*responsiveness for mobile*/
  @media (max-width: 767px) {
    .slide_text_aboutus {
      padding-left: 40px;
    }
    .slide_text_aboutus h3 {
      font-size: 30px;
    }
    .slide_text_aboutus h4 {
      font-size: 20px;
    }
  }
  </style>
  