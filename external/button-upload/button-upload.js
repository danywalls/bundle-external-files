class UploadButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="fancy-uploader">
      <label for="avatar">Image Uploader:</label>
      <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg">
    </div>
    `;
  }

}

window.customElements.define("upload-button", UploadButton);
