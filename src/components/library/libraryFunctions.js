/* destructuring guideline */
export function destructureGuideline(guideline) {
  const {
    guideline_title: title,
    guideline_source: source,
    guideline_body: body,
    guideline_image: image,
    guideline_note: note,
    contents_link: internal_link,
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
    contents_link: internal_link,
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
  /* I'm gonna make a comment, cuz this was complicated for me */
  /* first, i make a list with the locations, and for each location,
  it either returns false or it returns an object with the name of 
  the location and a list with the infos.
  Infos = guidelines, resources or links */
  const filtered = locations.map((location) => {
    let filteredInfos = infos.filter(
      (info) => info.locations[0].location_name === location.location_name
    );
    return (
      filteredInfos.length > 0 && {
        location_name: location.location_name,
        infos: filteredInfos,
      }
    );
  });
  /* then from this list i only keep the ones that didn't return false */
  const furtherFiltered = filtered.filter((location) => location !== false);
  return furtherFiltered;
};

// normalize string
export const normalize = (words) => {
  return words.replace(/ /g, "-").toLowerCase();
};
