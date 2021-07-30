// Dirty hack to make apollo:codegen work
export function gql(literals: string | readonly string[], ...args: string[]): string {
  return literals + args.join('');
}
