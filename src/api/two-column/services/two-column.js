'use strict';

/**
 * two-column service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::two-column.two-column');
