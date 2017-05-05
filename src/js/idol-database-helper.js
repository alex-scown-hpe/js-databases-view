/*
 * Copyright 2015-2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

define([], function() {
    'use strict';

    return {
        getDatabaseAttributes: function () {
            return ['name']
        },

        getDatabaseIdentifier: function (item) {
            return item.name;
        }
    };
});
