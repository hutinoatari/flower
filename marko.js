const rand = n => Math.floor(Math.random() * n);
const chooseOne = a => a[rand(a.length)];

const marko = {
    period: "。",
    words: {},
    beginWords: [],
    add: function(wordArr){
        const wordLength = wordArr.length;
        if(!this.beginWords.includes(wordArr[0])) this.beginWords.push(wordArr[0]);
        for(let i=0; i<wordLength; i++){
            if(wordArr[i] === this.period) continue;
            if(!this.words.hasOwnProperty(wordArr[i])) this.words[wordArr[i]] = [];
            this.words[wordArr[i]].push(wordArr[i+1]);
        }
    },
    generate: function(){
        if(this.beginWords.length === 0) return;
        const beginWord = chooseOne(this.beginWords);
        let text = "";
        let word = beginWord;
        while(word !== this.period){
            text += word;
            word = chooseOne(this.words[word]);
        }
        text += this.period;
        return text;
    },
    reset: function(){
        this.words = {};
        this.beginWords = [];
    },
}

export default marko;