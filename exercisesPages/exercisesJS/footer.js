class Footer extends HTMLElement {
    constructor() {
        super();
    }


connectedCallback() {
    this.innerHTML = 
    `
    <footer>
        <p>Let's Connect!!!</p>
        <div id="contactFooter">
            Email: <span class="email">ad;klfal;skd@390249023</span></br>
            Phone:  <span class="phoneNumber">123123 132123</span></br>
            <div id="socialMedia">
                <a href="https://www.linkedin.com/in/jeremiah-r-7815961a3/"><img src="../assets/LI-In-Bug (2).png" alt="LinkedIn" height="40px" width="50px"></a>
                <a href="https://github.com/jrichard5"><img src="../assets/github-mark-white.png" alt="Github Favicon" height="40px" width="40px"></a>
            </div>
        </div>
    </footer>
    `
}
}

customElements.define('footer-component', Footer)