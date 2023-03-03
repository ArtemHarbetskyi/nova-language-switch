import LanguageSwitcher from "./components/LanguageSwitcher";
import {createApp,defineComponent} from 'vue';
import CountryFlag from 'vue-country-flag-next'


Nova.booting((app, store) => {

    window.addEventListener('DOMContentLoaded',()=>{
        let appHeader = document.getElementsByTagName('header');

        if (appHeader.length > 0) {
           let languages = Nova.config('nova_language_switcher').languages;
           let selected = Nova.config('nova_language_switcher').current_lang;
        
           let flags = Nova.config('nova_language_switcher').flags;

           let switchLang = defineComponent({
                extends: LanguageSwitcher, data() {
                    return {
                        langs: languages,
                        selectedDisplay:languages[selected],
                        selected:selected,
                        flags: flags
                    }
                }
            })

           let lang =  document.createElement('div');
           lang.className = 'mr-3';

           let newApp = createApp(switchLang);

           newApp.component('country-flag', CountryFlag);
           newApp.component('Dropdown',app._context.components.Dropdown);
           newApp.component('DropdownTrigger',app._context.components.DropdownTrigger);
           newApp.component('DropdownMenu',app._context.components.DropdownMenu);
           newApp.component('DropdownMenuItem',app._context.components.DropdownMenuItem);
           newApp.component('Icon', app._context.components.HeroiconsOutlineGlobe);

           newApp.mount(lang);

           appHeader[0].lastChild.lastChild.insertBefore(lang,appHeader[0].lastChild.lastChild.firstChild);
        }
    })
})


