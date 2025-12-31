import { useNavigate } from 'react-router-dom'

export function WorkPage() {
  const navigate = useNavigate()

  return (
    <div className="page work-page">
      <div className="content-container">
        <p className="label">// life.current</p>
        
        <h1>Kita sibuk.</h1>
        
        <div className="text-block">
          <p>
            Satu orang nulis logic,<br />
            satu lagi bikin visual.
          </p>
          <p>
            Deadline, revisi, sprint, iteration.<br />
            Kadang lupa makan, kadang lupa istirahat.
          </p>
          <p className="highlight">
            Tapi di antara semua itu,<br />
            kita masih sempat mikirin satu sama lain.
          </p>
        </div>

        <button 
          className="primary-button"
          onClick={() => navigate('/design')}
        >
          Lanjut
        </button>
      </div>
    </div>
  )
}
