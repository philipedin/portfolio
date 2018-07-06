export default interface Edge<T> {
  node: {
    id: string;
    html: string;
    frontmatter: T;
  }
}