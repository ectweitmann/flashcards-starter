const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  let card = null;
  let turn = null;
  beforeEach('Create an instance of the Card and Turn', function() {
    card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    turn = new Turn('array', card);
  });

  it.skip('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('array');
  });

  it.skip('should store the current card in play', function() {
    expect(turn.currentCard).to.equal(card);
  });

  it.skip('should be able to return a user\'s guess', function() {
    const guess = turn.returnGuess();

    expect(guess).to.equal('array');
  });

  it.skip('should be able to return the current card', function() {
    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
  });

  it.skip('should be able to evaluate if a user\'s guess matches the correct answer on the card', function() {
    const doesMatch = turn.evaluateGuess();

    expect(doesMatch).to.equal(true);
  });

  it.skip('should be able to evaluate if a user\'s guess does not match the correct answer on the card', function() {
    const doesMatch = turn.evaluateGuess();

    expect(doesMatch).to.equal(false);
  });

  it.skip('should be able to inform a user that their guess is correct', function() {
    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');
  });

  it.skip('should be able to inform a user that their guess is incorrect', function() {
    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('incorrect!');
  });
});
