
    const aboutCard = document.querySelector('.about');

    aboutCard.addEventListener('mousemove', (e) => {
      const rect = aboutCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      aboutCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    aboutCard.addEventListener('mouseleave', () => {
      aboutCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  