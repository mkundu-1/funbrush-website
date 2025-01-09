document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    
    // Smooth mouse following effect
    let mouseX = 0;
    let mouseY = 0;
    let squareX = 0;
    let squareY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        squares.forEach((square, index) => {
            // Calculate target position based on mouse
            const targetX = (mouseX - centerX) * (0.02 + index * 0.01);
            const targetY = (mouseY - centerY) * (0.02 + index * 0.01);
            
            // Smooth interpolation
            squareX += (targetX - squareX) * 0.1;
            squareY += (targetY - squareY) * 0.1;
            
            // Apply transform with rotation
            square.style.transform = `
                rotate(45deg) 
                translate(${squareX}px, ${squareY}px)
                scale(${1 + Math.abs(squareX) * 0.001})
            `;
            
            // Dynamic opacity based on movement
            const movement = Math.abs(squareX) + Math.abs(squareY);
            square.style.backgroundColor = `rgba(107, 44, 145, ${0.02 + (movement * 0.0001)})`;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();

    // Parallax effect for floating text
    const floatingTexts = document.querySelectorAll('.floating-text');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingTexts.forEach((text, index) => {
            const offsetX = (mouseX - 0.5) * (20 + index * 10);
            const offsetY = (mouseY - 0.5) * (20 + index * 10);
            
            text.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
}); 