/**
 * Essenza Medica — Open Day form → Google Sheet
 *
 * SETUP (una tantum):
 * 1. Apri il foglio: https://docs.google.com/spreadsheets/d/1_6_WiDflqHQi-N4OjChKeJ_X3COf34haOqsJeiEALdA/edit
 * 2. Vai sul tab "Open day"
 * 3. Estensioni → Apps Script
 * 4. Cancella il codice predefinito e incolla TUTTO questo file
 * 5. Salva (Ctrl/Cmd+S)
 * 6. Distribuisci → Nuova distribuzione → Tipo: App web
 *    - Descrizione: Open Day form
 *    - Esegui come: Me
 *    - Chi può accedere: Chiunque
 * 7. Distribuisci → copia l'URL dell'app web
 * 8. Incolla l'URL in Vercel come variabile VITE_GOOGLE_SHEETS_WEBHOOK_URL
 *    (e in locale in .env: VITE_GOOGLE_SHEETS_WEBHOOK_URL=...)
 * 9. Rideploya il sito su Vercel
 */

var SHEET_NAME = 'Open day'

function doPost(e) {
  try {
    var data = {}
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents)
    }

    var nome = String(data.nome || '').trim()
    var cognome = String(data.cognome || '').trim()
    var telefono = String(data.telefono || '').replace(/\D/g, '')
    var email = String(data.email || '').trim()

    if (!nome || !cognome || !telefono || !email) {
      return json_({ ok: false, error: 'Campi obbligatori mancanti' })
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = ss.getSheetByName(SHEET_NAME)
    if (!sheet) {
      return json_({ ok: false, error: 'Foglio "' + SHEET_NAME + '" non trovato' })
    }

    var timestamp = Utilities.formatDate(
      new Date(),
      'Europe/Rome',
      "yyyy-MM-dd'T'HH:mm:ssXXX"
    )

    // Colonne: Nome | Cognome | Numero di telefono | E-mail | Data e ora ricezione contatto
    sheet.appendRow([nome, cognome, telefono, email, timestamp])

    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  }
}

function doGet() {
  return json_({ ok: true, message: 'Essenza Medica Open Day webhook attivo' })
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}
