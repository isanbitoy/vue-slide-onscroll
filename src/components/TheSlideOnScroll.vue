<template>
	<div class="slide-onscroll" :style="slide_style">
		<slot/>
	</div>
</template>

<script>
let isNum = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}
export default {
	name: 'SlideOnScroll',
	props: {
		'initPos': {
			type: String,
			default: ''
		},
		'posValue': {
			default: 12
		},
		'duration': {
			type: String,
			default: '0.5'
		}
	},
	computed: {
		slide_style() {
			let style = {
				'--tx': this.set_X + 'px',
				'--ty': this.set_Y + 'px'
			}
			return style
		},
		set_X() {
			switch(this.initPos) {
				case 'right-to-left': return this.posValue
				case 'left-to-right': return -this.posValue
			}
			return isNum(this.initPos) ? this.initPos : 0
		},
		set_Y() {
			switch(this.initPos) {
				case 'top-to-bottom': return -this.posValue
				case 'bottom-to-top': return this.posValue
			}
			return isNum(this.initPos) ? this.initPos : 0
		}
	},
	methods: {
		onScroll: function() {
			let elem = document.querySelectorAll('.slide-onscroll');
			elem.forEach(e => {
				let topPos = e.getBoundingClientRect().top ;
				let screenPos = window.innerHeight / 1.5;
				if (topPos - screenPos <= 0) {
					e.classList.add('active')
				}
				else
					e.classList.remove('active')
			})
		}
	},
	created: function() {
		if(process.browser) {
			window.addEventListener('scroll', this.onScroll)
		}
	},
	destroyed: function() {
		if (process.browser) {
			window.removeEventListener('scroll', this.onScroll)
		}
	}
};
</script>

<style>
[v-cloak] { display: none; }
*, *::before, *::after {
	margin: 0; padding: 0;
	box-sizing: border-box;
}
:root {
	--ty: 0;
	--tx: 0;
}
.slide-onscroll {
	transition: all 0.5s ease;
	opacity: 0;
	-ms-transform: translate(var(--tx), var(--ty));
	-webkit-transform: translate(var(--tx), var(--ty));
	transform: translate(var(--tx), var(--ty));
}
.active {
	opacity: 1;
	-ms-transform: translate(0px, 0px);
	-webkit-transform: translate(0px, 0px);
	transform: translate(0px, 0px);
}
</style>