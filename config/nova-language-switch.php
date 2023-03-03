<?php
/**
 * @author BadinanSoft
 * @package BadinanSoft\LanguageSwitch
 * @license MIT
 * @link https://badinansoft.com
*/

return [

    /**
     * List of languages that your application supports
     * array <string, string>
    */
    'supported-languages' => [
        'en' => 'English',
        'ar' => 'Arabic',
    ],


    /**
     * Languages That need RTL support
     * string
    */
    'rtl-languages' => [
        'ar'
    ],

    /**
     * Show country flags?
     * https://www.npmjs.com/package/vue-country-flag-next
     * bool
    */
    'flags' => [
        'status' => true,
        'rounded'=> true,
        'shadow '=> true
    ],

];