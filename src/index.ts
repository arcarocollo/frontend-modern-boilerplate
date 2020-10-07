import { html, render, TemplateResult } from 'lit-html';
import './scss/style.scss';
import HelloWorld from './images/hello_world.png';


const wrapperElement = document.querySelector('.js-main-content');
const footerElement = document.querySelector('.js-footer');

const mainTemplate: TemplateResult = html`
  <div class="dummy-container">
    <h1 class="dummy-title">
      Frontend Modern Boilerplate
    </h1>
    <img class="dummy-image" src=${HelloWorld}>
  </div>`;

const footerTemplate: TemplateResult = html`
  <a href="https://github.com/farcari" target="_blank">
    <span class="icon icon-github"></span> @farcari
  </a>
  <a href="https://twitter.com/fabio_arcari" target="_blank">
    <span class="icon icon-twitter"></span> @fabio_arcari
  </a>`;

render(mainTemplate, <HTMLElement>wrapperElement);
render(footerTemplate, <HTMLElement>footerElement);