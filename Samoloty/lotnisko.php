<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl5.css">
    <title>Port Lotniczy</title>
</head>
<body>
    <div class="banner">
        <div class="leftb">
            <img src="zad5.png" alt="logo lotnisko">
        </div>
        <div class="centerb">
            <h1>Przyloty</h1>
        </div>
        <div class="rightb">
            <h3>Przydatne linki</h3>
            <a href="kwerendy.txt">Pobierz...</a>
        </div>
    </div>

    <div class="container">
        <table>
            <tr>
                <th>czas</th>
                <th>kierunek</th>
                <th>numer rejsu</th>
                <th>status</th>
            </tr>
            <?php 
                $conn = mysqli_connect('localhost','root','','egzamin');
                
                
                $qrr = mysqli_query($conn, 'SELECT czas, kierunek, nr_rejsu, status_lotu FROM przyloty ORDER BY czas ASC');

                while ($T = mysqli_fetch_row($qrr)) {
                    echo "<tr>";
                    echo "<td>$T[0]</td>";
                    echo "<td>$T[1]</td>";
                    echo "<td>$T[2]</td>";
                    echo "<td>$T[3]</td>";
                    echo "</tr>";
                }
            ?>
        </table>
    </div>

    <div class="footer">
        <div class="leftf">
            <?php
             if (isset($_COOKIE["cookie"])) {
				echo "<p style='font-style: italic;'>Witaj ponownie na stronie 
                lotniska</p>";
			} else {
				$cookie_name = "cookie";
				$cookie_time = time() + 60*60*2;
				setcookie($cookie_name, $cookie_time);
				
                echo "<p style= 'font-style: bold;'>Dzień dobry! Strona lotniska używa ciasteczek</p>";
			}
            ?>
        </div>
        <div class="rightf">
            Autor: Karol Świercz
        </div>
    </div>
</body>
</html>