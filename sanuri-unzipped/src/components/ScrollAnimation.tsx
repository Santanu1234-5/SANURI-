import { useEffect, useRef } from 'react';

export function ScrollAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const frameCount = 300;
        const currentFrame = (index: number) => (
            `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
        );

        let images: HTMLImageElement[] = [];

        const preloadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                images[i] = new Image();
                images[i].src = currentFrame(i);
            }
        };

        const img = new Image();
        img.src = currentFrame(1);
        preloadImages();

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        }

        const updateImage = (index: number) => {
            if (images[index] && images[index].complete) {
                context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
            }
        }

        const handleScroll = () => {  
            const scrollTop = document.documentElement.scrollTop;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(
                frameCount,
                Math.max(1, Math.ceil(scrollFraction * frameCount))
            );
            
            requestAnimationFrame(() => updateImage(frameIndex));
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: '#000',
            zIndex: -1
        }}>
            <canvas 
                ref={canvasRef} 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} 
            />
        </div>
    );
}
