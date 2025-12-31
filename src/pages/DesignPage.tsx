import { useNavigate } from 'react-router-dom'

export function DesignPage() {
  const navigate = useNavigate()

  return (
    <div className="page design-page">
      <div className="content-container">
        <p className="label">// collaboration.mode</p>
        
        <h1>Satu project.</h1>
        
        <div className="text-block poetic">
          <p>
            Kamu yang bikin indah,<br />
            aku yang bikin jalan.
          </p>
          <p>
            Kamu lihat warna dan ruang,<br />
            aku lihat struktur dan flow.
          </p>
          <p>
            Beda cara kerja,<br />
            tapi ngejar hal yang sama.
          </p>
          <p className="highlight">
            Mungkin ini bukan cuma soal kerja.<br />
            Mungkin ini tentang hidup juga.
          </p>
        </div>

        <button 
          className="primary-button"
          onClick={() => navigate('/build')}
        >
          Lanjut
        </button>
      </div>
    </div>
  )
}
