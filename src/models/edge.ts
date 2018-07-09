export default interface IEdge<T> {
  node: {
    id: string;
    html: string;
    frontmatter: T;
  };
}
