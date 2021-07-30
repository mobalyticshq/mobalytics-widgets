import { h } from 'preact';
import { setup } from 'goober';
import { mountWidgetHostElements } from './entrypoints/widgets-entrypoint';
import { mountTooltipHostElements } from './entrypoints/tooltips-entrypoint';

setup(h);

function mountHostElements() {
  const widgetHosts = document.querySelectorAll('[data-moba-widget]');
  mountWidgetHostElements(widgetHosts);

  const tooltipHosts = document.querySelectorAll('[data-moba-tooltip]');
  mountTooltipHostElements(tooltipHosts);

  if (!document.getElementById('mobalytics-widgets-font')) {
    const link = document.createElement('link');
    link.id = 'mobalytics-widgets-font';
    link.rel = 'preload';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap';
    link.as = 'style';
    link.onload = function () {
      link.onload = null;
      link.rel = 'stylesheet';
    };
    document.head.append(link);
  }
}

document.addEventListener('DOMContentLoaded', mountHostElements);
document.addEventListener('load', mountHostElements);
mountHostElements();
