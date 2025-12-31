import { useNavigate } from "react-router-dom";

export function EndPage() {
  const navigate = useNavigate();

  const whatsappMessage = encodeURIComponent(
    "Aku baru buka websitenya. Makasih ayangg."
  );
  const whatsappLink = `https://wa.me/6285798257393?text=${whatsappMessage}`;

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

        <div className="end-actions">
          <span className="action-link" onClick={() => navigate("/")}>
            kembali ke awal
          </span>
          <span className="action-divider">·</span>
          <a
            className="action-link"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            kirim pesan
          </a>
        </div>
      </div>
    </div>
  );
}
