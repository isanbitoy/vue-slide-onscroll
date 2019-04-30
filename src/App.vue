<template>
    <div id="app">
        <section class="app__banner">
            <span class="app__banner--firstChild">
                <a :href="link_A" target="_blank">
                    <i class="fa fa-github"></i>
                </a>
                <h2>vue-slide-onscroll</h2> 
            </span>
            <span class="app__banner--lastChild">
                <a :href="link_B" target="_blank">
                    <h3>npm install --save vue-slide-onscroll</h3>
                </a>
            </span>
        </section>
        <section class="app__content">
            <div class="content__box top">
                    <!--<p class="phrase__content" v-for="phrase in phrases">
                        {{ phrase.description }}
                    </p>-->
                <v-slide initPos="bottomToTop">
                    <code class="code--install">
                        <pre>{{ installCode }}</pre>
                    </code>
                </v-slide>
                <v-slide initPos="rightToLeft">
                    <code class="code--usage A">
                        <pre>{{ usageCodeA }}</pre>
                    </code>
                </v-slide>
                <v-slide initPos="leftToRight">
                    <code class="code--usage B">
                        <pre>{{ usageCodeB }}</pre>
                    </code>
                </v-slide>
            </div>
            <h1 class="sample--line">Example</h1>
            <div class="division--line"></div>
            <div class="content__box bottom">
                <div class="sample--first">
                    <div>
                        
                    </div>
                    <v-slide initPos="rightToLeft">
                        <p class="sample__paragraph">    
                            {{ sampleA }}
                        </p>   
                    </v-slide>                
                </div>
                <div class="sample--first">
                    <v-slide initPos="leftToRight">
                        <p class="sample__paragraph">
                            {{ sampleA }}
                        </p>
                    </v-slide>
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
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
            link_A: 'https://github.com/isanbitoy/vue-skill-bar',
            link_B: 'https://www.npmjs.com/package/vue-skill-bar',
            installCode: 'npm install --save vue-slide-onscroll',
            
            usageCodeA: 
`import Vue from 'vue' 
import SlideOnScroll from 'vue-slide-onscroll' 

Vue.component('v-slide', SlideOnScroll)`,
            
            usageCodeB: 
`<template>
    <div app="app">
        <v-slide initPos="leftToRight">
            ......
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
            ......
        }
    }
}`,
            sampleA: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum pellentesque metus quis sollicitudin. Mauris id sodales elit, in tempus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dui tortor, sollicitudin eget orci quis, vehicula facilisis tortor. Phasellus ipsum nisl, maximus quis ex a, pretium tincidunt mauris. Sed quis urna non quam rhoncus tempor sit amet at ex. Duis sit amet risus lorem. Cras nunc sapien, consectetur vitae placerat non, venenatis a mauris. Suspendisse sollicitudin vitae nibh a vehicula. Aenean iaculis erat sed enim bibendum porttitor. Quisque cursus rhoncus lorem, et vehicula odio malesuada et. Duis in nulla iaculis, cursus mauris sit amet, tempus turpis. Aenean vulputate vestibulum nunc. Suspendisse viverra vulputate ex at venenatis. Nulla nec cursus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus'
            
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>