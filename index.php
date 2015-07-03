<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>EGGFOO</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>

    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. 
                Please <a href="http://browsehappy.com/">upgrade your browser</a> to 
                improve your experience.</p>
        <![endif]-->
        <section id="top"></section>
        
        <div class="l-content">
            <nav id="nav-nobar"></nav>
            <nav id="nav-menu">
                <a href="#home"><p id="nav-menu-home">home</p></a>
                <a href="#services"><p id="nav-menu-services">services</p></a>
                <a href="#work"><p id="nav-menu-work">work</p></a>
                <a href="#about"><p id="nav-menu-about">about</p></a>
                <a href="#contact"><p id="nav-menu-contact">contact</p></a>
            </nav>
        </div>
        
        <header class="header-hide">
            <div class="l-content">
                <nav id="nav-bar"></nav>
                <a href="#home"><img id="logo-header" src="img/logo-green.svg" 
                                     width="156" height="28" alt="EGGFOO" /></a>              
            </div> 
        </header>
        
        
        <div id="bg-home" class="bg-holder" data-width="1024" data-height="768">
             <section id="home">
                <img id="logo" src="img/logo.svg" height="28" alt="EGGFOO" />               
                <div id="home-header" class="parallax-text">
                    <h1>design &amp;<br /><span>development</span></h1>
                </div>
                <div id="home-text">
                    <p>Web, iOS, Flash</p>
                </div>
            </section>   
        </div>
        
        
        <section id="services"> 
            <canvas id="egg-canvas" class="egg-mover" data-paper-resize="true"></canvas>           
            <img id="egg300" class="hidden" src="img/egg-mesh-300.png" alt="egg" />
            <img id="egg500" class="hidden" src="img/egg-mesh-500.png" alt="egg" />
            <img id="egg1000" class="hidden" src="img/egg-mesh-1000.png" alt="egg" />
            <div class="l-content">
                <div class="l-section-header"><a href="#top"><h2>services</h2></a></div>
                <div class="l-section-body">
                    <h3>Design</h3>
                    <p>UX/UI/visual.
                    Logos and branding. Photography and illustration.</p><br />

                    <h3>Development</h3>            
                    <p>Front-End: HTML/CSS/JavaScript/jQuery, Flash/Actionscript, iOS/Objective-C, WordPress integration.</p>
                </div>
            </div>
        </section>

        <div id="bg-services" class="bg-holder" data-width="1024" data-height="768">
            <div class="parallax-bg-egg">
                <div class="parallax-text"></div>            
                <div class="hash"></div>
            </div>
        </div>
        
       
        <section id="work">
            <div class="l-content">
                <div class="l-section-header"><a href="#top"><h2>work</h2></a></div>
                <div class="l-section-body">
                    <div id="work-proj-atw" class="l-work-project work-project">
                        <a href="aroundtheworldin480days" class="fadeLink">
                            <img src="img/work/atw.png" width="508" height="314" alt="Around the World in 480 Days">
                            <div class="work-project-select">
                                <h3>Around the World in 480 Days</h3>
                                <p>Travelogue Website &amp; Blog</p>
                            </div>
                        </a>                   
                    </div> 
                    <div id="work-proj-rkdrkd" class="l-work-project work-project">
                        <a href="rebeccakyrouacdesign" class="fadeLink">
                            <img src="img/work/rkd.png" width="508" height="314" alt="Rebecca Kyrouac Design">
                            <div class="work-project-select">
                                <h3>Rebecca Kyrouac Design</h3>
                                <p>Interior Designer &amp; Metal Artist's Website</p>
                            </div>
                        </a>
                    </div>                    
                    <div id="work-proj-syl" class="l-work-project work-project">
                        <a href="syllogism" class="fadeLink">
                            <img src="img/work/syl.png" width="508" height="314" alt="Syllogism">
                            <div class="work-project-select">
                                <h3>Syllogism</h3>
                                <p>Consultancy Website &amp; Blog</p>
                            </div>
                        </a>
                    </div>                    
                    <div id="work-proj-phm" class="l-work-project work-project">                        
                        <a href="philoandmimsy" class="fadeLink">
                            <img src="img/work/phm.png" width="508" height="314" alt="Philo and Mimsy">
                            <div class="work-project-select">
                                <h3>Philo &amp; Mimsy</h3>
                                <p>iOS App</p>
                            </div>
                        </a>
                    </div>                    
                    <div id="work-proj-rkdrkd" class="l-work-project work-project">
                        <a href="studioalloy" class="fadeLink">
                            <img src="img/work/sta.png" width="508" height="314" alt="Studio Alloy">
                            <div class="work-project-select">
                                <h3>Studio Alloy</h3>
                                <p>Design &amp; Fabrication Company Website</p>
                            </div>
                        </a>
                    </div>                    
                    <div id="work-proj-syl" class="l-work-project work-project">
                        <a href="eggfooclassic" class="fadeLink">
                            <img src="img/work/egf.png" width="508" height="314" alt="EGGFOO Classic">
                            <div class="work-project-select">
                                <h3>EGGFOO Classic</h3>
                                <p>Former Flash Website</p>
                            </div>
                        </a>
                    </div>                    
                </div>
            </div>
        </section>
        
        <div id="bg-work" class="bg-holder" data-width="1024" data-height="768">
            <div class="parallax-bg-egg">
                <div class="parallax-text"></div>            
                <div class="hash"></div>
            </div>
        </div>

        <section id="about">
            <div class="l-content">
                <div class="l-section-header"><a href="#top"><h2>about</h2></a></div>
                <div class="l-section-body">
                    <p>A small studio founded in 2002 in Portland, Oregon focused mainly on helping small businesses that could not otherwise afford professionally designed and built custom websites.</p>
                    
                    <p>Michael Dziedzic (linkedln, twitter)<br />
                    Emily Dziedzic</p><br />

                    <h3>egg</h3>
                    <p>A symbol undifferentiated potential and, presumably, creativity. Not to be confused with the tiny, uninhabited island (more of an islet really) in the Bahamas, which for a time some believed to be the place where Columbus first made landfall in the New World. Or, for that matter, the late 19th-century three-wheeled Swiss automobile, Victorian artist, U.S. defense contractor, or Japanese magazine. And certainly in no way related to the English progressive rock band by the same name, their self-titled debut album featuring the ever thought provoking “While Growing My Hair,” the Hammond Organ mastery of “Fugue In D Minor,” and the curiosity that is “The Song Of McGuillicudie The Pusillanimous (or don't worry James, your socks are hanging in the coal cellar with Thomas),” notwithstanding.</p><br />
                    
                    <h3>foo</h3>            
                    <p>A programmer’s first choice for representing a thing abstractly, be it a variable or function, some data, or even just a bit of existential malaise. The canonical example of its kind, foo easily defends against the leading contenders to the metasyntactic-variable throne, viz., blarg, flarp, blurgle, wombat, wibble, and flob.</p>
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="l-content">
                <div class="l-section-header"><a href="#top"><h2>contact</h2></a></div>
                <div class="l-section-body">
                    <div id="form-messages" class="error"></div>
<!--                    <form id="contact-form" method="post" action="http://eggfoo.com/dev/eggfoo/messsend.php" enctype="multipart/form-data">-->
                    <form id="contact-form" method="post" action="http://localhost.local/eggfoo/messsend.php" enctype="multipart/form-data">
                        <div class="form-field-bg">
                            <input 
                                class="fmtext"
                                name="fm_name" 
                                type="text" 
                                id="fm-name" 
                                placeholder="Name" 
                                value="' . $_POST['fm_name'] . '"			
                                size="50" />
                        </div>
                            <div class="error"><p>Please enter your name.</p></div>
                        <div class="form-field-bg">
                            <input 
                                class="fmtext"
                                name="fm_email" 
                                type="text" 
                                id="fm-email" 
                                placeholder="Email address" 
                                value="' . $_POST['fm_email'] . '" 
                                size="50" />
                        </div>
                            <div class="error"><p>Please enter a valid email.</p></div>
                        <div class="form-field-bg">
                            <textarea 
                                class="fmtextarea"
                                name="fm_message" 
                                id="fm-message" 
                                placeholder="Message" 
                                cols="50" 
                                rows="10">' . $_POST['fm_message'] . '
                            </textarea>
                        </div>
                            <div class="error"><p>Please enter a message.</p></div>
                        <div>
                            <input 
                                type="submit"
                                name="form_submitted" 
                                id="form-submitted" 
                                class="form-submit"
                                value="Send message" />
                        </div>
                    </form>
                </div>
            </div>            
        </section>
        
<?php require("footer.php"); ?>
