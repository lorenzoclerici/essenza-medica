const SHEETS_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbxuvHzaWazNfYfcfeJpjQjZLsaSXFAZw5zGhSbVpDQ-HOHYSqTs1ru63i6WZLemK-d7YA/exec'

/**
 * Invia i dati del form al Google Apps Script collegato al foglio "Open day".
 * Colonne: Nome | Cognome | Numero di telefono | E-mail | Data e ora ricezione contatto
 */
export async function submitOpenDayLead({ nome, cognome, telefono, email }) {
  if (!SHEETS_WEBHOOK_URL) {
    throw new Error(
      'Webhook Google Sheet non configurato (VITE_GOOGLE_SHEETS_WEBHOOK_URL).'
    )
  }

  const payload = {
    nome: String(nome || '').trim(),
    cognome: String(cognome || '').trim(),
    telefono: String(telefono || '').replace(/\D/g, ''),
    email: String(email || '').trim(),
  }

  const response = await fetch(SHEETS_WEBHOOK_URL, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  })

  // Apps Script può rispondere con redirect; se riusciamo a leggere il JSON, verifichiamo ok.
  const text = await response.text()
  try {
    const data = JSON.parse(text)
    if (data && data.ok === false) {
      throw new Error(data.error || 'Errore salvataggio foglio')
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      // Risposta non-JSON (es. redirect HTML): consideriamo OK se status 2xx/opaque success path
      if (!response.ok && response.type !== 'opaqueredirect') {
        throw new Error('Invio al foglio non riuscito')
      }
      return { ok: true }
    }
    throw err
  }

  return { ok: true }
}
