import { useState } from "react";

/* destructuring guideline */
export function destructureGuideline(guideline) {
  const {
    guideline_title: title,
    guideline_source: source,
    guideline_body: body,
    guideline_image: image,
    guideline_note: note,
    guideline_internal_link: internal_link,
    guideline_external_link: external_link,
    locations,
    language,
  } = guideline;
  return {
    title,
    source,
    body,
    image,
    note,
    internal_link,
    external_link,
    locations,
    language,
  };
}

/* destructuring resource */
export function destructureResource(resource) {
  const {
    resource_title: title,
    resource_slug: slug,
    resource_source: source,
    resource_body: body,
    resource_image: image,
    resource_note: note,
    resource_internal_link: internal_link,
    resource_external_link: external_link,
    pricing,
    language,
  } = resource;
  return {
    title,
    slug,
    source,
    body,
    image,
    note,
    internal_link,
    external_link,
    pricing,
    language,
  };
}

export const FilterLocationsWithInfos = (infos, locations) => {
  return locations.map((location) => {
    let filteredInfos = infos.filter(
      (info) => info.locations[0].location_name === location.location_name
    );
    return filteredInfos.length > 0
      ? { location_name: location.location_name, infos: filteredInfos }
      : null;
  });
};
