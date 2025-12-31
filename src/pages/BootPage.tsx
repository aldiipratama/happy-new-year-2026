import { useState, useEffect } from "preact/hooks";
import { useNavigate } from "react-router-dom";

export function BootPage() {
  const navigate = useNavigate();
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(false);

  const lines = [
    "> checking system status...",
    "> loading memories from 2025...",
    "> compiling shared moments...",
    "> initializing hope.exe...",
    "> preparing 2026...",
    "",
    "READY.",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < lines.length) {
        setBootLines((prev) => [...prev, lines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page boot-page">
      <div className="boot-container">
        <h1 className="boot-title">Initializing 2026...</h1>

        <div className="boot-terminal">
          {bootLines.map((line, index) => (
            <p key={index} className="boot-line">
              {line}
            </p>
          ))}
          <span className="cursor">_</span>
        </div>

        {showButton && (
          <button
            className="primary-button fade-in"
            onClick={() => navigate("/work")}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}
