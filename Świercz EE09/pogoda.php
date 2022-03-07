<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prognoza pogody wrocław</title>
    <link rel="stylesheet"  type="text/css "href="styl2.css">
</head>
<body>
    <navbar>

        <div class="left">
            <img src="logo.png" alt="meteo">
        </div>

        <div class="middle">
            <h1>Prognoza dla Wrocławia</h1>
        </div>

        <div class="right">
            <p>maj, 2019</p>
        </div>

    </navbar>

    <div class="container1">
        <table>
            <tr>
                <th> DATA </th>
                <th> TEMPERATURA W NOCY</th>
                <th> TEMPERATURA W DZIEŃ</th>
                <th> OPADY [mm/h]</th>
                <th> CIŚNIENIE [hPa]</th>
            </tr>
        <?php

            $conn = mysqli_connect('localhost', 'root', '', 'prognoza');

            $qrr = "SELECT * FROM `pogoda` WHERE `miasta_id` = 1 ORDER BY `data_prognozy` ASC;";

            $res = mysqli_query($conn, $qrr);

            while ($row = mysqli_fetch_assoc($res)) {
                echo <<<LABEL
                    <tr>
                        <td>$row[data_prognozy]</td>
                        <td>$row[temperatura_noc]</td>
                        <td>$row[temperatura_dzien]</td>
                        <td>$row[opady]</td>
                        <td>$row[cisnienie]</td>
                    </tr>
                LABEL;
        }

        mysqli_close($conn);
        ?>
        </table>
    </div>

    <div class="container2">

        <div class="cl">
            <img src="obraz.png" alt="Polska, Wrocław">
        </div>

        <div class="cr">
            <a href="kwerendy.txt">Pobierz kwerendy</a>
        </div>

    </div>

    <divc class="footer">
        <p>Stronę wykonał: Karol Świercz</p>
    </div>
    

</body>
</html>