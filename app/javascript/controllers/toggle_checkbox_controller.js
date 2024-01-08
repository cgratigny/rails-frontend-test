import { Controller } from "@hotwired/stimulus"

/**
 * Example Usage
 * 
 * This will trigger the checkbox to be changed
 *  <div data-action="click->toggle-checkbox#toggle">
 * 
 * The input
 * f.input :active,
 *   input_html: { data: { toggle_checkbox_target: :checkbox, action: "toggle-checkbox#toggle" } },
 *   wrapper_html: { class: :hidden }
 *
 * The element that will show when checked
 * <span data-toggle-checkbox-target="checked"></span>
 * 
 * The element that will show when unchecked
 * <span data-toggle-checkbox-target="unchecked"></span>
 * 
 */

// Connects to data-controller="checkbox-toggler"
export default class extends Controller {
  static targets = ["checkbox", "checked", "unchecked"]

  connect() {
    this.toggleElements();
  }

  toggle() {
    // Toggle the checkbox
    this.checkboxTarget.checked = !this.checkboxTarget.checked;
    this.toggleElements();
  }

  toggleElements() {
    // Update the icon based on the checkbox state
    if (this.checkboxTarget.checked) {
      // add the hidden class to the unchecked element
      this.uncheckedTargets.forEach(target => target.classList.add("hidden"));

      // remove the hidden class from the checked element
      this.checkedTargets.forEach(target => target.classList.remove("hidden"));
    } else {
      // add the hidden class to the unchecked element
      this.checkedTargets.forEach(target => target.classList.add("hidden"));

      // remove the hidden class from the checked element
      this.uncheckedTargets.forEach(target => target.classList.remove("hidden"));
    }
  }
}
