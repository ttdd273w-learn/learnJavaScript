L.mapquest.key = "7iTyL2AWqcIkjqcNy9Sri83OchOjrwBU";

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"), // can change to hybrid, etc
  zoom: 12,
});

map.addControl(L.mapquest.control({ position: "bottomright" }));

L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
