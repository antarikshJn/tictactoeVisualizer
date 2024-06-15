export const checkWin = (boardInstance) => {
    const winningPatterns = [
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        let checker = true;
        let value;
        for (let j = 0; j < 3; j++) {
            if (j === 0) {
                value = boardInstance[winningPatterns[i][j][0]][winningPatterns[i][j][1]];
            }
            else if (value !== boardInstance[winningPatterns[i][j][0]][winningPatterns[i][j][1]]) {
                checker = false;
                break;
            }
        }
        if (checker && value) {
            return value;
        }
    }
    return null;
}

export const minimax = (newBoard, player, movesCount, memo) => {
    let key = createKey(newBoard, player);

    const BoardChildObj = {
        board: structuredClone(newBoard),
        children: [],
        key: key,
        bestMove: {
            childIndex: null,
            index: null,
            score: null,
        },
        memo: false,
        player: player,
        winner: null,
    }

    if (memo[key]) {
        BoardChildObj.memo = true;
        BoardChildObj.bestMove = memo[key].bestMove;
        return BoardChildObj;
    }

    var availSpots = emptySquares(newBoard);

    const winner = checkWin(newBoard);
    if (winner === "X") {
        BoardChildObj.winner = "X Won";
        BoardChildObj.bestMove.score = -10;
        return BoardChildObj;
    }
    else if (winner === "O") {
        BoardChildObj.winner = "O Won";
        BoardChildObj.bestMove.score = 10;
        return BoardChildObj;
    } else if (availSpots.length === 0) {
        BoardChildObj.winner = "It's a Draw";
        BoardChildObj.bestMove.score = 0;
        return BoardChildObj;
    }

    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = availSpots[i];
        newBoard[availSpots[i][0]][availSpots[i][1]] = player;

        if (player === "O") {
            var result = minimax(structuredClone(newBoard), "X", movesCount, memo);
            BoardChildObj.children.push(result);
            move.score = result.bestMove.score;
        } else {
            var result = minimax(structuredClone(newBoard), "O", movesCount, memo);
            BoardChildObj.children.push(result);
            move.score = result.bestMove.score;
        }

        newBoard[availSpots[i][0]][availSpots[i][1]] = null;

        moves.push(move);
    }

    var bestMove;
    if (player === "O") {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    BoardChildObj.bestMove = moves[bestMove];
    BoardChildObj.bestMove.childIndex = bestMove;
    memo[key] = {
        key: BoardChildObj.key,
        bestMove: BoardChildObj.bestMove,
    }
    return BoardChildObj;
}

const createKey = (newBoard, player) => {
    let str = "";
    for (let i = 0; i < newBoard.length; i++) {
        for (let j = 0; j < newBoard[0].length; j++) {
            if (newBoard[i][j] === "X") str = str.concat('X');
            else if (newBoard[i][j] === "O") str = str.concat('O');
            else str = str.concat('N');
        }
    }
    str = str.concat(player);
    return str;
}

export const emptySquares = (newBoard) => {
    const availSpots = []
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (!newBoard[row][col]) {
                availSpots.push([row, col]);
            }
        }
    }
    return availSpots;
}