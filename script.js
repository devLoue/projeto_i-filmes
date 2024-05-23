$(document).ready(function() {

 //animações
    const sections = $('section');

    $(window).on('scroll', function () {
        const styles = $('navigation');
        const scrollPosition = $(window).scrollTop() - styles.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            styles.css('box-shadow', 'none');
        } else {
            styles.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#sect_principal1', {
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#the-tank', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    });

    ScrollReveal().reveal('#mermaid', {
        origin: 'right',
        duration: 3000,
        distance: '20%'
    })

    ScrollReveal().reveal('.sect_65', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    })
    ScrollReveal().reveal('.sect_the-convenant', {
        origin: 'right',
        duration: 3000,
        distance: '20%'
    })
    ScrollReveal().reveal('.sect_the-black-demon', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    })


});