// Simple React Validator v1.5.1 | Created By Dockwa | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['simple-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('simple-react-validator'));
  } else {
    root.SimpleReactValidatorLocaleNl = factory(root.SimpleReactValidator);
  }
}(this, function(SimpleReactValidator) {
"use strict";

// Dutch
SimpleReactValidator.addLocale('nl', {
  accepted: ':attribute moet geaccepteerd zijn.',
  after: ':attribute moet een datum na :date zijn.',
  after_or_equal: ':attribute moet een datum na of gelijk aan :date zijn.',
  alpha: ':attribute mag alleen letters bevatten.',
  alpha_space: ':attribute mag alleen letters en spaties bevatten.',
  alpha_num: ':attribute mag alleen letters en nummers bevatten.',
  alpha_num_space: ':attribute mag alleen letters, nummers, en spaties bevatten.',
  alpha_num_dash: ':attribute mag alleen letters, nummers, underscores (_) en streepjes (-) bevatten.',
  alpha_num_dash_space: ':attribute mag alleen letters, nummers, spaties, underscores (_) en streepjes (-) bevatten.',
  array: ':attribute moet geselecteerde elementen bevatten.',
  before: ':attribute moet een datum voor :date zijn.',
  before_or_equal: ':attribute moet een datum voor of gelijk aan :date zijn.',
  between: ':attribute moet tussen :min en :max:type zijn.',
  "boolean": ':attribute moet ja of nee zijn.',
  card_exp: ':attribute moet een geldige vervaldatum zijn.',
  card_num: ':attribute moet een geldig credit card nummer zijn .',
  currency: ':attribute moet een geldige valuta zijn.',
  date: ':attribute moet een datum bevatten.',
  date_equals: ':attribute moet een datum gelijk aan :date zijn.',
  email: ':attribute is geen geldig e-mailadres.',
  "in": ':attribute moet een van :values zijn.',
  integer: ':attribute moet een getal zijn.',
  max: ':attribute mag niet hoger dan :max:type zijn.',
  min: ':attribute moet minimaal :min:type zijn.',
  not_in: 'Het formaat van :attribute is ongeldig.',
  not_regex: ':attribute formaat is ongeldig.',
  numeric: ':attribute moet een nummer zijn.',
  phone: ':attribute moet een geldig telefoonnummer zijn',
  regex: ':attribute formaat is ongeldig.',
  required: ':attribute is verplicht.',
  size: ':attribute moet :size:type zijn.',
  string: ':attribute moet een tekst zijn.',
  "typeof": ':attribute is niet het correcte type voor :type.',
  url: ':attribute moet een geldig URL zijn.'
});
return null;
}));
