import { createStore } from 'vuex'

const state = {
	form: {
		profissional: {},
		atendimento: {}
	}
}

const mutations = {
	setarDadosProfissional(state, dados) {
		state.form.profissional = dados
	},
	setarDadosAtendimento(state, dados) {
		state.form.atendimento = dados
	}
}

const actions = {
	salvarDadosProfissional({ commit }, dados) {
		commit('setarDadosProfissional', dados)
	},
	salvarDadosAtendimento({ commit }, dados) {
		commit('setarDadosAtendimento', dados)
	}
}

export default createStore({
	state,
	mutations,
	actions
})