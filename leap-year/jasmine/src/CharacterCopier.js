CharacterCopier = function (source, destination) {
    this.copy = function () {
        var char = source.getChar();
        while (char !== '\n') {
            console.log(char);
            destination.setChar(char);
            char = source.getChar();
        }
    }
}
 