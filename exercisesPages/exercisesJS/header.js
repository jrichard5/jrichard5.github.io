class Header extends HTMLElement {
    constructor() {
        super();
    }


connectedCallback() {
    this.innerHTML = 
    `
    <header id="header">
        <div id="emptyspace">
            <a href="../index.html"><img src="../assets/randomstuff.png" style="border:solid;border-color:white;cursor:pointer"></a>
        </div>

        <div id="hearderHeaders">
            <h1>Jeremiah Richard</h1>
            <h4>Bachelor of Science in Computer Programming</h4>
        </div>

        <div id="contact">
            <span class="email">ad;klfal;skd@390249023</span></br>
            Phone:  <span class="phoneNumber">123123 132123</span></br>

            <div id="socialMedia">
                <a href="https://www.linkedin.com/in/jeremiah-r-7815961a3/"><img src="../assets/LI-In-Bug (2).png" alt="LinkedIn" height="40px" width="50px"></a>
                <a href="https://github.com/jrichard5"><img src="../assets/github-mark-white.png" alt="Github Favicon" height="40px" width="40px"></a>
            </div>
        </div>

    </header>
    `
}
}

customElements.define('header-component', Header)
