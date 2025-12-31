import { useState, useEffect } from "preact/hooks";
import { useNavigate } from "react-router-dom";

export function PausePage() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page pause-page no-animate">
      <div className="content-container centered">
        <div className="pause-message">
          <p>Sebentar aja.</p>
          <p>Kamu gak harus kuat terus.</p>
        </div>

        {showButton && (
          <button className="secondary-button" onClick={() => navigate("/end")}>
            lanjut
          </button>
        )}
      </div>
    </div>
  );
}
