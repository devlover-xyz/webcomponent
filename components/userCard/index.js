/** Defining the template **/
const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="components/userCard/styles.css">
    <div class="user-card">
        <img />
        <div class="container">
        <h3></h3>
        <div class="info">
        </div>
        <button id="open-modal">Show Info</button>
        </div>
    </div>
    `;

class UserCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    static get observedAttributes() {
        /** Even though we have other attributes, only defining key here
         as to reduce the number of times attributeChangedCallback is called **/
        return ["key"];
    }
    
    connectedCallback() {
        /** Attaching an event-listener to the button so that the 
        openModal() methods gets invoked in click, openModal will be 
        defined later **/
        this.shadowRoot
            .querySelector("#open-modal")
            .addEventListener("click", () => this.openModal());
    }

    attributeChangedCallback(name, oldValue, newValue) {
        /** Updating the DOM whenever the key attribute is updated,
         helps in avoiding unwanted DOM updates **/
        if (name === "key") {
            this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
            this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
        }
    }
    
    openModal() {
        const userModal = document.createElement("user-modal");
        userModal.setAttribute("name", this.getAttribute("name"));
        userModal.setAttribute("avatar", this.getAttribute("avatar"));
        userModal.setAttribute("status", this.getAttribute("status"));
        userModal.setAttribute("species", this.getAttribute("species"));
        userModal.setAttribute("gender", this.getAttribute("gender"));
        userModal.setAttribute("key", this.getAttribute("key"));
        document
            .getElementsByTagName("body")[0]
            .insertAdjacentElement("afterend", userModal);
    }


}

customElements.define('user-card', UserCard);