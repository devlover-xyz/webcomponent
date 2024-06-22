class HelloButton extends HTMLButtonElement {
    constructor() {
        super();
    }
    
    connectedCallback() { // (2)
        let name = this.getAttribute('name') || 'Guys';
        this.addEventListener('click', () => alert("Hello " + name));
    }
}

customElements.define('hello-button', HelloButton, { extends: 'button' });