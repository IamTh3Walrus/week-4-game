$(document).ready(function() {

    var yourMatchingNumber = 0;

    //create a random number
    var randomNum = randomNumGen();

    var wins = 0;
    var losses = 0;
    var beatles;

    function randomNumBeatles() {
        // Beatles obj
        return {
            'lennon': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/lennon.jpeg"
            },
            'mccartney': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/mccartney.jpeg"
            },
            'harrison': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/harrison.jpeg"
            },
            'ringo': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/ringo.jpeg"
            }
        };
    }

    function randomNumGen() {
        return Math.floor(Math.random() * 100) + 18;
    }

    function setGame() {
        yourMatchingNumber = 0;
        //create random numbers
        beatles = randomNumBeatles();
        //create a random number and render it
        randomNum = randomNumGen();
        var randomNumDiv = $("<div id='random-number'>").text(randomNum);
        $("#random-area").html(randomNumDiv);
    }

    function updateDom(didUserWin) {
        $('#winArea').empty();

        if (didUserWin === true) {
            $('#winArea').append($('<p>').text('You won!!'));
            setGame();
            renderMatchingNumber();
        } else if (didUserWin === false) {
            $('#winArea').append($('<p>').text('You lost!!'));
            setGame();
            renderMatchingNumber();
        }

        var wSpan = $('<span>').text(wins);
        var lSpan = $('<span>').text(losses);

        var pWins = $('<p>').text('Wins: ');
        var pLosses = $('<p>').text('Losses: ');

        pWins.append(wSpan);
        pLosses.append(lSpan);

        $('#winArea').append(pWins);
        $('#winArea').append(pLosses);
    }

    function renderBeatles() {
        //render Beatles Images
        for (var key in beatles) {
            var beatlesDiv = $("<div class='beatles-button' data-name='" + key + "'>");
            var beatlesImg = $("<img alt='image' class='beatles-img'>").attr("src", beatles[key].imageUrl);
            beatlesDiv.append(beatlesImg);
            $("#beatles-area").append(beatlesDiv);
        }
    }

    function updateMatchingNumber(th) {
        var self = th;

        if (self.attr('data-name') == 'red') {
            yourMatchingNumber = yourMatchingNumber + beatles[self.attr('data-name')].points;
        } else if (self.attr('data-name') == 'blue') {
            yourMatchingNumber = yourMatchingNumber + beatles[self.attr('data-name')].points;
        } else if (self.attr('data-name') == 'yellow') {
            yourMatchingNumber = yourMatchingNumber + beatles[self.attr('data-name')].points;
        } else {
            yourMatchingNumber = yourMatchingNumber + beatles[self.attr('data-name')].points;
        }
    }

    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
    }

    setGame();
    updateDom();
    renderBeatles();
    renderMatchingNumber();

    //create on.click event for crystals
    $(".beatles-button").on("click", function(event) {
        updateMatchingNumber($(this));
        renderMatchingNumber();

        //check if won or lost
        if (yourMatchingNumber == randomNum) {
            wins++;
            setGame();
            updateDom(true);
        } else if (yourMatchingNumber > randomNum) {
            losses++;
            setGame();
            updateDom(false);
        }
    });

});
