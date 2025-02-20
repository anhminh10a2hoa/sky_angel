import { useState, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

const useGameLogic = () => {
  const [aircraftPosition, setAircraftPosition] = useState<Position>({ x: 512, y: 384 });
  const [fuel, setFuel] = useState(10);
  const [stars, setStars] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Game elements
  const [clouds, setClouds] = useState<Position[]>([]);
  const [birds, setBirds] = useState<Position[]>([]);
  const [parachutes, setParachutes] = useState<Position[]>([]);
  const [starsElements, setStarsElements] = useState<Position[]>([]);

  // Generate random positions for game elements
  const generateRandomPosition = (maxX: number, maxY: number): Position => ({
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  });

  // Initialize game elements
  useEffect(() => {
    // Generate initial clouds
    const initialClouds = Array.from({ length: 5 }, () =>
      generateRandomPosition(1024, 768)
    );
    setClouds(initialClouds);

    // Generate initial birds
    const initialBirds = Array.from({ length: 3 }, () =>
      generateRandomPosition(1024, 768)
    );
    setBirds(initialBirds);

    // Generate initial parachutes and stars
    const initialParachutes = Array.from({ length: 2 }, () =>
      generateRandomPosition(1024, 768)
    );
    setParachutes(initialParachutes);

    const initialStars = Array.from({ length: 5 }, () =>
      generateRandomPosition(1024, 768)
    );
    setStarsElements(initialStars);
  }, []);

  // Move clouds from right to left
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      setClouds((prev) =>
        prev.map((cloud) => ({
          x: cloud.x - 1,
          y: cloud.y,
        })).filter((cloud) => cloud.x > -100) // Remove clouds that are off-screen
      );

      // Add new clouds periodically
      if (Math.random() < 0.02) {
        setClouds((prev) => [
          ...prev,
          { x: 1024, y: Math.floor(Math.random() * 768) },
        ]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isGameOver, isPaused]);

  // Move birds from right to left
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      setBirds((prev) =>
        prev.map((bird) => ({
          x: bird.x - 2,
          y: bird.y,
        })).filter((bird) => bird.x > -50) // Remove birds that are off-screen
      );

      // Add new birds periodically
      if (Math.random() < 0.01) {
        setBirds((prev) => [
          ...prev,
          { x: 1024, y: Math.floor(Math.random() * 768) },
        ]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isGameOver, isPaused]);

  // Move parachutes and stars from top to bottom
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      setParachutes((prev) =>
        prev.map((parachute) => ({
          x: parachute.x,
          y: parachute.y + 1,
        })).filter((parachute) => parachute.y < 768) // Remove parachutes that are off-screen
      );

      setStarsElements((prev) =>
        prev.map((star) => ({
          x: star.x,
          y: star.y + 1,
        })).filter((star) => star.y < 768) // Remove stars that are off-screen
      );

      // Add new parachutes and stars periodically
      if (Math.random() < 0.01) {
        setParachutes((prev) => [
          ...prev,
          { x: Math.floor(Math.random() * 1024), y: 0 },
        ]);
      }

      if (Math.random() < 0.02) {
        setStarsElements((prev) => [
          ...prev,
          { x: Math.floor(Math.random() * 1024), y: 0 },
        ]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isGameOver, isPaused]);

  // Handle aircraft movement
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (isPaused) return;

    setAircraftPosition((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      switch (event.key) {
        case 'ArrowLeft':
          newX = Math.max(0, prev.x - 10);
          break;
        case 'ArrowRight':
          newX = Math.min(974, prev.x + 10);
          break;
        case 'ArrowUp':
          newY = Math.max(0, prev.y - 10);
          break;
        case 'ArrowDown':
          newY = Math.min(718, prev.y + 10);
          break;
        default:
          break;
      }

      return { x: newX, y: newY };
    });
  }, [isPaused]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Handle fuel and time
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
      setFuel((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver, isPaused]);

  // Check for collisions with birds
  useEffect(() => {
    const aircraftRect = {
      x: aircraftPosition.x,
      y: aircraftPosition.y,
      width: 50,
      height: 50,
    };

    birds.forEach((bird) => {
      const birdRect = {
        x: bird.x,
        y: bird.y,
        width: 30,
        height: 30,
      };

      if (
        aircraftRect.x < birdRect.x + birdRect.width &&
        aircraftRect.x + aircraftRect.width > birdRect.x &&
        aircraftRect.y < birdRect.y + birdRect.height &&
        aircraftRect.y + aircraftRect.height > birdRect.y
      ) {
        setIsGameOver(true);
      }
    });
  }, [aircraftPosition, birds]);

  // Collect parachutes and stars
  useEffect(() => {
    const aircraftRect = {
      x: aircraftPosition.x,
      y: aircraftPosition.y,
      width: 50,
      height: 50,
    };

    parachutes.forEach((parachute, index) => {
      const parachuteRect = {
        x: parachute.x,
        y: parachute.y,
        width: 30,
        height: 30,
      };

      if (
        aircraftRect.x < parachuteRect.x + parachuteRect.width &&
        aircraftRect.x + aircraftRect.width > parachuteRect.x &&
        aircraftRect.y < parachuteRect.y + parachuteRect.height &&
        aircraftRect.y + aircraftRect.height > parachuteRect.y
      ) {
        setFuel((prev) => prev + 10);
        setParachutes((prev) => prev.filter((_, i) => i !== index));
      }
    });

    starsElements.forEach((star, index) => {
      const starRect = {
        x: star.x,
        y: star.y,
        width: 20,
        height: 20,
      };

      if (
        aircraftRect.x < starRect.x + starRect.width &&
        aircraftRect.x + aircraftRect.width > starRect.x &&
        aircraftRect.y < starRect.y + starRect.height &&
        aircraftRect.y + aircraftRect.height > starRect.y
      ) {
        setStars((prev) => prev + 1);
        setStarsElements((prev) => prev.filter((_, i) => i !== index));
      }
    });
  }, [aircraftPosition, parachutes, starsElements]);

  const pauseGame = () => {
    setIsPaused((prev) => !prev);
  };

  return {
    aircraftPosition,
    fuel,
    stars,
    time,
    isGameOver,
    isPaused,
    pauseGame,
    clouds,
    birds,
    parachutes,
    starsElements,
  };
};

export default useGameLogic;