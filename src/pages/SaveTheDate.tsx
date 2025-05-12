import React, { useEffect, useRef, useState } from "react";

const SaveTheDate = () => {
  const cards = [1, 2, 3];
  const [angles, setAngles] = useState([0, 0, 0]);
  const [showFront, setShowFront] = useState([true, true, true]);
  const lastMouseX = useRef(0);

  useEffect(() => {
    const intervals = [];

    cards.forEach((_, i) => {
      let angle = 0;
      let showingFront = true;
      const flipSpeed = 0.5 + Math.random(); // mais lento
      const restTime = 4000 + Math.random() * 3000; // tempo parado após giro

      const loop = () => {
        // inicia o flip
        angle += 180;
        showingFront = !showingFront;

        setAngles((prev) => {
          const copy = [...prev];
          copy[i] = angle;
          return copy;
        });

        setTimeout(() => {
          setShowFront((prev) => {
            const copy = [...prev];
            copy[i] = showingFront;
            return copy;
          });
        }, flipSpeed * 1000); // muda imagem após rotação

        intervals[i] = setTimeout(loop, restTime + flipSpeed * 1000);
      };

      intervals[i] = setTimeout(loop, 1000 + i * 1000);
    });

    return () => intervals.forEach(clearTimeout);
  }, []);

  // Controle do mouse para direção
  useEffect(() => {
    const handleMouseMove = (e) => {
      const direction = e.clientX > lastMouseX.current ? 1 : -1;
      lastMouseX.current = e.clientX;
      setAngles((prev) => prev.map((a) => a + direction * 0.5));
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="py-24 px-6 bg-white flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 overflow-hidden">
      <div className="text-center md:text-left">
        <h2 className="font-dancing text-5xl md:text-7xl text-wedding-green leading-snug whitespace-pre-line tracking-wide">
          SAVE{"\n"}THE{"\n"}DATE
        </h2>
      </div>

      <div className="flex flex-row gap-4 md:gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-28 h-40 md:w-32 md:h-48 [perspective:1200px] relative"
          >
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transform: `rotateY(${angles[i]}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Frente */}
              <div
                className="absolute w-full h-full rounded-full overflow-hidden"
                style={{
                  transform: "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={`/lovable-uploads/photo-front-${card}.jpg`}
                  alt={`Front ${card}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verso */}
              <div
                className="absolute w-full h-full rounded-full overflow-hidden"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={`/lovable-uploads/photo-back-${card}.jpg`}
                  alt={`Back ${card}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveTheDate;
