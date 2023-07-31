interface Props {
  [key: string]: string | number;
}

export const collectPropsFromElement = (element: Element): Props => {
  const attrs = element.attributes;
  const props: Props = {};

  // collect data attributes from element
  Object.keys(attrs).forEach((key: string) => {
    if (Object.prototype.hasOwnProperty.call(attrs, key)) {
      const attr: Attr = attrs[key as unknown as number];
      if (attr.name.startsWith('data-moba-')) {
        const propName = attr.name.replace(/-([a-z])/gi, (all, letter) => letter.toUpperCase());
        propName && attr.nodeValue && (props[propName] = attr.nodeValue);
      }
    }
  });

  // collect attributes from nested script node
  const script = element.getElementsByTagName('script')[0];
  if (script) {
    try {
      Object.assign(props, JSON.parse(script.innerHTML));
    } catch (e) {
      throw new Error(e);
    }
  }

  // get widget width
  props.dataMobaWidth = element.clientWidth;

  return props;
};
