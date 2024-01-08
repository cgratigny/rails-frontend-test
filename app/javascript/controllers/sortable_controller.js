import Sortable from 'stimulus-sortable'

export default class extends Sortable {

  // Override the onUpdate to update the value of the targets
  onUpdate(event) {
    // Select all child elements of this.element with the data-sortable="target" attribute
    let sortableTargets = this.element.querySelectorAll('[data-sortable="target"]');

    // Iterate over the NodeList, setting the order by index
    // Assuming that we want the values to start at 1, adding +1 here
    sortableTargets.forEach((target, index) => {
      target.value = index + 1;
    });

    // And call super so all of the default logic runs
    super.onUpdate(event)
  }

}