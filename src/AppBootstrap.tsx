import {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Counter from './components/counter'

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function App() {
  const [open, setOpen] = useState('1');
  const toggle = (id:string) => {
    if (open !== id) {
        setOpen(id);
    }
  };
  return (
    <>
        
    <section id="hero" className="pt-10">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 align-self-center">
                    <div>
                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                        terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a className="btn btn-success">Mulai Sewa Mobil</a>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end">
                    <img className="img-fluid" src="assets/img/car.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    <section id="ourservice">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="assets/img/service.png" alt=""/>
                </div>
                <div className="col-12 col-md-6 align-self-center">
                    <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                        lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                        wedding, meeting, dll.</p>
                    <ul className="list-check">
                        <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                        <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                        <li>Sewa Mobil Jangka Panjang Bulanan</li>
                        <li>Gratis Antar - Jemput Mobil di Bandara</li>
                        <li>Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="whyus">
        <div className="container">
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="assets/img/icon_complete.svg" alt=""/>
                            <h3>Mobil Lengkap</h3>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="assets/img/icon_price.svg" alt=""/>
                            <h3>Harga Murah</h3>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="assets/img/icon_24hrs.svg" alt=""/>
                            <h3>Layanan 24 Jam</h3>
                            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="assets/img/icon_professional.svg" alt=""/>
                            <h3>Sopir Profesional</h3>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonial">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="card">
                    <h1>super</h1>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="card">
                    <h1>super</h1>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                    <h1>super</h1>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </section>
    <section id="banner">
        <div className="container text-center">
            <h2 className="mb-4">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et
                dolore magna aliqua. </p>
            <a href="#" className="btn btn-success">Mulai Sewa Mobil</a>
        </div>
    </section>
    <section id="faq">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-12 col-md-6">
                  <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                      <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
                      <AccordionBody accordionId="1">
                        <strong>This is the first item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                      <AccordionBody accordionId="2">
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                      <AccordionBody accordionId="3">
                        <strong>This is the third item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                      </AccordionBody>
                    </AccordionItem>
                  </Accordion>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-12 col-md-3">
                    <ul className="links">
                        <li><a href="">Our services</a></li>
                        <li><a href="">Why Us</a></li>
                        <li><a href="">Testimonial</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <h6>Connect with us</h6>
                    <ul className="social">
                        <li><a href=""><img src="assets/img/icon_facebook.svg" alt=""/></a></li>
                        <li><a href=""><img src="assets/img/icon_instagram.svg" alt=""/></a></li>
                        <li><a href=""><img src="assets/img/icon_twitter.svg" alt=""/></a></li>
                        <li><a href=""><img src="assets/img/icon_mail.svg" alt=""/></a></li>
                        <li><a href=""><img src="assets/img/icon_twitch.svg" alt=""/></a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <h6>Copyright Binar 2022</h6>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
