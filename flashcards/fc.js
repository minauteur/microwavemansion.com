$(window).load(function() {
    function Card(term, definition, category) {
        this.term = term;
        this.definition = definition;
        //this.category = category;
    }

    var front = document.getElementById("front");
    var back = document.getElementById("back");
    var flip = document.getElementById("flip");
    var submit = document.getElementById("submit");
    var clearDeck = document.getElementById("clearDeck");
    var formFront, formBack;

    var card1 = new Card(
        "Lexical Environment",
        "Where code sits in relation to any surrounding code",
        "General"
    );
    var card2 = new Card(
        "Execution Context",
        "How, Why, When, and Where code is executed",
        "General"
    );
    var card3 = new Card(
        "JSON",
        "JavaScript Object Notation, for storing objects and their enclosed data. Often referred to as Key Value Pairs",
        "Objects"
    );

    var myCards = [card1, card2, card3];
    var cardIndex = 0;

    front.innerHTML = card1.term;
    back.innerHTML = card1.definition;
    back.style.visibility = "hidden";

    function flash() {
        if (front.style.visibility != "hidden") {
            front.style.visibility = "hidden";
            back.style.visibility = "visible";
        } else {
            front.style.visibility = "visible";
            back.style.visibility = "hidden";
        }
    }

    function cardAdd(formFront, formBack) {
        function clearForm() {
            document.getElementById("newTerm").value = "";
            document.getElementById("newDef").value = "";
            document.getElementById("cardForm").reset();
        }

        function updatePlaceholder() {
            document.getElementById("newTerm").placeholder =
                "...another term?";
            document.getElementById("newDef").placeholder =
                "...and another definition?";
        }

        formFront = document.getElementById("newTerm");
        formBack = document.getElementById("newDef");
        if (
            formFront.value !== formBack.value &&
            formFront.value !== "" &&
            formBack.value !== ""
        ) {
            var newCard = new Card();
            newCard.term = formFront.value;
            newCard.definition = formBack.value;
            myCards.push(newCard);
            cardIndex = myCards.length - 1;
            clearForm();
            updatePlaceholder();
            front.innerHTML = myCards[cardIndex].term;
            back.innerHTML = myCards[cardIndex].definition;
            // back.style.visibility = "hidden";
        } else if (formFront.value == formBack.value) {
            alert('kinda defeats the purpose of a "flash" card doesn\'t it?');
        } else if (
            (formFront.value === null || formFront.value === "", formBack.value === null ||
                formBack.value === "", formFront.value === null ||
                formBack.value === null ||
                formFront.value === "" ||
                formBack.value === "")
        ) {
            alert("Fill out both sides of the card, ya dringus!");
        }
        document.getElementById("newTerm").focus();
    }

    function nextCard() {
        cardIndex = (cardIndex + 1) % myCards.length;
        front.innerHTML = myCards[cardIndex].term;
        back.innerHTML = myCards[cardIndex].definition;
    }

    function prevCard() {
        if (cardIndex > 0)
            cardIndex = (cardIndex - 1);
        else if (cardIndex === 0) cardIndex = myCards.length - 1;
        front.innerHTML = myCards[cardIndex].term;
        back.innerHTML = myCards[cardIndex].definition;

    }

    function emptyDeck() {
        var confirmation = confirm("Are you sure you want to delete this entire deck?");
        if (confirmation) {
            myCards.splice(0, myCards.length);
            cardIndex = 0;
            front.innerHTML = "&nbsp;";
            back.innerHTML = "&nbsp;";
        }
        document.getElementById("newTerm").focus();
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 37) {
            prevCard();
        }
        if (event.keyCode == 39) {
            nextCard();
        }
        if (event.keyCode == 38 || event.keyCode == 40) {
            flash();
        }
        if (event.keyCode == 46) {
            emptyDeck();
        }
        // if (event.keyCode == 9 && !(document.activeElement == document.getElementById("newTerm")) {
        //     document.getElementById("newTerm");
        //     }
    });

    function cardSelect(myCards, cardIndex) {
        var selectCards = document.getElementById("selectCards");
        var options = selectCards.appendElement("");
        options.map(myCards.keys);
    }
});