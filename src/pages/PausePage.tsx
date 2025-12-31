import { useNavigate } from "react-router-dom";

export function PausePage() {
  const navigate = useNavigate();

  return (
    <div className="page pause-page">
      <div className="content-container centered">
        <div className="pause-message">
          <p>
            Kalau kamu buka ini pas capek,
            <br />
            kamu gak perlu ngapa-ngapain.
          </p>
          <p>Diam sebentar juga gak apa-apa.</p>
        </div>

        <button className="primary-button" onClick={() => navigate("/end")}>
          Lanjut
        </button>
      </div>
    </div>
  );
}
