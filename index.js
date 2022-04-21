function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(aWord) {
    console.log(aWord.toUpperCase());
}
function logWhisper(aWord) {
    console.log(aWord.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === "let\'s have dinner together!") {
        return "I can\'t hear you!";
    }
    else if (string.toUpperCase() === "LET\'S HAVE DINNER TOGETHER!") {
        return "YES INDEED!";
    }
    else if (string === "Let\'s have dinner together") {
        return "I would love to!";
    }

}