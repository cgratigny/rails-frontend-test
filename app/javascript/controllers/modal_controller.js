import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    'modal'
  ]

  connect() {
    // Check if the current modal element has the attribute 'data-auto-open-modal' set to 'true'
    if (this.element.getAttribute('data-auto-open-modal') === 'true') {
      // Update the attribute to prevent auto-opening on subsequent connects
      this.element.setAttribute('data-auto-open-modal', 'false');
      
      // Call the show method directly, and adding in a mock event to not wrap an annoying if e is present on the show method
      const mockEvent = { preventDefault: () => {} };
      this.show(mockEvent);
    }
  }

  show(e) {
    e.preventDefault();

    this.modalTarget.open = true
    document.querySelector('.desktop-overlay').style.zIndex = 1
    this.modalTarget.querySelectorAll('x-transition').forEach((transition) => {
      transition.open = true
    })
  }

  hide(e) {
    e.preventDefault()

    this.modalTarget.querySelectorAll('x-transition').forEach((transition) => {
      transition.open = false
    })
    this.modalTarget.open = false

    document.querySelector('.desktop-overlay').style.zIndex = 2
    this.dispatch('closed')
  }
}
