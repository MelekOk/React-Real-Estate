import React from "react";
import Hero from "../Components/Hero";


export default function About(){
  return (
 <>
 <Hero slug="hakkimizda"></Hero>

 <section id="about" className="about section">

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
      <p className="who-we-are">BİZ KİMİZ?</p>
      <h3>Yenilikçi Yaklaşımlarla Gizli Gücü Gün Yüzüne Çıkarma</h3>
      <p className="fst-italic">
      Yenilikçi yöntemler ve stratejiler kullanarak, mevcut kaynakların ve fırsatların ötesinde, gizli kalmış potansiyelleri ortaya çıkarıyoruz.
      </p>
      <ul>
        <li><i className="bi bi-check-circle"></i> <span>Yeni Stratejilerle Potansiyeli Keşfetme.</span></li>
        <li><i className="bi bi-check-circle"></i> <span>Veri ve Teknolojinin Gücünden Yararlanma.</span></li>
        <li><i className="bi bi-check-circle"></i> <span>Ekip ve İşbirliği İle Yenilikçi Çözümler Üretme.</span></li>
      </ul>
    </div>

    <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
      <div className="row gy-4">
        <div className="col-lg-6">
          <img src="img/about-company-1.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6">
          <div className="row gy-4">
            <div className="col-lg-12">
              <img src="img/about-company-2.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-12">
              <img src="img/about-company-3.jpg" className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>
</section>


<section id="stats" className="stats section">

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-3 col-md-6">
      <div className="stats-item d-flex align-items-center w-100 h-100">
        <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span>
          <p>Mutlu Müşteri</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="stats-item d-flex align-items-center w-100 h-100">
        <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">200</span>
          <p>Proje</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="stats-item d-flex align-items-center w-100 h-100">
        <i className="bi bi-headset color-green flex-shrink-0"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">100</span>
          <p>Destek Ekibi</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="stats-item d-flex align-items-center w-100 h-100">
        <i className="bi bi-people color-pink flex-shrink-0"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">50</span>
          <p>Çalışan</p>
        </div>
      </div>
    </div>

  </div>

</div>

</section>


<section id="features" className="features section">

<div className="container">

  <div className="row justify-content-around gy-4">
    <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src="img/features-bg.jpg" alt=""/></div>

    <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <h3>Misyonumuz ve Vizyonumuz</h3>
      <p>Misyonumuz, müşterilerimize en yüksek kaliteyi ve en uygun fiyatları sunarak, emlak ihtiyaçlarını en iyi şekilde karşılamaktır</p>

      <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-easel flex-shrink-0"></i>
        <div>
          <h4><a href="" className="stretched-link">Kapsamlı Araçlar ve Filtreleme Seçenekleri</a></h4>
          <p>Müşterilere, geniş bir gayrimenkul portföyünü kolayca keşfetme olanağı sunan kullanıcı dostu arayüz.</p>
        </div>
      </div>

      <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-patch-check flex-shrink-0"></i>
        <div>
          <h4><a href="" className="stretched-link">Gerçek Zamanlı Güncellemeler ve Bildirimler</a></h4>
          <p>En yeni ilanlar, fiyat değişiklikleri ve güncellemeler hakkında anında bilgi almanızı sağlayan gerçek zamanlı bildirimler.</p>
        </div>
      </div>

      <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
        <i className="bi bi-brightness-high flex-shrink-0"></i>
        <div>
          <h4><a href="" className="stretched-link">Etkileşimli Harita Görünümleri ve 3D Turlar</a></h4>
          <p>Mülklerin konumlarını ve çevresini daha iyi anlamanızı sağlayan etkileşimli harita görünümleri ve 3D sanal turlar ile, potansiyel alıcıların mülkleri daha kapsamlı bir şekilde değerlendirmelerini sağlar.</p>
        </div>
      </div>

      <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
        <i className="bi bi-brightness-high flex-shrink-0"></i>
        <div>
          <h4><a href="" className="stretched-link">Kişiye Özel Danışmanlık ve Destek Hizmetleri</a></h4>
          <p>Deneyimli danışmanlar tarafından sunulan kişiye özel destek ve rehberlik hizmetleri ile, müşterilerin tüm sorularına yanıt bulmalarını ve mülk satın alma sürecinde profesyonel yardım almalarını sağlar.</p>
        </div>
      </div>

    </div>
  </div>

</div>

</section>
 </>
  );
}