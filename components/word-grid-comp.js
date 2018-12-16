// var grid = new Vue({ 
//     el: '#grid',
//     data: {
//         rows: 5
//     },
//     template: '<div v-for="row in rows">row</div>'
    
// });

// Vue.component('grid', {
//     props: {
//         rows: {
//             type: Number,
//             default: 5
//         }
//     },
//     template: '<div v-for="row in rows"> </div>'
// })

// Vue.component('grid', {
//     template : '',
//     props: ['rows']
// });

// components: { grid: grid }

new Vue({
    el: '#app',
    data: {
        rows: 5,
        selfSize: 300,
        highlighted: false,
        started: false,
        difficulty: {
            none: 0,
            facile: 1,
            normal: 2,
            difficile: 3
        }
    },
    computed: {
        h: function(){
            return this.selfSize / this.rows;
        },
        w: function(){
            return this.selfSize / this.rows;
        },
        lh: function(){
            return 0.85 * (this.selfSize / this.rows);
        }
    },
    methods: {
        randomLetter(){
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var index = Math.floor(Math.random()*alphabet.length);
            var l = alphabet[index];
            return l;
        },
        initGame(){
            this.difficulty = 0;
        },
        startGame(diff){
            this.difficulty = diff;
            console.log("difficulty : "+this.difficulty);
            this.started = true;
        }
        // },
        // highlight: function(){
        //     highlighted = true;
        //     console.log("hello");
        // },
        // unhighlight: function(){
        //     highlighted = false;
        // }
    }
})