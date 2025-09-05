let tracker = $state('books');

export const activeTracker = {
  get value() {
    return tracker;
  },

  set value(new_tracker: string) {
    tracker = new_tracker;
  }
};
