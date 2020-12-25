
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="js/main.js"></script>
</head>
<figure class="highcharts-figure">
    <div id="container"></div>
<?php
echo "php";
$api_url = 'http://sossimon.pythonanywhere.com/profiteintr%C3%A4ge';
$json_data = file_get_contents($api_url);
$response_data = json_decode($json_data);
$user_data = $response_data->liste;
echo $user_data;
?>
</figure>
