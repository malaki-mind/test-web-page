$(document).ready(function () {
    fetch('https://raw.githubusercontent.com/malaki-mind/test-web-page/refs/heads/main/Database/JobDatabase.json')
        .then(response => response.json())
        .then(data => {
            const dataLen = data.length;
            var dataMap = new Map();
            var keys = [];
            var vals = [[]];
            var keys = Object.keys(data[0]);
            const keyLen = keys.length;

            var table = document.createElement("TABLE");
            var tableHead = document.createElement("THEAD");
            var tableBody = document.createElement("TBODY")
            var headRow = document.createElement("TR")
            var bodyRow = "";
            var headerLabel = "";
            var rowLabel = "";
            var dvTable = document.getElementById("dvTable");

            for (var i = 0; i < dataLen; i++) {
                vals[i] = Object.values(data[i]);
            }

            for (var i = 0; i < keyLen; i++) {
                headerLabel = document.createElement("TH");
                headerLabel.innerHTML = keys[i];
                headRow.appendChild(headerLabel);
                tableHead.appendChild(headRow);

            }

            table.appendChild(tableHead);

            for (var i = 0; i < vals.length; i++) {
                bodyRow = document.createElement("TR");
                bodyRow.className = "w3-hover-blue-gray";

                for (var j = 0; j < keyLen; j++) {
                    rowLabel = document.createElement("TD");
                    rowLabel.innerHTML = vals[i][j];
                    bodyRow.appendChild(rowLabel);
                    tableBody.appendChild(bodyRow);
                }
            }

            table.appendChild(tableBody);

            dvTable.innerHTML = "";
            dvTable.appendChild(table);
            var dataTable = $(table).DataTable({
                dom: '<"w3-container w3-padding-16 darkStyle w3-center" lf><"lightStyle" rt><"w3-container darkStyle w3-center w3-padding-16" ip><"clear">'
            });


            dataTable.on('click', 'tbody tr', function () {
                let data = dataTable.row(this).data();
                Swal.fire({
                    theme: 'dark',
                    title: 'Submit Application',
                    html: '<h3>' + data[1] + '</h3><p><b></p>' + data[2] + ", " + data[3],
                    icon: "question",
                    confirmButtonColor: "#607d8b",
                    showCancelButton: true,
                    confirmButtonText: "Yes",
                    cancelButtonText: "No"
                })
            });
        });
});
