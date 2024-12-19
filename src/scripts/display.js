import { Player } from './player';

const body = document.querySelector('body');
const board = document.createElement('div');
board.classList.add('board');
body.appendChild(board);

buildBoard();
populateBoard(new Player());

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

function populateBoard(player) {
    const board = player.board.board;
    console.log(board);
}
