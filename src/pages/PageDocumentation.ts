import links from "../data/links.json";
const documentationLinks = links.filter((m) => m.category === "Documentation");

export const PageDocumentation = () => {
  return /*html*/ `
    <div class="page pageDocumentation">
    <p class="">There are ${documentationLinks.length}</p>
    ${documentationLinks
      .map((link) => {
        return /*html*/ `
      <div>
        <div><a href="${link.url}" target="_blank" class="">${link.title}</a></div>

      </div>
      `;
      })
      .join("")}
</div>      
`;
};
