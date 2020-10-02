import './scss/_style.scss';
import { html, render, TemplateResult } from 'lit-html';

const wrapperElement = document.querySelector('.js-main-content');
const mainTemplate: TemplateResult = html`<div>Hello world!</div>`;

render(mainTemplate, <HTMLElement>wrapperElement);