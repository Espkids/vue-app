import Languages from '../../translations'

const supportedLanguages = Object.getOwnPropertyNames(Languages)

export default {
  namespaced: true,
  state: {
    language: 'en'
  },
  getters: {
    getLanguage: state => {
      return state.language
    }
  },
  mutations: {
    SET_LANGUAGE (state, lang) {
      state.language = lang
    }
  },
  actions: {
    setLanguage ({ commit }, languages) {
      if (typeof languages === 'string') {
        commit('SET_LANGUAGE', languages)
      } else {
        const language = supportedLanguages.find(sl =>
          languages.find(l => (l.split(new RegExp(sl, 'gi')).length - 1 > 0 ? sl : null)))
        commit('SET_LANGUAGE', language)
      }
    }
  }
}
