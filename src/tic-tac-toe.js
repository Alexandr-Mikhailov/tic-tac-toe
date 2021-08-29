class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) { 
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.playerSymbol;

            if (this.playerSymbol == 'x') {
                this.playerSymbol = 'o';
            } else {
                this.playerSymbol = 'x';
           }
        }
    }

    isFinished() {
        if (this.isDraw()) {
            return true;
        } else if (this.getWinner()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let checkPlayer;
        if (this.playerSymbol == 'x') {
            checkPlayer = 'ooo';
        } else {
            checkPlayer = 'xxx';
        }
        if (this.field[0][0] + this.field[0][1] + this.field[0][2] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[1][0] + this.field[1][1] + this.field[1][2] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[2][0] + this.field[2][1] + this.field[2][2] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[0][0] + this.field[1][1] + this.field[2][2] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[2][0] + this.field[1][1] + this.field[0][2] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[0][0] + this.field[1][0] + this.field[2][0] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[0][1] + this.field[1][1] + this.field[2][1] == checkPlayer) {
            return checkPlayer[0];
        } else if (this.field[0][2] + this.field[1][2] + this.field[2][2] == checkPlayer) {
            return checkPlayer[0];
        } else {
            return null;
        }
    }

    noMoreTurns() {
        return !this.field.flat().includes(null);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
