<header  class="<?php echo (isset($classHeader)) ? "header inicio" : "header" ; ?>">
    <div class="container container-header">
        <div class="bar">
            <a href="/">
                <img src="/assets/img/logo.svg" alt="logo de bienes raices">
            </a>

            <?php include '../app/views/partials/navegation.php' ?>
        </div> <!-- .bar -->

        <?php 
            if(isset($title)) echo "<h1>$title</h1>";
        ?>
    </div>
</header>