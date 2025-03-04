/** @format */

import { openModal, choiceModule, sendNewSolution } from './helpers.js';
import { URL } from '../data/api.js';

const modalSolution = document.querySelector('.modal__add');
const searchSolution = document.querySelector('#select__search');
const btnAddSolution = document.querySelector('.btn__add');
const imgAddSolution = document.getElementById('img__add--solution');
const selectModule = document.querySelector('.select__module');
const inputTitle = document.querySelector('.input__title');
const inputContent = document.querySelector('.input__content');
const btnSend = document.querySelector('.btn__send');

btnAddSolution.addEventListener('click', () => openModal(modalSolution, imgAddSolution));

selectModule.addEventListener('change', e => choiceModule(e));

btnSend.addEventListener('click', () => sendNewSolution(URL, selectModule, inputTitle, inputContent));
