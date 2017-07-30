
$(function(){

'use strict';

var test = [
  {
    title: 'Вопрос №1',
    points: 1,
      answers: [{
      answer: 'Ответ №1',
      right: true
    },
    {
      answer: 'Ответ №2',
      right: false
    },
    {
      answer: 'Ответ №3',
      right: false
    }
  ]},
  {
    title: 'Вопрос №2',
    points: 1,
    answers: [{
      answer: 'Ответ №1',
      right: false
    },
    {
      answer: 'Ответ №2',
      right: false
    },
    {
      answer: 'Ответ №3',
      right: true
    }]
  },
  {
    title: 'Вопрос №3',
    points: 1,
    answers: [{
      answer: 'Ответ №1',
      right: false
    },
    {
      answer: 'Ответ №2',
      right: true
    },
    {
      answer: 'Ответ №3',
      right: false
    }]
  }
];


var preparedTest = JSON.stringify( test );
var localTest = localStorage.setItem( "test", preparedTest );



var recievedTest = localStorage.getItem( "test" );
var actualTest = JSON.parse( recievedTest );



var $html = $( '#template' ).html();

var tmpl = _.template( $html );

var content = tmpl({
  data: actualTest
});



var $form = $( '#test' );
$form.prepend( content );



var i, j;
var $inputs = $('input:checkbox');

$inputs.on( 'click', function() {

  $(this).parent().siblings().children().each(function(){

    if ( $(this).attr('disabled') ) {

      $(this).attr('disabled', false);

    } else {

      $(this).attr('disabled', true);
    }
  });
});

var checkResults = function(e) {

  e.preventDefault();
  var rightAnswers = [];

  var getRightAnswers = function() {

    for ( i = 0; i < actualTest.length; i++ ) {

      var testAnswers = actualTest[i].answers;

      for (j = 0; j < testAnswers.length; j++) {

        var currentAnswer = actualTest[i].answers[j].right;
        rightAnswers.push(currentAnswer);

      }
    }
  };

  var givenAnswers = [];

  var getGivenAnswers = function() {


    $inputs.each(function () {

      if ( $(this).prop('checked') ) {

        givenAnswers.push(true);

      } else {

        givenAnswers.push(false);

      }
    });
  };

  var answered = 0;

  var check = function () {

    for (var i = 0; i < rightAnswers.length; i++) {

      if ( rightAnswers[i] === true ) {

        if ( rightAnswers[i] === givenAnswers[i] ) {
          answered++;
        }

      }
    }
  };

  var questionsQuantity = 0;

  var sumQuestions = function () {
    for (var i = 0; i < actualTest.length; i++) {
      questionsQuantity++;
    }

  };

  var passed = 0;
  var testOk= false;

  var testPassed = function () {
    passed = answered /questionsQuantity;
    if ( passed > 0.65 ) {
      testOk = true;
    }
  };

  getRightAnswers();
  console.log('rightAnswers= ', rightAnswers);

  getGivenAnswers();
  console.log('givenAnswers= ', givenAnswers);

  check();
  console.log('answered= ', answered);

  sumQuestions();

  testPassed();
  console.log('passed= ', passed);

  console.log('testOK= ', testOk);



  var modal;
  var $body = $( 'body' );

  if ( testOk ){

    modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">You passed the test</h1><h1 class="text-center">'+
     answered +', from '+ questionsQuantity +'</h1><a class="center-block btn btn-primary" id="exit">Close</a></div></div>');

  } else {

    modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">You didn\'t pass the test</h1><h1 class="text-center">'+
     answered +', from '+ questionsQuantity +'</h1><a class="center-block btn btn-warning" id="exit">Close</a></div></div>');

  }


  $body.append(modal);

  var $exit = $( '#exit' );

  var reset = function() {

    $( 'input:checkbox' ).prop( 'checked', false ).prop( 'disabled', false );
    var $modal = $( '.mymodal' );
    $modal.remove();

    return false;
  };

  $exit.on( 'click', reset );

};

var $checkResults = $( '#checkresult' );
$checkResults.on( 'click', checkResults );

});
