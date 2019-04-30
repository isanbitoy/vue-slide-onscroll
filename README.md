# vue-slide-onscroll
a basic slide transition on scroll for vue

## Project setup
```
npm install --save-dev vue-slide-onscroll
```

### Usage
```
import Vue from 'vue'
import SlideOnScroll from 'vue-slide-onscroll'

Vue.component('v-slide', SlideOnScroll)
```
or
```
<template>
	<div id="app">
		<v-slide initPos="leftToRight" posValue="10"
			<p>...</p>
			<div>...</div>
		</v-slide>
	</div>
</template>
<script>
import { SlideOnScroll } from 'vue-slide-onscroll'

export default {
	components: {
		'v-slide': SlideOnScroll
	},
	data: function() {
		return {
			....
			....
		}
	}
};
</script>
```
## Examples 

#### default position
```
<v-slide initPos="left-to-right" >
	<div>...</div>
</v-slide>
```
#### custom position value
```
<v-slide initPos="left-to-right" posValue="15" >
	<div>...</div>
</v-slide>
```
#### custom duration
```
<v-slide initPos="left-to-right" posValue="12" duration="1" >
	<div>...</div>
</v-slide>
```

## Available Options
| Props | Type | Values | Default |
| :---: | :---: | :---: | :---: |
| initPos | String | left-to-right <br/> right-to-left <br/> top-to-bottom <br/> bottom-to-top | left-to-right |
| posValue | Number | 0 - 20 | 12 |
| duration | String | 0.5 / 1 | 0.5 |

## License

vue-slide-onscroll is an open source project and release under the [MIT License](LICENSE).

Copyright (C) 2019 [Lisandro A. Bitoy](https://github.com/isanbitoy).
