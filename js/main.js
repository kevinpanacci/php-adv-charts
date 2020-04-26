$(document).ready(function () {
    $.ajax({
        url: 'server.php',
        method: 'GET',
        success: function(data) {
            var tipo=data.fatturato.type;
            var dati=data.fatturato.data;
            var tipo1=data.fatturato_by_agent.type;
            var dati1=data.fatturato_by_agent.data;
            var label = [];
            var dati_for_pie = [];
            if (tipo=="line") {
                graficoLine(dati, tipo);
            } else {
                label = [];
                dati_for_pie = [];
                Object.keys(dati).forEach(function(k){
                    label.push(k);
                    dati_for_pie.push(dati[k]);
                });
                graficoPie(dati_for_pie, tipo, label);
            }
            if (tipo1=="line") {
                graficoLine(dati1, tipo1);
            } else {
                label = [];
                dati_for_pie = [];
                Object.keys(dati1).forEach(function(k){
                    label.push(k);
                    dati_for_pie.push(dati1[k]);
                });
                graficoPie(dati_for_pie, tipo1, label);
            }
        },
        error: function(err) {
            alert('Qualcosa non funziona');
        }
    });
});

function graficoLine(dati, tipo){
    var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
    var data = $('#line-chart').data('2d');
    var ctx = document.getElementById('line-chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: mesi,
            datasets: [{
                label: 'FATTURATO',
                data: dati,
                backgroundColor: 'rgba(255, 99, 132, 0.2)'
            }]
        }
    });
}

function graficoPie(dati, tipo, label){
    console.log(dati);
    console.log(tipo);
    console.log(label);
    var ctx = document.getElementById('pie-chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: label,
            datasets: [{
                label: 'FATTURATO BY AGENT',
                data: dati,
                backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
                'rgba(255, 0, 132, 0.2)',
                'rgba(255, 99, 0, 0.2)',
                'rgba(0, 99, 132, 0.2)'
                ]
            }]
        }
    });
}
