function exportData()
{
	var data = [['name1', 'city1', 'some other info'], ['name2', 'city2', 'more info']];
var csvContent = '';
data.forEach(function (infoArray, index) {
  dataString = infoArray.join(';');
  csvContent += index < data.length ? dataString + '\n' : dataString;
});
            var loadingDiv = $('#loadingModal');
            loadingDiv.modal("hide");
            var data, filename;
            filename = 'Report.csv';
            //check for ie and above ie9 version currently ie11 smells like firefox
            if (!!navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:|Edge\/)(\d+)/)) {
                var downloadReport = window.open();
                downloadReport.document.write('sep=,\r\n' + csvContent);
                downloadReport.document.close();
                downloadReport.document.execCommand('SaveAs', true, filename);
                downloadReport.close();
            }
            else
            {
                var downloadReport = document.createElement('a');
                downloadReport.href = 'data:attachment/csv,' + encodeURI(csvContent);
                downloadReport.target = '_blank';
                downloadReport.download = filename;
                document.body.appendChild(downloadReport);
                downloadReport.click();
            }
}
