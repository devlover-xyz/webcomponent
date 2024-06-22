class ShowHello extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = `<p>
        Hello, ${this.getAttribute('name')}
    </p>`;
    }
}

customElements.define('show-hello', ShowHello);