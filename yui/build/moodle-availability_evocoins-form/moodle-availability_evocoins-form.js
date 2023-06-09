YUI.add('moodle-availability_evocoins-form', function (Y, NAME) {

"use strict";

M.availability_evocoins = M.availability_evocoins || {};

M.availability_evocoins.form = Y.Object(M.core_availability.plugin);

M.availability_evocoins.form.initInner = function() {
    // Does nothing.
};

M.availability_evocoins.form.getNode = function(json) {
    var html, node;

    // Create HTML structure.
    html = '';
    html += '<label for="evocoins">';
    html += M.util.get_string('fieldlabel', 'availability_evocoins') + '</label>';
    html += '<input class="form-control" type="number" name="evocoins" id="evocoins" min="1" step="1">';
    node = Y.Node.create('<span class="form-inline">' + html + '</span>');

    // Set initial values.
    if (json.evocoins !== undefined) {
        node.one('input[name=evocoins]').set('value', json.evocoins);
    }

    // Add event handlers (first time only).
    if (!M.availability_evocoins.form.addedEvents) {
        M.availability_evocoins.form.addedEvents = true;
        var root = Y.one('.availability-field');
        root.delegate('change', function() {
            // Whichever dropdown changed, just update the form.
            M.core_availability.form.update();
        }, '.availability_evocoins input[name=evocoins]');
    }

    return node;
};

M.availability_evocoins.form.fillValue = function(value, node) {
    value.evocoins = node.one('input[name=evocoins]').get('value');
};

M.availability_evocoins.form.fillErrors = function(errors, node) {
    var value = {};
    this.fillValue(value, node);

    // Check value has been set.
    if (value.evocoins === undefined || value.evocoins === '' || value.evocoins <= 0) {
        errors.push('availability_evocoins:validnumber');
    }
};


}, '@VERSION@', {"requires": ["base", "node", "event", "moodle-core_availability-form"]});
