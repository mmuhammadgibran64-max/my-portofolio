var SS_ID = "1rQZ4Frd0eXJ0ND4Delb_qfvIULBvbspZjllsCvHwHGk";

function doGet(e) {
  var page = e.parameter.page || 'login';
  return HtmlService.createTemplateFromFile(page).evaluate()
      .setTitle("Gibran Store")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// SIMPAN KE SHEET USER
function simpanUser(data) {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sheet = ss.getSheetByName("User");
  sheet.appendRow([new Date(), data.nama, data.hp, data.alamat]);
  return "Data User Berhasil";
}

// SIMPAN KE SHEET ORDER
function simpanOrder(data) {
  var ss = SpreadsheetApp.openById(SS_ID);
  var sheet = ss.getSheetByName("Order");
  sheet.appendRow([new Date(), data.nama, data.total]);
  return "Data Order Berhasil";
}