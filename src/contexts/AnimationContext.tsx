import React, { createContext, useContext, useEffect, useState } from 'react';

type AnimationLevel = 'low' | 'medium' | 'high';

interface AnimationContextProps {
  level: AnimationLevel;
  score: number;
}

const AnimationContext = createContext<AnimationContextProps>({
  level: 'low',
  score: 0,
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState<AnimationLevel>('low');
  const [score, setScore] = useState(0);
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    if (calculated || typeof window === 'undefined') return;

    let frames = 0;
    let rAFId: number;
    // Pega o tempo de início preciso
    const testStartTime = performance.now();

    const measureFPS = (timestamp: number) => {
      frames++;
      const elapsed = timestamp - testStartTime;

      if (elapsed >= 1000) {
        // Passou ~1 segundo, calcula o FPS final e define o score
        const fps = (frames / elapsed) * 1000;
        calculateScore(fps);
      } else {
        rAFId = requestAnimationFrame(measureFPS);
      }
    };

    const calculateScore = (fps: number) => {
      // 1. CPU: hardwareConcurrency (fallback 2 se não suportado)
      const cpuCores = navigator.hardwareConcurrency || 2;
      const cpuScore = cpuCores * 10;

      // 2. RAM: deviceMemory em GB (apenas Chromium) (fallback 2 se não suportado)
      // Usamos (navigator as any) pois deviceMemory não é padrão em todos os browsers
      const ramGB = (navigator as any).deviceMemory || 2;
      const ramScore = ramGB * 15;

      // 3. FPS medido num loop bruto
      let fpsScore = 10; // Menor que 30 FPS
      if (fps >= 50) {
        fpsScore = 50;
      } else if (fps >= 30) {
        fpsScore = 30;
      }

      // 4. Somatório e Nível
      const totalScore = cpuScore + ramScore + fpsScore;
      
      let finalLevel: AnimationLevel = 'low';
      if (totalScore >= 120) {
        finalLevel = 'high'; // PC Bom, Celular Topo de Linha recente
      } else if (totalScore >= 80) {
        finalLevel = 'medium'; // Intermediário
      }

      setScore(totalScore);
      setLevel(finalLevel);
      setCalculated(true);
      
      console.log(`[Performance Benchmark] CPU: ${cpuCores} cores | RAM: ~${ramGB}GB | FPS: ${Math.round(fps)}`);
      console.log(`[Performance Score] Total: ${totalScore} -> Level: ${finalLevel.toUpperCase()}`);
    };

    // Inicia a medição no proximo frame
    rAFId = requestAnimationFrame(measureFPS);

    return () => cancelAnimationFrame(rAFId);
  }, [calculated]);

  // Enquanto estiver calculando, podemos retornar 'low' no contexto como estado inicial seguro
  return (
    <AnimationContext.Provider value={{ level, score }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationLevel = () => useContext(AnimationContext);
