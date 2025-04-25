import React from "react";
import sidebarData from "../../sidebarData.json";
import "./LocationMap.css";

const LocationMap: React.FC = () => {
  // Filter projects to only include Maraisburg Road and Lismore Avenue (as in the image)
  const mapProjects = sidebarData.projects.filter(
    (project) =>
      !project.isCreateButton &&
      (project.title === "Maraisburg Road" ||
        project.title === "Lismore Avenue")
  );

  return (
    <div className="location-map-container">
      <h2 className="location-map-title">Locations</h2>
      <div className="location-map">
        {/* Static map background with labels */}
        <div className="map-background">
          <span className="map-label industria-west">Industria West</span>
          <span className="map-label crosby">Crosby</span>
          <span className="map-label langlaagte-north">Langlaagte North</span>
          <span className="map-label mayfair-west">Mayfair West</span>
          <span className="map-label longdale">Longdale</span>
          <span className="map-label croesus">Croesus</span>
          <span className="map-label industria">Industria</span>
          <span className="map-label langlaagte">Langlaagte</span>
          <span className="map-label homestead-park">Homestead Park</span>
          <span className="map-label albertina-sisulu-rd">
            Albertina Sisulu Rd
          </span>
        </div>

        {/* Pins and labels for projects */}
        {mapProjects.map((project, index) => (
          <div
            key={index}
            className={`pin ${project.title.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className="pin-icon">🏠</div>
            <span className="pin-label">{project.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationMap;
