import { useNavigate } from "react-router-dom";

export function Page2026() {
  const navigate = useNavigate();

  return (
    <div className="page page-2026">
      <div className="content-container">
        <p className="label">// intentions.2026</p>

        <h1>Bukan janji.</h1>
        <p className="subtitle">Tapi prinsip.</p>

        <div className="principles-list">
          <div className="principle">
            <code>iterate pelan</code>
            <p>Nggak perlu buru-buru. Yang penting konsisten.</p>
          </div>

          <div className="principle">
            <code>fix bug bareng</code>
            <p>Kalau ada masalah, kita debug sama-sama.</p>
          </div>

          <div className="principle">
            <code>don't rage quit</code>
            <p>Susah? Iya. Tapi kita nggak cabut gitu aja.</p>
          </div>

          <div className="principle">
            <code>ship with care</code>
            <p>Kalau udah yakin, baru kita release.</p>
          </div>
        </div>

        <button className="primary-button" onClick={() => navigate("/pause")}>
          Lanjut
        </button>
      </div>
    </div>
  );
}
