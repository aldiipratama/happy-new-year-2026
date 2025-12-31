import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";

type Choice = "capek" | "fine" | "ketawa" | null;

const responses: Record<
  Exclude<Choice, null>,
  { emoji: string; message: string }
> = {
  capek: {
    emoji: "☕",
    message:
      "Aku tau akhir-akhir ini kamu sering pulang kerja masih mikirin deadline. Istirahat dulu. Aku temenin dari sini.",
  },
  fine: {
    emoji: "✨",
    message: "Seneng dengernya. Yuk lanjut bareng.",
  },
  ketawa: {
    emoji: "😄",
    message: "Sama. Kadang hidup emang absurd, tapi seru.",
  },
};

export function BuildPage() {
  const navigate = useNavigate();
  const [choice, setChoice] = useState<Choice>(null);

  return (
    <div className="page build-page">
      <div className="content-container">
        <p className="label">// mood.check()</p>

        <h1>Hari ini gimana?</h1>

        {!choice ? (
          <div className="choice-container">
            <button
              className="choice-button"
              onClick={() => setChoice("capek")}
            >
              Hari ini capek
            </button>
            <button className="choice-button" onClick={() => setChoice("fine")}>
              Hari ini fine
            </button>
            <button
              className="choice-button"
              onClick={() => setChoice("ketawa")}
            >
              Hari ini pengen ketawa
            </button>
          </div>
        ) : (
          <div className="response-container fade-in">
            <span className="response-emoji">{responses[choice].emoji}</span>
            <p className="response-message">{responses[choice].message}</p>

            <button
              className="primary-button"
              onClick={() => navigate("/2026")}
            >
              Lanjut ke 2026
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
