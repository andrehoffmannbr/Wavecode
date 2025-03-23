// Animação de elementos ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar se um elemento está visível na viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Elementos para animar
    const animateElements = document.querySelectorAll('.content-item, .testimonial, .hero-features, .cta-features, .tech-icons');

    // Função para adicionar animação aos elementos visíveis
    const handleScroll = () => {
        animateElements.forEach((element, index) => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('animated');
                }, index * 150); // Efeito cascata
            }
        });
    };

    // Adicionar listener para scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar elementos visíveis no carregamento inicial

    // Animação para ícones de tecnologia
    const techIcons = document.querySelectorAll('.tech-icons i');
    techIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        setTimeout(() => {
            icon.style.transition = 'all 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });

    // Efeito parallax no header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação para os cards de conteúdo
    const cards = document.querySelectorAll('.content-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            const icon = card.querySelector('.item-icon i');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            const icon = card.querySelector('.item-icon i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Animação para o vídeo
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('mouseenter', () => {
            videoPlaceholder.querySelector('.video-overlay').style.opacity = '1';
        });

        videoPlaceholder.addEventListener('mouseleave', () => {
            videoPlaceholder.querySelector('.video-overlay').style.opacity = '0';
        });

        videoPlaceholder.addEventListener('click', () => {
            // Aqui você pode adicionar a lógica para abrir o vídeo
            alert('Aqui será reproduzido o vídeo de vendas do curso!');
        });
    }

    // Efeito de destaque no botão CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05) translateY(-5px)';
            button.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1) translateY(0)';
            button.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animação para os ícones de features
    const features = document.querySelectorAll('.hero-features .feature, .cta-features .cta-feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            const icon = feature.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });

        feature.addEventListener('mouseleave', () => {
            const icon = feature.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Efeito de hover nos links sociais
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
            link.style.color = '#3b82f6';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.color = 'white';
        });
    });

    // Adicionar classe ativa ao link do menu quando a seção estiver visível
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Efeito de digitação para o título
    const typeWriter = (text, element, speed = 100) => {
        let i = 0;
        element.innerHTML = '';
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    };

    const headerTitle = document.querySelector('.header-title');
    if (headerTitle) {
        const text = headerTitle.getAttribute('data-text');
        typeWriter(text, headerTitle);
    }

    // Efeito de hover nos ícones de tecnologia
    const techIconsHover = document.querySelectorAll('.tech-icons i');
    techIconsHover.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const tech = icon.getAttribute('data-tech');
            const tooltip = document.createElement('div');
            tooltip.className = 'tech-tooltip';
            tooltip.innerHTML = `
                <div class="tooltip-content">
                    <span>${tech}</span>
                    <div class="tooltip-details">
                        <div class="progress-bar"></div>
                    </div>
                </div>
            `;
            icon.appendChild(tooltip);

            setTimeout(() => {
                tooltip.querySelector('.progress-bar').style.width = '100%';
            }, 100);
        });

        icon.addEventListener('mouseleave', () => {
            const tooltip = icon.querySelector('.tech-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Efeito de Matrix no background
    const createMatrixEffect = () => {
        const canvas = document.createElement('canvas');
        canvas.className = 'matrix-bg';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        const matrixArray = matrix.split("");

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        setInterval(draw, 35);
    };

    // Efeito de glitch nos cards
    const cardsHover = document.querySelectorAll('.content-item');
    cardsHover.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'all 0.3s ease';
            
            // Adiciona efeito de glitch
            const glitchEffect = () => {
                const glitchStates = [
                    'translate(2px, 2px)',
                    'translate(-2px, -2px)',
                    'translate(0, 0)'
                ];
                
                let counter = 0;
                const glitchInterval = setInterval(() => {
                    card.style.transform = `scale(1.02) ${glitchStates[counter % 3]}`;
                    counter++;
                    
                    if (counter > 30) {
                        clearInterval(glitchInterval);
                        card.style.transform = 'scale(1.02)';
                    }
                }, 50);
            };
            
            setTimeout(glitchEffect, 500);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Efeito de energia nos botões
    const buttonsHover = document.querySelectorAll('.cta-button, .nav-cta');
    buttonsHover.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const energyParticles = 10;
            for (let i = 0; i < energyParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'energy-particle';
                const angle = (i / energyParticles) * 360;
                const velocity = 2 + Math.random() * 2;
                
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--accent-color);
                    border-radius: 50%;
                    pointer-events: none;
                    opacity: 0;
                `;
                
                button.appendChild(particle);
                
                const animation = particle.animate([
                    {
                        transform: 'translate(-50%, -50%)',
                        opacity: 1
                    },
                    {
                        transform: `translate(
                            ${Math.cos(angle * Math.PI / 180) * 50}px,
                            ${Math.sin(angle * Math.PI / 180) * 50}px
                        )`,
                        opacity: 0
                    }
                ], {
                    duration: 1000 / velocity,
                    easing: 'cubic-bezier(0, .9, .57, 1)'
                });
                
                animation.onfinish = () => particle.remove();
            }
        });
    });

    // Efeito de digitação para textos importantes
    const typeTexts = document.querySelectorAll('.header-slogan, .section-subtitle');
    typeTexts.forEach(text => {
        const originalText = text.textContent;
        text.textContent = '';
        let index = 0;

        const type = () => {
            if (index < originalText.length) {
                text.textContent += originalText.charAt(index);
                index++;
                setTimeout(type, 30);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    type();
                    observer.unobserve(text);
                }
            });
        });

        observer.observe(text);
    });

    // Efeito de digitação para o console
    const consoleText = () => {
        const text = document.querySelector('.gradient-text');
        const originalText = text.textContent;
        const typingTextStart = document.querySelector('.typing-text:first-child');
        const typingTextEnd = document.querySelector('.typing-text:last-child');
        
        text.textContent = '';
        typingTextStart.style.opacity = '0';
        typingTextEnd.style.opacity = '0';
        
        setTimeout(() => {
            typingTextStart.style.opacity = '1';
            typingTextStart.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                let i = 0;
                const typeChar = () => {
                    if (i < originalText.length) {
                        text.textContent += originalText.charAt(i);
                        i++;
                        setTimeout(typeChar, Math.random() * 100 + 50);
                    } else {
                        typingTextEnd.style.opacity = '1';
                        typingTextEnd.style.transition = 'opacity 0.3s ease';
                        
                        // Adiciona o cursor piscante
                        const cursor = document.createElement('span');
                        cursor.className = 'typing-cursor';
                        cursor.textContent = '|';
                        text.appendChild(cursor);
                    }
                };
                typeChar();
            }, 500);
        }, 1000);
    };

    // Inicia o efeito quando a página carrega
    consoleText();
    
    // Adiciona classes de animação para os badges
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${0.6 + (index * 0.2)}s`;
    });
});

// Adiciona barra de progresso ao body
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

// Atualiza a barra de progresso durante a rolagem
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY / documentHeight;
    progressBar.style.transform = `scaleX(${scrolled})`;
});

// Animação suave para elementos quando entram na viewport
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.hero-features, .content-item, .testimonial, .cta-feature');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        
        if (isVisible) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
};

// Inicializa os elementos com opacidade 0
document.querySelectorAll('.hero-features, .content-item, .testimonial, .cta-feature').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Adiciona listener para animação no scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animação para os ícones de tecnologia
const techIcons = document.querySelectorAll('.tech-icons i');
techIcons.forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        icon.style.opacity = '0.7';
        icon.style.transform = 'translateY(0)';
    }, 100 * index);
});

// Highlight do link ativo no menu
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Efeito parallax suave no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY;
    
    if (header) {
        header.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
}); 