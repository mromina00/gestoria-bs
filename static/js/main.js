import { services } from './services.js'

// generar HTML de Services
const generateServicesHTML = () => {
    return services.map(service => `
        <div class="service-card-wrapper">
            <div class="service-card">
                <h3>${service.title}</h3>
                <div class="service-description">
                    ${service.description ?
                        `<p>${service.description}</p>` :
                        `<ul>${service.items.map(item => `<li>${item}</li>`).join('')}</ul>`
                    }
                </div>
            </div>
        </div>
    `).join('')
}

document.querySelector('#app').innerHTML = `
    <header class="header">
        <div class="logo">
            <span class="bs">BS</span> Gestoría
        </div>
        <nav class="nav">
            <a href="#inicio">Inicio</a>
            <a href="#presentacion">Quién Soy</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
        </nav>
        <button class="mobile-menu" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>

    <main id="inicio" class="hero">
        <div class="hero-content">
            <h2 class="highlight">AHORRÁ TIEMPO Y ESFUERZO</h2>
            <h1>Gestoría Del Automotor</h1>
            <p>Gestión y asesoría integral para resolver tus trámites automotores de forma rápida y
            efectiva.</p>
            <button class="cta-button"><a href="https://wa.me/message/HNDKUURFY76TL1" target="_blank">
                CONTACTATE
                <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
            </button>
        </div>
        <div class="hero-image">
            <img src="./static/img/mini-cooper.webp" alt="Minie Cooper" class="car-img" loading="lazy">
        </div>
        <div class="wave-decoration">
            <svg class="gray-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#8596a6" fill-opacity="1"
                    d="M0,64L60,85.3C120,107,240,149,360,154.7C480,160,600,128,720,144C840,160,960,224,1080,224C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
            <svg class="pink-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f25c84" fill-opacity="1"
                    d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,133.3C840,171,960,213,1080,197.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
        </div>
    </main>

    <section id="presentacion" class="about">
        
        <div class="about-content">
            <div class="about-image">
                <img src="./static/img/about-img.webp" alt="Gestoría Bibiana Sosa" class="profile-img" loading="lazy">
            </div>
            <div class="about-text">
                <h2>Quién Soy</h2>
                <p>Soy <b>Bibiana Sosa</b>, matriculada como mandataria por la Dirección Nacional del Registro de Propiedad del Automotor, dedicada a ofrecer soluciones confiables para tus gestiones vehiculares. Me especializo en hacer que todos los trámites relacionados con tu vehículo sean simples y sin complicaciones.</p>
                <p>Mi compromiso es brindarte la tranquilidad y seguridad que necesitás en cada gestión, garantizando transparencia y eficiencia en todos los procesos.</p>
                <div class="credentials">
                    <div class="credential-item">
                        <span class="material-symbols-outlined icon">task_alt</span>
                        <span>Mandataria Matriculada</span>
                    </div>
                    <div class="credential-item">
                        <span class="material-symbols-outlined icon">support_agent</span>
                        <span>Atención Personalizada</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="features-grid">
            <div class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#F2F2F2"><path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67t237.17-96.16Q813.33-339 813.33-480q0-26-3.66-51-3.67-25-11-48.67L851-632q14.33 35.33 21.67 73.33 7.33 38 7.33 78.67 0 84.33-31.17 157.33-31.16 73-85.16 127t-127 84.84Q563.67-80 480-80Zm-58-217.33L255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z"/></svg>
                </div>
                <h3>Experiencia y Profesionalismo</h3>
            </div>
            <div class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#F2F2F2"><path d="M319.33-246.67h321.34v-66.66H319.33v66.66Zm0-166.66h321.34V-480H319.33v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/></svg>
                </div>
                <h3>Gestión Completa de Documentación</h3>
            </div>
            <div class="feature-item">
                <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#F2F2F2"><path d="m622-288.67 48.67-48.66-155.34-156v-195.34h-66.66v222l173.33 178ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-82.33 31.5-155.33 31.5-73 85.83-127.34Q251.67-817 324.67-848.5T480-880q82.33 0 155.33 31.5 73 31.5 127.34 85.83Q817-708.33 848.5-635.33T880-480q0 82.33-31.5 155.33-31.5 73-85.83 127.34Q708.33-143 635.33-111.5T480-80Zm0-400Zm0 333.33q137.67 0 235.5-97.83 97.83-97.83 97.83-235.5 0-137.67-97.83-235.5-97.83-97.83-235.5-97.83-137.67 0-235.5 97.83-97.83 97.83-97.83 235.5 0 137.67 97.83 235.5 97.83 97.83 235.5 97.83Z"/></svg>
                </div>
                <h3>Trámites en Tiempo y Forma</h3>
            </div>
        </div>
    </section>

    <section id="servicios" class="services">
        
        <h2>Servicios</h2>
        <div class="services-grid">
            ${generateServicesHTML()}
        </div>
    </section>

    

    <section id="contacto" class="contact">
        <div class="contact-content">
            <h2>Contacto</h2>
            <p class="p">Dejá tu consulta y te respondo a la brevedad</p>

            <div class="contact-info">
                <a href="tel:+5492625512166" class="contact-item" target="_blank">
                    <div class="contact-icon">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                    </div>
                    <div class="contact-details">
                        <p>Llamar al <br>+54 9 2625 51-2166</p>
                    </div>
                </a>
                <div class="contact-item">
                    <div class="contact-icon">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
                    </div>
                    <div class="contact-details">
                        <p>Lunes a Viernes de</p>
                        <p>09 a 18 Hs.</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                    </div>
                    <div class="contact-details">
                        <p>Email: bibianso33@gmail.com</p>
                    </div>
                </div>
            </div>
            <p class="location">General Alvear, Mendoza</p>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <span class="bs">BS</span> Gestoría
            </div>
            <div class="footer-links">
                <a href="#inicio">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#presentacion">Quién Soy</a>
                <a href="#contacto">Contacto</a>
            </div>
            <div class="footer-social">
                <a href="mailto:bibianso33@gmail.com" aria-label="Gmail" target="_blank">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="26"  height="26"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
                <a href="https://wa.me/message/HNDKUURFY76TL1" aria-label="WhatsApp" target="_blank">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="26"  height="26"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.75"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} BS Gestoría | Sitio web creado por <a href="https://www.linkedin.com/in/romina-moreno-62b479290/" target="_blank">Romina Moreno</a></p>
        </div>
    </footer>
`

// funcionalidad mobile menu

const mobileMenuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

mobileMenuBtn?.addEventListener('click', () => {
    nav?.classList.toggle('nav-active');
    mobileMenuBtn?.classList.toggle('menu-active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        mobileMenuBtn.classList.remove('menu-active');
    });
});

// funcionalidad tarjetas mobile

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();
    
        if (card.classList.contains('open')) {
            card.classList.remove('open');
        } else {
            serviceCards.forEach(c => c.classList.remove('open'));
            card.classList.add('open');
        }
    });
});

// cerrar tarjetas haciendo clic en la pantalla
document.addEventListener('click', () => {
    serviceCards.forEach(card => card.classList.remove('open'));
});