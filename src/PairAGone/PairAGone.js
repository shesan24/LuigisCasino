import React, { Component } from 'react';
import { PairCard } from './PairCard';
import { PopUp, OutCoinWindow, RuleWindow} from './PopUp';
import ReactCountdownClock from 'react-countdown-clock';
import { ToastContainer, toast } from 'react-toastify';

import coin from './../../assets/coin.png';
import medal from './../../assets/medal.png';
import './../../css/pairAGone/PairAGone.css';
import 'react-toastify/dist/ReactToastify.css';

class PairAGone extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            numCard: 20,
            coin: props.coin,
            score: 0,
            timer: 0,

            gameState: false,
            isRuleWindow: true,
            isOutCoinWindow: false,
            timeUp: false,

            previousSelectCardId: null,
            previousSelectCardValue: null,
            previousSelectCardName: null,

        }
        this.coin = props.coin;
        this.score = 0;
        this.board = [];
        this.isPlaceBet = false;
        this.timeout = 20000;
    }


    // handle start game click
    handleStartGameClick = () => {
        if (this.isPlaceBet) {
            this.setState({isRuleWindow: false, gameState: true});
            this.initGame();
            this.isPlaceBet = false;
        }
        else {
            this.betNotPlaced();
        }
    }

    // hanle replay the game
    handleReplay = () => {
        this.handlePlaceBet();
        if (this.isPlaceBet) {
            this.score = 0;
            this.setState({score : 0, gameState: true, timeUp: false})
            this.initGame();
            this.isPlaceBet = false;
        }
        else {
            this.betNotPlaced();
        }
    }

    // handle the place bet
    handlePlaceBet = () => {
        // if run out of coin, pop up the exit game window
        if (this.state.coin == 0) {
            this.setState({isOutCoinWindow: true, isRuleWindow: false, timeUp:false});
        }
        // else place one bet
        else {
            this.coin = this.coin - 1;
            this.isPlaceBet = true;
            this.setState({coin: this.coin});
            this.betPlaced();
        }

    }

    // notification: bet is not placed
    betNotPlaced = () => toast.error("Please place a bet!")

    // notification: bet is placed
    betPlaced = () => toast.info("You have placed 1 coin 💰!")

    // create a deck with 20 cards.
    initGame = () => {
        // create a deck
        var cardList = [];
        var cardName = 1;
        for (var i = 0; i < this.state.numCard; i++) {
            cardList.push({name: cardName, value: i, onChange: this.onUpdateDeck, display:true, id: 0, isFocused: false, row:0, column:0})
            var j = i+1
            if(j % 4 == 0) {
              cardName++;
            }
        }
        cardList = this.shuffle(cardList);
        
        var row = 0
        var column = 0
        for (var i = 0; i < this.state.numCard; i++) {
            cardList[i].id = i
            cardList[i].row = row
            cardList[i].column = column

            if (column == 4) {
                row++;
                column = 0;
            }
            else {
                column ++;
            }
        }
        this.board = cardList;
        this.setState({deck: cardList});
        // set a game timer
        setTimeout(() => {this.setState({ timeUp:true , gameState:false})}, this.timeout);
    }

    // shuffle deck 
    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 != currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    onUpdateDeck = (event) => {
        // handle the click effect
        if (this.board[event.currentTarget.id].isFocused === true) {
            this.board[event.currentTarget.id].isFocused = false;
            this.setState({deck:this.board});

        } else {
            this.board[event.currentTarget.id].isFocused = true;
            this.setState({deck:this.board});
        }

        // first select card
        if (this.state.previousSelectCardValue == null) {
            this.setState({
                previousSelectCardId : event.currentTarget.id,
                previousSelectCardName : event.currentTarget.name,
                previousSelectCardValue : event.currentTarget.value,
            })
        }
        // second select card and find a pair
        else if (this.state.previousSelectCardName == event.currentTarget.name && this.state.previousSelectCardValue != event.currentTarget.value && this.isAdjacent(this.board, parseInt(this.state.previousSelectCardId), parseInt(event.currentTarget.id))){
            // remove the two cards
            var index = parseInt(event.currentTarget.id);
            this.setState((state)=> {
                const deck = state.deck;
                deck[state.previousSelectCardId].display = false;
                deck[index].display = false;
                return deck;
            });
            // adjust the card position
            this.board = this.shiftDeck(this.board, this.state.previousSelectCardId, event.currentTarget.id);
            //this.setState({deck: this.board});
            this.setState({
                previousSelectCardId : null,
                previousSelectCardName : null,
                previousSelectCardValue : null
            });
            // add score
            this.score = this.score + 2;
            this.setState({score : this.score});
        }
        else {
            // handle the click effect
            this.board[this.state.previousSelectCardId].isFocused = false;
            this.board[event.currentTarget.id].isFocused = false;

            this.setState({
                deck: this.board,
                previousSelectCardId : null,
                previousSelectCardName : null,
                previousSelectCardValue : null
            });
        }
    }


    // adjust the card position
    shiftDeck = (shiftDeck, preIndex, curIndex) => {
        const updateShiftDeck = shiftDeck;

        // set the previous select card to -100
        updateShiftDeck[preIndex].row = -100;
        updateShiftDeck[preIndex].column = -100;
        // shift the rest of the card
        for (var card = parseInt(preIndex) + 1; card < 20; card ++) {
            // move every thing that is not in the first column
            if (updateShiftDeck[card].column != 0) {
                updateShiftDeck[card].column --;
                // console.log("id : " + updateShiftDeck[card].id + "name : " + updateShiftDeck[card].name);
            }

            // move every thing that is in the first column but not first row
            else if (updateShiftDeck[card].column == 0 && updateShiftDeck[card].row != 0) {
                updateShiftDeck[card].column = 4;
                updateShiftDeck[card].row--;
            }
        }

        // set the current select card to -100
        updateShiftDeck[curIndex].row = -100;
        updateShiftDeck[curIndex].column = -100;

        // shift the rest of the card
        for (var card = parseInt(curIndex) + 1; card < 20; card ++) {
            // move every thing that is not in the first column
            if (updateShiftDeck[card].column != 0) {
                updateShiftDeck[card].column --;
                // console.log("id : " + updateShiftDeck[card].id + "name : " + updateShiftDeck[card].name);
            }

            // move every thing that is in the first column but not first row
            else if (updateShiftDeck[card].column == 0 && updateShiftDeck[card].row != 0) {
                updateShiftDeck[card].column = 4;
                updateShiftDeck[card].row--;
            }
        }
        this.board = updateShiftDeck;
        return updateShiftDeck;
    }


    //create a board to detect adjacent 
    isAdjacent = (board, preIndex, curIndex) => {
        // case one: two card are adjacent in the same row
        console.log("previous select column : " + board[preIndex].column + " , current select column : " + board[curIndex].column);
        console.log("previous select row : " + board[preIndex].row + " , current select row : " + board[curIndex].row);
        if (board[preIndex].row == board[curIndex].row) {
            if (board[preIndex].column == board[curIndex].column -1 || board[preIndex].column == board[curIndex].column + 1){
                return true;
            }
            else {
                return false;
            }
        }

        // case two: two card are adjacent in the same column
        else if ( board[preIndex].row == board[curIndex].row -1 || board[preIndex].row == board[curIndex].row + 1) {
            if (board[preIndex].column == board[curIndex].column) {
                return true;
            }
            // case three: two card are in diagone
            else if (board[preIndex].column == board[curIndex].column -1 || board[preIndex].column == board[curIndex].column + 1) {
                return true;
            }
            else {
                return false;
            }
        }
        else{
            return false;
        }

    }

    render() {
        return (
            <div className="pair-view-body">
                <ToastContainer />
                <div>
                    {this.state.timeUp && 
                        <PopUp
                            handleReplay={this.handleReplay}
                            score={this.state.score}
                        />
                    }
                    {this.state.isRuleWindow &&
                        <RuleWindow/>
                    }
                    {this.state.isOutCoinWindow && 
                        <OutCoinWindow/>
                    }
                </div>
                <div>
                    {this.state.gameState && <ReactCountdownClock
                        seconds={20}
                        color="#000"
                        alpha={0.9}
                        size={100}
                        // onComplete={myCallback}
                    />}
                </div>
                <div className="pair-view-container">
                    <div className="pair-board-container">
                        {this.state.deck.length > 0 && this.state.deck.map((card) => {
                            if (card != undefined && card.display != false) {
                                return(
                                    <PairCard 
                                      name={card.name}
                                      value={card.value}
                                      onChange={card.onChange}
                                      id={card.id}
                                      isFocused={card.isFocused}
                                    />
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <div className="pair-gameMenu-container">
                    <div className="pair-coin-div">
                        <img className="pair-coin" src={coin}></img> {this.state.coin}
                    </div>
                    <button className="pair-btn pair-bet" onClick={this.handleStartGameClick}>
                        Start
                    </button>
                    <button className="pair-btn pair-bet" onClick={this.handlePlaceBet}>
                        place bet
                    </button>
                    <div className="pair-score-div">
                        <img className="pair-medal" src={medal}/> {this.state.score}
                    </div>
                </div>
            </div>
          );
        }
}

export default PairAGone;