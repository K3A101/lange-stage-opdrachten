
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="static/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="static/css/bootstrap-build.css">
    <script src="static/icons/fontawesome-icons.min.js" crossorigin="anonymous"></script>

    <title>Email sturen</title>
</head>

<body>
<div class="container-md form-container">
    <div class=" d-flex row justify-content-center align-items-center">
        <form novalidate action="sent.php" class="emailForm" method="post" >
            <h1> <span><i class="fa-solid fa-comment"></i></span> Neem contact met ons</h1>
            <h2 class="subject-preview">Nieuwe Bericht</h2>
            <fieldset>
                <div>
                    <label for="subject">Onderwerp:</label>
                    <input  class="input" id="subject" type="text" name="subject" required minlength="3" maxlength="50" placeholder="Waar gaat het over?">
                    <p class="subject-error"></p>
                </div>
            </fieldset>
            <fieldset class="user-data">
                <div>
                    <label for="name">Naam:</label>
                    <input class="input" id="name" type="text" name="name" placeholder="Jouw naam" required minlength="2" maxlength="50">
                    <p class="input-error"></p>
                </div>
                <div>
                    <label for="sender">Email:</label>
                    <input class="input"  id="sender" type="email" name="email_sender" placeholder="voorbeeld@email.com"  value="" required >
                    <p class=" email-error"></p>
                </div>
            </fieldset>
            <fieldset class="email-content">
                <label for="message">Bericht:</label>
                <textarea class="input" name="messages" id="message" cols="30" rows="10" required ></textarea>
                <p class="message-error"></p>
            </fieldset>

            <button class="send-button" id="submit" type="submit">
                <i class="fa-solid fa-paper-plane send-icon" style="color: #ffffff;"></i>
                <span>Verstuur</span>
            </button>
        </form>
    </div>
</div>
<script src="static/js/script.js"></script>
</body>
</html>

