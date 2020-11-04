// https://www.youtube.com/watch?v=gvicrj31JOM

const video = {
    title: 'a',
    play() {
        console.log(this);
    },
    stop() {
        console.log(this)
    }
};

video.play();


video.stop = function() {
    console.log(this);
}

video.stop();


function playVideo() {
    console.log(this);
}

playVideo();

// capital function Video is a constructor function
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');

// logic of passing a function (callback) into forEach. I don't see it.
const videoTags = {
    title: 'hello',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach( function (tags) {
            console.log(this.title + ' ' + tags);},
            this);
    }
}

videoTags.showTags();