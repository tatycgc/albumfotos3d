document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    let anguloAtual = 0;
    const anguloPorSlide = 360 / slides.length;

    function getTranslateZ() {
        if (window.innerWidth < 480) return 300;
        if (window.innerWidth < 768) return 500;
        return 700;
    }

    function atualizarSlides() {
        const distanciaZ = getTranslateZ();

        slides.forEach((slide, index) => {
            const angulo = anguloAtual + index * anguloPorSlide;
            const radianos = angulo * Math.PI / 180;
            const elevacao = Math.cos(radianos) * 600;

            slide.style.transform = `rotateY(${angulo}deg) translateZ(${distanciaZ}px) translateY(${elevacao < 0 ? Math.abs(elevacao) : 0}px)`;
        });
    }

    btnAnterior.addEventListener('click', () => {
        anguloAtual -= anguloPorSlide;
        atualizarSlides();
    });

    btnProximo.addEventListener('click', () => {
        anguloAtual += anguloPorSlide;
        atualizarSlides();
    });

    atualizarSlides();

    setInterval(() => {
        anguloAtual += anguloPorSlide;
        atualizarSlides();
    }, 5000);
});
