const allowedTags = ['li', 'br', 'div', 'span', 'i', 'a', 'font'];

/**
 * Replaces tags like rarityMythic to raritymythic, camle case tags are not stylable
 * @param markdown
 */
export function processCustomHtmlTags(markdown: string): string {
  return markdown.replace(
    /<(\/?)([a-z-]+)([\s>])/gi,
    (match: string, closeTagSymbol: string, tagName: string, closeMatchSymbol) => {
      if (!allowedTags.includes(tagName)) {
        return closeTagSymbol ? `</div${closeMatchSymbol}` : `<div class="custom ${tagName}"${closeMatchSymbol}`;
      }
      return match;
    }
  );
}
