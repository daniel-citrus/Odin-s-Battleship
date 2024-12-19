import { Player } from './player';

const body = document.querySelector('body');
const board = document.createElement('div');
board.classList.add('board');
body.appendChild(board);

buildBoard();
const player = new Player();
player.board.addShip(2, 3, 0, 'vertical');

populateBoard(player.board.board);

function buildBoard(dim = 10) {
    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            board.appendChild(buildCell(row, col));
        }
    }
}

function buildCell(x, y) {
    const cell = document.createElement('div');

    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.hit = false;

    return cell;
}

function populateBoard(board) {
    for (let row in board) {
        for (let col in board) {
            if (!board[row][col].ship) {
                continue;
            }

            const ship = board[row][col].ship;
            const cell = document.querySelector(
                `.board div[data-x='${row}'][data-y='${col}']`
            );

            cell.dataset.ship = ship.name;
        }
    }
}
