import { Player } from './player';

const body = document.querySelector('body');
const board = document.createElement('div');
board.classList.add('board');
body.appendChild(board);

buildBoard();
const player = new Player();
player.board.randomizeBoard();
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

    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.hit = false;
    cell.dataset.ship = false;

    cell.addEventListener('click', () => {
        attackCell(cell);
    });

    return cell;
}

function attackCell(cell) {
    cell.dataset.hit = true;
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

function resetBoard() {
    const cells = document.querySelectorAll(`.board .cell`);

    for (let cell of cells) {
        cell.dataset.hit = false;
        cell.dataset.ship = false;
    }
}
