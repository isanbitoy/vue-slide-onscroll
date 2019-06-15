import Vue from 'vue'
import SlideOnScroll from './TheSlideOnScroll'

const Plugin = {
	install(Vue) {
		Vue.component('v-slide', SlideOnScroll)
	}
};

Object.keys(Plugin).forEach(name => {
	Vue.component(name, Plugin[name])
})

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Plugin)
}

export { SlideOnScroll }
export default Plugin