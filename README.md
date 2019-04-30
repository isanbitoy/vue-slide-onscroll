# vue-slide-onscroll
a basic slide transition on scroll for vue

## Project setup
```shell
npm install --save-dev vue-slide-onscroll
```

### Usage
```define_globally
import Vue from 'vue'
import SlideOnScroll from 'vue-slide-onscroll'

Vue.component('v-slide', SlideOnScroll)
```
or
```define_locally
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
	....
	....
</v-slide>
```
#### custom position value
```
<v-slide initPos="left-to-right" posValue="15" >
	....
	....
</v-slide>
```
#### custom duration
```
<v-slide initPos="left-to-right" posValue="12" duration="1" >
	....
	....
</v-slide>
```

## Available Options
| Props | Type | Values | Default |
| :---: | :---: | :---: | :---: |
| initPos | String | left-to-right | left-to-right |
|		  |		   | right-to-left |               |
|		  |		   | top-to-bottom |               |
|		  |		   | bottom-to-top |               |
| posValue | Number | 0 - 20 | 12 |
| duration | String | 0.5 / 1 | 0.5 |

## License

vue-slide-onscroll is an open source project and release under the [MIT License](LICENSE).

Copyright (C) 2019 [Lisandro A. Bitoy](https://github.com/isanbitoy).
