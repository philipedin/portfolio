export default interface Edge<T> {
  node: {
    id: string;
    frontmatter: T;
  }
}