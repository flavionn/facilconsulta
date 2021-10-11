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
		state.form.profissional.tudoOk = true
	},
	setarDadosAtendimento(state, dados) {
		state.form.atendimento = dados
		state.form.atendimento.tudoOk = true
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