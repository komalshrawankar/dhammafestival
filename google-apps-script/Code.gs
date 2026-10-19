const SHEET_NAME = 'अभिप्राय'
const HEADERS = ['वेळ', 'नाव', 'मोबाईल क्रमांक', 'फेस्टिवल आवडला का?', 'अभिप्राय']

function doPost(event) {
  const values = event && event.parameter ? event.parameter : {}
  const name = cleanText(values.name, 100)
  const phone = cleanText(values.phone, 10)
  const liked = cleanText(values.liked, 3)
  const feedback = cleanText(values.feedback, 2000)

  if (!name || !/^[0-9]{10}$/.test(phone) || !['yes', 'no'].includes(liked) || !feedback) {
    return jsonResponse({ ok: false, message: 'Invalid form data' })
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME)

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
  }

  sheet.appendRow([
    new Date(),
    safeCell(name),
    phone,
    liked === 'yes' ? 'होय' : 'नाही',
    safeCell(feedback),
  ])

  return jsonResponse({ ok: true })
}

function cleanText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength)
}

function safeCell(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
}
