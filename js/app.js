/** @format */

import { openModal, choiceModule, sendNewSolution, getSolutions } from './helpers.js';
import { URL } from '../data/api.js';

const modalSolution = document.querySelector('.modal__add');
const searchSolution = document.querySelector('#select__search');
const btnAddSolution = document.querySelector('.btn__add');
const imgAddSolution = document.getElementById('img__add--solution');
const selectModule = document.querySelector('.select__module');
const inputTitle = document.querySelector('.input__title');
const inputContent = document.querySelector('.input__content');
const inputSearch = document.querySelector('.input__search');
const btnSend = document.querySelector('.btn__send');

btnAddSolution.addEventListener('click', () => openModal(modalSolution, imgAddSolution));

selectModule.addEventListener('change', e => choiceModule(e));

searchSolution.addEventListener('change', () => getSolutions(URL, searchSolution));

btnSend.addEventListener('click', () => sendNewSolution(URL, selectModule, inputTitle, inputContent));
