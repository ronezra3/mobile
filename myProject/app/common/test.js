//Comment : example only ! this file is not include in the prject


app.controller("mainController", function ($scope, $firebaseObject) {
    //var ref = new Firebase("https://<your-firebase>.firebaseio.com/");
    //// download the data into a local object
    //$scope.data = $firebaseObject(ref);
//    <div id='messagesDiv'></div>
//<input type='text' id='nameInput' placeholder='Name'>
    //<input type='text' id='messageInput' placeholder='Message'>

    var myDataRef = new Firebase('https://projectrono.firebaseio.com/data');
    $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
            var name = $('#nameInput').val();
            var text = $('#messageInput').val();
            myDataRef.push({ name: name, text: text });
            $('#messageInput').val('');
        }
    });
    myDataRef.on('child_added', function (snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
    });
    function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };

    var ref = new Firebase("https://projectrono.firebaseio.com/data");

    // download the data into a local object
    var syncObject = $firebaseObject(ref);

    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");






});