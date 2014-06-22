Cookielaw plugin
================================

Zepto and jQuery Plugin to insert a cookie in order to inform the visitor about the cookies inserted in his/her pc

Examples :
---------

HTML:
---
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cookielaw</title>
    <link rel="stylesheet" href="css/cookielaw.min.css">
</head>
<body>
    <!-- Cookie law block -->
    <div class="cookie-block">
        <i class="icon i"></i>
        <div class="message">En poursuivant votre navigation sans modifier vos paramètres de cookies, vous acceptez l'utilisation des cookies pour disposer de services et d'offres adaptés à vos centres d'intérêts.
            <a href="#">
                <strong>Pour gérer et modifier ces paramètres, cliquez ici.</strong>
            </a>
        </div>
        <div class="btn"><a href="#" class="close">X</a></div>
    </div>
    <!-- End Cookie law block -->
    <script src="js/lib/zepto/zepto.min.js"></script>
    <script src="js/cookielaw.js"></script>
    <script>
        $(document).ready(function() {
            $('.cookie-block').cookielaw();
        });
    </script>
</body>
</html>
---
