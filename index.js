/**
 * Add arrow controls to focusable elements in Alpine.js
 *
 * When a item is selected, the up arrow focuses the previous element. If there's no element, it skips to the last element.
 * The down arrow selects the next element. If it does not exist, it skips to the first element.
 */

export default ({
    items() {
        return this.$el.querySelectorAll('[x-spread=item]')
    },

    item: {
        ['x-on:keydown.arrow-down.prevent']($event) {
            if ($event.target.nextElementSibling !== null &&
                $event.target.nextElementSibling.getAttribute('x-spread') === 'item') {
                $event.target.nextElementSibling.focus()
            } else if (this.items().length) {
                this.items()[0].focus();
            }
        },

        ['x-on:keydown.arrow-up.prevent']($event) {
            if ($event.target.previousElementSibling !== null &&
                $event.target.previousElementSibling.getAttribute('x-spread') === 'item') {
                $event.target.previousElementSibling.focus()
            } else if (this.items().length) {
                this.items()[this.items().length-1].focus();
            }
        }
    }
})
