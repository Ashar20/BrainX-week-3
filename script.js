"use strict";

window.onload = function() {

    var quiz = {
        title: 'BrainX: Can you solve this?',

        questions: [{
                text: "A retailer logged in this morning to study the overlap between audiences and saw a graph that looked like this. What should he/she do?",
                responses: [{
                        text: 'For “Full Price Purchasers” audience, use strategies like Complete The Look that will aim to increase Average Order Value (AOV) of the website.',
                        value: ' Yes, you are correct'
                    },
                    {
                        text: 'To target “New Visitors” audience, use strategies like Personalised recommendations that will aim to increase the conversion rate',
                        value: 'hmmm interesting… There is no need to change the audience'
                    },
                    {
                        text: 'For “Purchasers without Vue.ai Exposure” audience, add strategies that can improve engagement across multiples touchpoints on the website',
                        value: 'oops….Things are not fine, you have to change your audience preset for better reach with your customers'
                    },
                   
                ]
            },
           
        ]
    };


    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                
            
            Submit:function() {
                this.questionIndex++;
                console.log(this.userResponses);
                window.scrollTo(0, 0);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}