<?php require("header.php"); ?>

        <header>
            <div class="l-content">
                <a href="/eggfoo/"><img id="logo-header" src="img/logo-green.svg" 
                                     width="156" height="28" alt="EGGFOO" /></a>              
            </div> 
        </header>
       
        <section id="work" class="filenotfound">
            <canvas id="egg-canvas" class="egg-mover" data-paper-resize="true"></canvas>           
            <img id="egg300" class="hidden" src="img/egg-mesh-300.png" alt="egg" />
            <img id="egg500" class="hidden" src="img/egg-mesh-500.png" alt="egg" />
            <img id="egg1000" class="hidden" src="img/egg-mesh-1000.png" alt="egg" />
            <div class="l-content">
                <div class="l-section-header l-section-header-work">
                    <h2><a href="/eggfoo/" class="fadeLink worklink">404</a></h2>
                    <h3>Sorry, but the page you were trying to view does not exist.</h3>
                </div>
                <div class="l-section-body-work">
                </div>                
            </div>
        </section>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/navigation.js"></script>
        <script src="js/contact-form.js"></script>
        <script type="text/paperscript" src="js/egg-mover.js" data-paper-canvas="egg-canvas"></script>
        <script src="js/vendor/jquery.parallax-scroll.js"></script>
        <script src="js/vendor/jquery.waypoints.min.js"></script>
        <script src="js/vendor/notify.min.js"></script>
        <script src="js/vendor/jquery-ui.min.js"></script>
        
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>     
    </body>
</html>
