import { h } from 'preact';
import { setup } from 'goober';
import { mountWidgetHostElements } from './entrypoints/widgets-entrypoint';
import { mountTooltipHostElements } from './entrypoints/tooltips-entrypoint';

setup(h);

function genFontLink(href: string, id: string){
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'preload';
  link.href = href;
  link.as = 'style';
  link.onload = function () {
    link.onload = null;
    link.rel = 'stylesheet';
  };
  return link;
}

function mountHostElements() {
  const widgetHosts = document.querySelectorAll('[data-moba-widget]');
  mountWidgetHostElements(widgetHosts);

  const tooltipHosts = document.querySelectorAll('[data-moba-tooltip]');
  mountTooltipHostElements(tooltipHosts);

  const isRobotoConnected = !!document.getElementById('mobalytics-widgets-roboto-font');
  const isOswaldConnected = !!document.getElementById('mobalytics-widgets-oswald-font');
  const isMobaTooltipDetected = !!document.querySelectorAll("[data-moba-tooltip='lol-champion-tooltip']")?.length;

  if (!isRobotoConnected) {
    const robotoLink = genFontLink('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap', 'mobalytics-widgets-roboto-font');
    document.head.append(robotoLink);
  }

  if (!isOswaldConnected && isMobaTooltipDetected) {
    const oswaldLink = genFontLink('https://fonts.googleapis.com/css?family=Oswald:400&display=swap', 'mobalytics-widgets-oswald-font');
    document.head.append(oswaldLink);
  }
}

document.addEventListener('DOMContentLoaded', mountHostElements);
document.addEventListener('load', mountHostElements);
mountHostElements();
