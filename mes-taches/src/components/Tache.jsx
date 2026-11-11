import { useState } from 'react'

function Tache({
  id,
  titre,
  terminee,
  onBasculer,
  onSupprimer,
  onModifier
}) {
  const [enEdition, setEnEdition] = useState(false)
  const [nouveauTitre, setNouveauTitre] = useState(titre)

  function commencerModification() {
    setNouveauTitre(titre)
    setEnEdition(true)
  }

  function terminerModification() {
    const titreNettoye = nouveauTitre.trim()

    if (titreNettoye !== '') {
      onModifier(id, titreNettoye)
    }

    setEnEdition(false)
  }

  function gererClavier(event) {
    if (event.key === 'Enter') {
      event.currentTarget.blur()
    }

    if (event.key === 'Escape') {
      setNouveauTitre(titre)
      event.currentTarget.blur()
    }
  }

  return (
    <li className={terminee ? 'tache terminee' : 'tache'}>
      <label>
        <input
          type="checkbox"
          checked={terminee}
          onChange={() => onBasculer(id)}
        />

        {enEdition ? (
          <input
            type="text"
            value={nouveauTitre}
            autoFocus
            onChange={(event) =>
              setNouveauTitre(event.target.value)
            }
            onBlur={terminerModification}
            onKeyDown={gererClavier}
          />
        ) : (
          <span
            className="titre"
            onDoubleClick={commencerModification}
            title="Double-cliquez pour modifier"
          >
            {titre}
          </span>
        )}
      </label>

      <button
        className="danger"
        onClick={() => onSupprimer(id)}
      >
        Supprimer
      </button>
    </li>
  )
}

export default Tache