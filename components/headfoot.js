function footer() {
  return `
    <div class="footer-box">
            <ul>
                <li><a href="https://www.linkedin.com/in/iamgauhar" target="_blank"><i class='bx bxl-linkedin-square'
                            style='color:#0458ce'></i></a></li>
                <li><a href="https://www.github.com/iamgauhar" target="_blank"><i class='bx bxl-github'
                            style='color:#0a1420'></i></a>
                </li>
                <li><a href="https://www.instagram.com/iamgauhar.in" target="_blank"><i class='bx bxl-instagram'
                            style='color:#f11d56'></i></a></li>
                <li><a href="https://iamgauhar.github.io/" target="_blank"><i class='bx bx-globe'
                            style='color:#0fc535'></i></a></li>
            </ul>
            <div class="credits">
                <a href="#">Privacy Policy</a> | <a href="#">Terms & Condition</a>
            </div>
            <div class="copyright">
                <p>
                    &copy; Copyright 2019. | <strong><a href="#">ABC Technologies Pvt. Ltd. </a></strong> | All Rights
                    Reserved.
                </p>
            </div>
    `;
}

function navbar() {
  return `
    <div class="nav-container">
            <div class="brand">
                <a href="#!">Logo</a>
            </div>
            <nav>
                <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                <ul class="nav-list">
                    <li>
                        <a href="#!">Home</a>
                    </li>
                    <li>
                        <a href="#!">Android</a>
                    </li>

                    <li>
                        <a href="#!">Portfolio</a>
                    </li>
                    <li>
                        <a href="#!">Category</a>

                    </li>
                    <li>
                        <a href="#!">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    `;
}

export { navbar, footer };
