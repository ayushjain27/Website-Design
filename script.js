const toggleButton = document.getElementsByClassName('navbar-toggle');
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton[0].addEventListener('click', function () {
    for (var i = 0; i < navbarLinks.length; i++)
        navbarLinks[i].classList.toggle('active');
});

{/* <a class="    .navbar-toggle" href="#"><i class='fa fa-bars'></i></a>
<a href="#home">HOME</a>
<a href="#services">SERVICES</a>
<a href="#blog">BLOG</a>
<a href="#">PORTFOLIO</a>
<a href="#contact">CONTACTUS</a>
<!-- </div> --> */}

{/* <a href="mailto: xyz@gmail.com"><i class="fa fa-envelope-open"></i></a>
<p><a href="mailto: xyz@gmail.com">xyz@gmail.com</a></p>
<a href="tel:9354xxxxxx"><i class="fa fa-phone-square"></i></a>
<p><a href="tel:9354xxxxxx">9354xxxxxx</a></p> */}