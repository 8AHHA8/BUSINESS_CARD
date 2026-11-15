function switchView(viewId, btnElement) {
    document.querySelectorAll('.content-view').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-hidden', 'true');
    });
    const target = document.getElementById(viewId);
    target.classList.add('active');
    target.setAttribute('aria-hidden', 'false');

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });

    if(btnElement) {
        btnElement.classList.add('active');
        btnElement.setAttribute('aria-selected', 'true');
    }

    const mapIds = {
        'tab-experience': ['tab-btn-experience', 'tab-btn-experience-m'],
        'tab-education': ['tab-btn-education', 'tab-btn-education-m'],
        'tab-projects': ['tab-btn-projects', 'tab-btn-projects-m']
    };

    if(mapIds[viewId]) {
        mapIds[viewId].forEach(id => {
            const el = document.getElementById(id);
            if(el) {
                el.classList.add('active');
                el.setAttribute('aria-selected', 'true');
            }
        });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const canvas = document.getElementById('sparkle-canvas');
const ctx = canvas.getContext('2d');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let width, height;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    const isMobile = window.innerWidth < 768;
    const config = {
        particleCount: isMobile ? 30 : 80, 
        minSize: 0.8, maxSize: 2.2, speedX: 0.2,       
    };

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * height; 
        }
        reset() {
            this.x = Math.random() * width;
            this.y = height + 20; 
            this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
            this.speedY = Math.random() * 0.3 + 0.1; 
            this.baseSpeedX = (Math.random() - 0.5) * config.speedX;
            this.speedX = this.baseSpeedX;
            this.alpha = Math.random() * 0.5 + 0.1; 
            this.rotation = Math.random() * Math.PI; 
        }
        update() {
            this.y -= this.speedY;
            
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                this.x -= (dx / dist) * 1.5;
                this.y -= (dy / dist) * 1.5;
            } else {
                this.x += this.speedX;
            }
            
            this.rotation += 0.005; 
            
            if (this.y < -20) { this.reset(); }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation); 

            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(255, 69, 0, ${this.alpha})`; 

            let gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.alpha * 1.5})`);
            gradient.addColorStop(0.3, `rgba(255, 115, 0, ${this.alpha})`);    
            gradient.addColorStop(0.7, `rgba(255, 42, 0, ${this.alpha * 0.6})`); 
            gradient.addColorStop(1, `rgba(150, 20, 0, 0)`);                    
            
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(0, -this.size * 3);
            ctx.lineTo(this.size * 0.3, 0);
            ctx.lineTo(0, this.size * 3);
            ctx.lineTo(-this.size * 0.3, 0);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(-this.size * 3, 0);
            ctx.lineTo(0, this.size * 0.3);
            ctx.lineTo(this.size * 3, 0);
            ctx.lineTo(0, -this.size * 0.3);
            ctx.closePath();
            ctx.fill();
            
            ctx.restore();
        }
    }

    for (let i = 0; i < config.particleCount; i++) { particles.push(new Particle()); }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}