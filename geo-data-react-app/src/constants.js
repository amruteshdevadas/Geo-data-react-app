export const DummySpatialData = {
  points: [
    { id: 1, lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { id: 2, lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
  ],
  polygons: [
    {
      id: 1,
      coordinates: [
        [37.782, -122.447],
        [37.789, -122.417],
        [37.76, -122.426],
        [37.782, -122.447],
      ],
      name: "Golden Gate Park",
    },
  ],
  multipolygons: [
    {
      id: 1,
      coordinates: [
        [
          [37.792, -122.447],
          [37.799, -122.417],
          [37.77, -122.426],
          [37.792, -122.447],
        ],
        [
          [37.762, -122.457],
          [37.769, -122.427],
          [37.74, -122.436],
          [37.762, -122.457],
        ],
      ],
      name: "Presidio Area",
    },
  ],
};

export const pointsData = [
  { id: 1, lat: 37.7749, lng: -122.4194, name: "San Francisco" },
  { id: 2, lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
];

// Simulated polygon data
export const polygonsData = [
  {
    id: 1,
    coordinates: [
      [37.782, -122.447],
      [37.789, -122.417],
      [37.76, -122.426],
      [37.782, -122.447],
    ],
    name: "Golden Gate Park",
  },
];

// Simulated multipolygon data
export const multipolygonsData = [
  {
    id: 1,
    coordinates: [
      [
        [37.792, -122.447],
        [37.799, -122.417],
        [37.77, -122.426],
        [37.792, -122.447],
      ],
      [
        [37.762, -122.457],
        [37.769, -122.427],
        [37.74, -122.436],
        [37.762, -122.457],
      ],
    ],
    name: "Presidio Area",
  },
];
