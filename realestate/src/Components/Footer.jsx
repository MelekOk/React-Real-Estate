import React from "react";

export default function Footer(){
  return (
 <>
   <footer id="footer" class="footer light-background">

<div class="container">
  <div class="row gy-3">
    <div class="col-lg-3 col-md-6 d-flex">
      <i class="bi bi-geo-alt icon"></i>
      <div class="address">
        <h4>Adres</h4>
        <p>Cumhuriyet meydanı</p>
        <p>Beylikdüzü, İstanbul</p>
        <p></p>
      </div>

    </div>

    <div class="col-lg-3 col-md-6 d-flex">
      <i class="bi bi-telephone icon"></i>
      <div>
        <h4>İletişim</h4>
        <p>
          <strong>Telefon:</strong> <span>+9 5589 55488 55</span><br/>
          <strong>Email:</strong> <span>info@info.com</span><br/>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex">
      <i class="bi bi-clock icon"></i>
      <div>
        <h4>Açılış Saati</h4>
        <p>
          <strong>Pzt-Cmt:</strong> <span>11AM - 23PM</span><br/>
          <strong>Pazar</strong>: <span>Kapalı</span>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <h4>Bizi Takip Edin!</h4>
      <div class="social-links d-flex">
        <a href="https://www.twitter.com" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>

  </div>
</div>

<div class="container copyright text-center mt-4">
  <p>© <span>Copyright</span> <strong class="px-1 sitename">BizimEmlak</strong> <span>Telif Hakkı Saklıdır.</span></p>
  <div class="credits">
    
    
    
    
    Designed by <a href="https://github.com/MelekOk/">Melek Ok Aydın</a>
  </div>
</div>

</footer>
 </>
  );
}