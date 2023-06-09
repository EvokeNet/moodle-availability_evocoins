<?php

/**
 * Front-end class.
 *
 * @package     availability_evocoins
 * @copyright   2023 World Bank Group <https://worldbank.org>
 * @author      Willian Mano <willianmanoaraujo@gmail.com>
 */

namespace availability_evocoins;

defined('MOODLE_INTERNAL') || die();

/**
 * Front-end class.
 *
 * @package    availability_evocoins
 * @copyright  2020 onwards Willian Mano {@link http://conecti.me}
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class frontend extends \core_availability\frontend {
    /**
     * Gets a list of string identifiers (in the plugin's language file) that
     * are required in JavaScript for this plugin. The default returns nothing.
     *
     * You do not need to include the 'title' string (which is used by core) as
     * this is automatically added.
     *
     * @return array Array of required string identifiers
     */
    protected function get_javascript_strings() {
        return ['fieldlabel'];
    }
}
