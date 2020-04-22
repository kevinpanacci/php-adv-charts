$(document).ready(function () {

    $.ajax({
        url: 'server.php',
        method: 'GET',
        success: function(data) {
            var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
            var ctx = $('#line-chart');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'My first dataset',
                        data: data,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)'
                    }]
                }
            });
        },
        error: function(err) {
            alert('Qualcosa non funziona');
        }
    });
});
