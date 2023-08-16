import links from "../data/links.json";
const documentationLinks = links.filter(m => m.category === "Documentation");

export const PageDocumentation = () => {
  return /*html*/ `
    <div class="page pageDocumentation">
    <p>There are ${documentationLinks.length}</p>
    ${documentationLinks.map(link => {
      return /*html*/ `
      <div>
        nnn
      </div>
      `
    }).join("")}
</div>      
`;
};
