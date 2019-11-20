export const Translations = {
  en: {},
  'en-US': {},
  'de-DE': {
    reload: 'Neu laden',
    cancel: 'Abbrechen',
    delete: 'Löschen',
    lorem: "This text translates lorem to: At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
  },
  de: {
    save: 'Speichern',
    reload: 'Neu laden',
    cancel: 'Abbrechen',
    delete: 'Löschen',
  },
  'it-CH': {},
  'fr-CH': {},
};

// wire the defaults
Translations['de-CH'] = Translations['de-DE'];
