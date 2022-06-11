export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BAM",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["sve", ...new Set(unique)];
};

export const categoryTranslator = (value) => {
  if (value === "office") {
    return "ured";
  }
  if (value === "living room") {
    return "dnevna soba";
  }
  if (value === "kitchen") {
    return "kuhinja";
  }
  if (value === "bedroom") {
    return "spavaca soba";
  }
  if (value === "dining") {
    return "trpezarija";
  }
  if (value === "kids") {
    return "djecija soba";
  }
  return value;
};
export const categoryReverseTranslator = (value) => {
  if (value === "ured") {
    return "office";
  }
  if (value === "dnevna soba") {
    return "living room";
  }
  if (value === "kuhinja") {
    return "kitchen";
  }
  if (value === "spavaca soba") {
    return "bedroom";
  }
  if (value === "trpezarija") {
    return "dining";
  }
  if (value === "djecija soba") {
    return "kids";
  }
  return value;
};
export const productNameTranslator = (value) => {
  if (value === "modern poster") {
    return "moderni poster";
  }
  if (value === "bar stool") {
    return "barska stolica";
  }
  if (value === "armchair") {
    return "fotelja";
  }
  if (value === "suede armchair") {
    return "antilop fotelja";
  }
  if (value === "leather chair") {
    return "kozna stolica";
  }
  if (value === "emperor bed") {
    return "kraljevski krevet";
  }
  if (value === "accent chair") {
    return "akcentna stolica";
  }
  if (value === "shelf") {
    return "polica";
  }
  if (value === "modern bookshelf") {
    return "moderna polica za knjige";
  }
  if (value === "high-back bench") {
    return "stolica sa visokim ledjima";
  }
  if (value === "wooden desk") {
    return "drveni sto";
  }
  if (value === "dining table") {
    return "sto za rucavanje";
  }
  if (value === "entertainment center") {
    return "centar za razonodu";
  }
  if (value === "utopia sofa") {
    return "utopia sofa";
  }
  if (value === "leather sofa") {
    return "kozna sofa";
  }
  if (value === "albany sectional") {
    return "veliki kauc";
  }
  if (value === "simple chair") {
    return "visoka stolica";
  }
  if (value === "vase table") {
    return "sto za vazu";
  }
  if (value === "sofa set") {
    return "sofa set";
  }
  if (value === "wooden desk") {
    return "drveni radni sto";
  }
  if (value === "wooden table") {
    return "drveni sto";
  }
  if (value === "wooden bed") {
    return "drveni krevet";
  }
  if (value === "albany table") {
    return "mali sto";
  }
};
