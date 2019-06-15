<template>
    <div id="app">
        <header class="app__header">
            <div class="header__first-child">
                <a :href="github_link" target="_blank">
                    <span :title="github_link">
                        <i class="fa fa-github"></i>
                    </span>
                </a>
                <h1>vue-slide-onscroll</h1> 
            </div>
            <div><p>simple slide transition on scroll for vue</p></div>
            <div class="header__last-child">
                <h3 class="install--command">npm install --save vue-slide-onscroll</h3>
            </div>
            <nav>
                <a :href="github_link" target="_blank">
                    <img :src="github_star" />
                </a>
                <a :href="npm_link" target="_blank">
                    <img :src="npm_version" />
                    <img :src="npm_download" />
                </a>
                <a :href="vue_link">
                    <img :src="vue_svg" />
                </a>
            </nav>
        </header>

        <main class="app__content">
            <section class="content__box top">
                <h1>Usage</h1>
                <code class="code--usage A">
                    <pre>{{ usageCodeA }}</pre>
                </code>
                <h3>or</h3>
                <code class="code--usage B">
                    <pre>{{ usageCodeB }}</pre>
                </code>
            </section>

            <h1>Example</h1>

            <section class="content__box bottom">

                <div class="sample--horizontal">
                    <div>
                        <v-slide initPos="left-to-right">
                            <figure>
                                <img src="/static/moving_forward.svg">
                            </figure>
                        </v-slide>
                    </div>
                    <v-slide initPos="right-to-left">
                        <p class="sample__paragraph--A">    
                            {{ sampleParagraphA }}
                        </p>   
                    </v-slide>                
                </div>

                <div class="sample--vertical">
                    <div class="sample__paragraph--C">
                        <v-slide initPos="bottom-to-top">
                            <h3>slide transition from bottom to top</h3>
                            <p>
                                {{ sampleParagraphC }}
                            </p>
                        </v-slide>
                    </div>
                    <div class="sample__paragraph--D">
                        <v-slide initPos="top-to-bottom">
                            <h3>slide transition from top to bottom</h3>
                            <p >
                                {{ sampleParagraphD }}
                            </p>
                        </v-slide>
                    </div>
                    <div class="sample__paragraph--E">
                        <v-slide initPos="bottom-to-top">
                            <h3>slide transition from bottom to top</h3>
                            <p>
                                {{ sampleParagraphE }}
                            </p>
                        </v-slide>
                    </div>
                </div>

                <div class="sample--horizontal">
                    <v-slide initPos="left-to-right">
                        <p class="sample__paragraph--B">
                            {{ sampleParagraphB }}
                        </p>
                    </v-slide>
                    <div>
                        <v-slide initPos="top-to-bottom">
                            <figure>
                                <img src="/static/going_up.svg">
                            </figure>
                        </v-slide>
                    </div>
                </div>

            </section>
        </main>
    </div>
</template>

<script>
import SlideOnScroll from './components/TheSlideOnScroll'

export default {
    name: 'app',
    components: {
        'v-slide': SlideOnScroll
    },
    data: function() {
        return {
            github_link: 'https://github.com/isanbitoy/vue-slide-onscroll',
            npm_link: 'https://www.npmjs.com/package/vue-slide-onscroll',
            vue_link: 'https://vuejs.org/',
            install_code: 'npm install --save vue-slide-onscroll',
            github_star: 'https://img.shields.io/github/stars/isanbitoy/vue-slide-onscroll.svg?style=social&label=Star',
            npm_version: 'https://img.shields.io/npm/v/vue-slide-onscroll.svg',
            npm_download: 'https://img.shields.io/npm/dm/vue-slide-onscroll.svg',
            vue_svg: 'https://img.shields.io/badge/vue-3.0-green.svg',
            
            usageCodeA: 
`import Vue from 'vue' 
import SlideOnScroll from 'vue-slide-onscroll' 

Vue.component('v-slide', SlideOnScroll)`,
            
            usageCodeB: 
`<template>
    <div class="app">
        <v-slide initPos="left-to-right">
            <div>...</div>
        </v-slide>
    </div>
</template>

<script>
import { SlideOnScroll } from 'vue-slide-onscroll'

export default {
    el: '#app',
    components: {
        'v-slide': SlideOnScroll
    },
    data: function() {
        return {
            ...
        }
    }
}
<script>`,
            usageCodeC: 
`v-slide initPos="right-to-left">
    <p>...</p>
</v-slide>`,
            sampleParagraphA: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum pellentesque metus quis sollicitudin. Mauris id sodales elit, in tempus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dui tortor, sollicitudin eget orci quis, vehicula facilisis tortor. Phasellus ipsum nisl, maximus quis ex a, pretium tincidunt mauris. Sed quis urna non quam rhoncus tempor sit amet at ex. Duis sit amet risus lorem. Cras nunc sapien, consectetur vitae placerat non, venenatis a mauris. Suspendisse sollicitudin vitae nibh a vehicula. Aenean iaculis erat sed enim bibendum porttitor. Quisque cursus rhoncus lorem, et vehicula odio malesuada et. Duis in nulla iaculis, cursus mauris sit amet, tempus turpis. Aenean vulputate vestibulum nunc. Suspendisse viverra vulputate ex at venenatis. Nulla nec cursus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus',
            sampleParagraphB: 'Vestibulum fermentum eu erat porta sollicitudin. Cras in lectus nec nulla porta hendrerit nec ullamcorper nisi. Ut vel neque sit amet tortor scelerisque scelerisque. Morbi ullamcorper leo quis tortor auctor, in porta justo condimentum. Quisque maximus nisi diam, ut rhoncus ligula elementum ac. Vestibulum vitae velit vitae augue ornare consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat vel lorem a viverra. Vestibulum at suscipit purus. Etiam ligula felis, tempus sit amet tempus eget, sodales sed sem. Curabitur porttitor sapien vulputate, faucibus diam nec, blandit tellus. Mauris porttitor neque in urna aliquet vulputate. Praesent felis dolor, ornare quis libero et, dapibus tincidunt mauris. Etiam nec libero arcu.',
            sampleParagraphC: 'Nunc quis quam ante. Integer vel ipsum in lorem fermentum eleifend sit amet a nibh. Phasellus aliquam ac enim id ullamcorper. In tellus nunc, sodales auctor molestie sit amet, malesuada id diam. Proin et eros vitae libero malesuada finibus. Nulla ac ullamcorper erat, at bibendum libero. Curabitur laoreet risus quis arcu malesuada fringilla.',
            sampleParagraphD: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis imperdiet urna, eget auctor nulla. Vivamus semper bibendum sem, vel mattis elit commodo sagittis. Sed quis augue ultrices, tristique nunc non, gravida sapien. Vestibulum sed maximus velit. Vivamus facilisis ultrices commodo.',
            sampleParagraphE: 'Integer interdum purus vitae nibh molestie, viverra laoreet libero ullamcorper. Quisque eros eros, scelerisque et tempor ut, consequat vitae lacus. Aliquam vel ornare leo, nec iaculis risus. Integer nulla ex, interdum eu porttitor sit amet, scelerisque eu libero. In et vulputate tortor. Sed id magna a velit interdum cursus in nec lorem.'   
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>