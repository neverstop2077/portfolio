import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class BasePage extends Vue {
  getSection(keys) {
    const nestedKeys = keys.split('.');
    let data = this.section;
    for (const key of nestedKeys) {
      if (data && data.hasOwnProperty(key)) {
        data = data[key];
      } else {
        console.error(`Property with key '${keys}' does not exist.`);
        return null;
      }
    }
    return data;
  }
}
