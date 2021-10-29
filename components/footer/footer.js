const FooterContent = `
  <style> 
  #footer{
      padding: 2em 12vw;
    }

    .lead {
      font-family: Chakra Petch;
      font-style: normal;
      font-weight: bold;
      font-size: 1.75em;
      line-height: 140%;
    }

    .buttons > button,
    .buttons > a {
        margin-right: 3.125em;
        cursor: pointer;
    }

    .paragraph {
        font-family: Source Sans Pro;
        max-width: 31.25em;
    }

    .primary-button,
    .passive-button {
      display: inline-block;
      font-family: Chakra Petch;
      font-style: normal;
      font-weight: 600;
      font-size: 1em;
      line-height: 1.25em;
      height: 3.5em;
      border: none;
      border: 1.5px solid black;
      box-sizing: border-box;
      box-shadow: 10px 10px 0px black;
      border-radius: 10px;
      padding: 1em 1.25em;
      margin: 1.875em 0;
      text-decoration: none;
      color: black;
    }

    .primary-button:active,
    .passive-button:active {
      box-shadow: 5px 5px 0px #000000;
      transform: translateY(4px);
    }

    .primary-button {
      background: var(--primary-color);
    }

    .primary-button:hover {
      background: var(--primary-color-dark);
    }

    .passive-button {
      background: var(--passive-color);
    }

    .passive-button:hover {
      background: var(--passive-color-dark);
    }

    .buttons > .publish-disabled {
        cursor: default;
        opacity: 0.4;
    }

    #input-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    #input-container input {
      width: auto;
    }
  </style>
  <link rel="stylesheet" href="../../style.css" />
  <link rel="stylesheet" href="./publish.css" />  
  <div>
    <div id="footer">
    <p class="lead">
      3. Export the project
    </p>

    <div id="input-container">
            <label class="small" for="project-name">Name your project:</label>
            <input
                id="project-name"
                class="text-input margin-bottom-2rem"
                type="text"
                name="project-name"
                placeholder="your-new-ar-project"
            />
    </div>  

    <div class="buttons">
     
      <button id="zip-publish" disabled class="passive-button publish-disabled">
        Download package
      </button>
    </div>
    </div>
  </div>`;
class PageFooter extends HTMLElement {
  shadow = null;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = FooterContent
  }
}

customElements.define('page-footer', PageFooter);
