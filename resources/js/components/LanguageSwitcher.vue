<template>
  <Dropdown placement="bottom-end">
    <DropdownTrigger
        :show-arrow="false"
        class="h-10 w-full hover:text-primary-500"
    >

      <country-flag 
      v-if="flags.status"
      :country="getCountryName(selected)" 
      :rounded="flags.rounded"
      :shadow="flags.shadow"
      size='normal'/> 

      <Icon v-if="!flags.status" type="language"  />

      <span class="ml-1 font-bold hidden md:inline">
      {{selectedDisplay}}
    </span>
    </DropdownTrigger>
    <template #menu>
      <DropdownMenu>
        <template v-for="(value,key) in langs">
          <div class="flex flex-col py-1">
            <DropdownMenuItem
                              :key="key"
                               as="button"
                               class="flex items-center hover:bg-gray-100"
                               @click.prevent="changeLang(key)"
            >
              <country-flag v-if="flags.status" :country="getCountryName(key)" size='small'/>
              <span  class="ml-1" v-if="selected!==key">{{value}}</span>
              <span class="ml-1 font-bold text-primary-500"  v-else>{{value}}</span>
            </DropdownMenuItem>
          </div>
        </template>

      </DropdownMenu>
    </template>
  </Dropdown>

</template>

<script>
export default {
  name: "LanguageSwitcher",

  methods:{
    changeLang(key) {
      if (key !== this.selected) {
        Nova.request().get('/nova-vendor/language-switch/change/'+ key).then(() => {
          window.location.reload();
        });
      }
    },
    // fix for country name and localization
    getCountryName(langName){
      return langName === 'en' ? 'gb' : langName;
    }
  }

}
</script>
