describe('Character copier', function () {

    // Store all scenarios in an array
    var scenarios = [
        { characters: ['a', 'b', 'c', 'd', '\n'], calls : 4 },
    ]

    // Loop through each scenario
    scenarios.forEach(function (scenario) {

        // Dynamically describe situation
        it('When read string [' + scenario.characters.join() + '], should call setChar ' + scenario.calls + ' times', function () {

            // Create a spy to simulate Source.getChar query
            var source = {
                getChar: jasmine
                        .createSpy()
                        .and
                        .returnValues(scenario.characters[0], scenario.characters[1], scenario.characters[2], scenario.characters[3], scenario.characters[4])
            };           

            // Create a mock for command to set characters
            var destination = {
                setChar: jasmine.createSpy()
            };
            
            var characterCopier = new CharacterCopier(source, destination);
            characterCopier.copy();
            expect(destination.setChar.calls.count()).toEqual(4);
            expect(destination.setChar).toHaveBeenCalledWith(scenario.characters[0]);
            expect(destination.setChar).toHaveBeenCalledWith(scenario.characters[1]);
            expect(destination.setChar).toHaveBeenCalledWith(scenario.characters[2]);
            expect(destination.setChar).toHaveBeenCalledWith(scenario.characters[3]);
        });
    });
});