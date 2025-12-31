import { useNavigate } from "react-router-dom";

export function EndPage() {
  const navigate = useNavigate();

  return (
    <div className="page end-page">
      <div className="content-container centered">
        <p className="label">// end.message</p>

        <h1>Happy New Year, 2026.</h1>

        <div className="closing-message">
          <p>Makasih udah jadi bagian dari tahun ini.</p>
          <p>
            Semoga tahun depan,
            <br />
            kita masih bisa iterate bareng.
          </p>
        </div>

        <div className="end-buttons">
          <button className="secondary-button" onClick={() => navigate("/")}>
            Ulang dari awal
          </button>
        </div>
      </div>
    </div>
  );
}
