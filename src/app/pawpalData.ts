export interface ParkProps {
  id: string;
  name: string;
  size: number | string;
  year: number | string;
  area: string;
  district: string;
  coordinates: string;
}

export interface DogProps {
  id: string;
  name: string;
  age: number;
  breed: string | null;
  friends: string[];
  atPark?: string | null;
  image?: string | null;
}

export const pawPalData: { parks: ParkProps[]; dogs: DogProps[] } = {
  parks: [
    {
      id: "park-1",
      name: "Frognerparken",
      size: 467,
      year: "1904 / 1936",
      area: "Frogner",
      district: "Frogner og Ullern",
      coordinates: "59.909132°N 10.748236°E",
    },
    {
      id: "park-2",
      name: "Botanisk hage",
      size: 140,
      year: 1818,
      area: "Tøyen",
      district: "Grünerløkka",
      coordinates: "59.925900°N 10.704813°E",
    },
    {
      id: "park-3",
      name: "Torshovdalen",
      size: 136,
      year: "1939 / 1948",
      area: "Torshov, Rosenhoff",
      district: "Sagene",
      coordinates: "59.917191°N 10.770604°E",
    },
    {
      id: "park-4",
      name: "Tøyenparken",
      size: 93,
      year: "1950s",
      area: "Tøyen",
      district: "Grünerløkka",
      coordinates: "59.917870°N 10.778131°E",
    },
    {
      id: "park-5",
      name: "St. Hanshaugen",
      size: 89,
      year: 1865,
      area: "St. Hanshaugen",
      district: "St. Hanshaugen",
      coordinates: "59.933539°N 10.776813°E",
    },
    {
      id: "park-6",
      name: "Sofienberg Park",
      size: 74,
      year: 1961,
      area: "Sofienberg, Grünerløkka",
      district: "Grünerløkka",
      coordinates: "59.926923°N 10.741251°E",
    },
    {
      id: "park-7",
      name: "Stensparken with Blåsen",
      size: 49,
      year: "1890 / 1943",
      area: "Fagerborg",
      district: "St. Hanshaugen",
      coordinates: "59.922849°N 10.764282°E",
    },
    {
      id: "park-8",
      name: "Marienlystparken",
      size: 45,
      year: "*",
      area: "Marienlyst",
      district: "St. Hanshaugen",
      coordinates: "59.928904°N 10.730752°E",
    },
    {
      id: "park-9",
      name: "Torshovparken",
      size: 41,
      year: 1931,
      area: "Torshov",
      district: "Sagene",
      coordinates: "59.933374°N 10.722390°E",
    },
    {
      id: "park-10",
      name: "Myraløkka",
      size: "around 40",
      year: "around 1960",
      area: "Sagene",
      district: "Sagene",
      coordinates: "59.916315°N 10.765641°E",
    },
    {
      id: "park-11",
      name: "Kampen park",
      size: 39,
      year: 1888,
      area: "Kampen",
      district: "Gamle Oslo",
      coordinates: "59.935130°N 10.770613°E",
    },
    {
      id: "park-12",
      name: "Bjølsenparken",
      size: 33,
      year: "before 1900",
      area: "Bjølsen",
      district: "Sagene",
      coordinates: "59.915271°N 10.780529°E",
    },
    {
      id: "park-13",
      name: "Vålerenga park",
      size: 32,
      year: 1903,
      area: "Vålerenga",
      district: "Gamle Oslo",
      coordinates: "59.940399°N 10.755939°E",
    },
    {
      id: "park-14",
      name: "Middelalderparken",
      size: 30,
      year: 2000,
      area: "Gamlebyen",
      district: "Gamle Oslo",
      coordinates: "59.907041°N 10.787043°E",
    },
    {
      id: "park-15",
      name: "Klosterenga",
      size: 30,
      year: "*",
      area: "Galgeberg",
      district: "Gamle Oslo",
      coordinates: "59.903263°N 10.762374°E",
    },
    {
      id: "park-16",
      name: "Iladalen park",
      size: 26,
      year: 1948,
      area: "Ila",
      district: "Sagene",
      coordinates: "59.931773°N 10.752176°E",
    },
    {
      id: "park-17",
      name: "Uranienborgparken",
      size: 17,
      year: 1904,
      area: "Uranienborg",
      district: "Frogner",
      coordinates: "59.921319°N 10.721064°E",
    },
    {
      id: "park-18",
      name: "Birkelunden",
      size: 17,
      year: "1882 / 1916",
      area: "Grünerløkka",
      district: "Grünerløkka",
      coordinates: "59.921319°N 10.721064°E",
    },
    {
      id: "park-19",
      name: "Grønlands park and Botsparken",
      size: 15,
      year: "1917 / 1924",
      area: "Grønland",
      district: "Gamle Oslo",
      coordinates: "59.926005°N 10.760296°E",
    },
    {
      id: "park-20",
      name: "Hasleparken",
      size: 14,
      year: "*",
      area: "Hasle",
      district: "Grünerløkka",
      coordinates: "59.920978°N 10.783164°E",
    },
    {
      id: "park-21",
      name: "Ruinparken (Minneparken)",
      size: 14,
      year: "1872 / 1932",
      area: "Gamlebyen",
      district: "Gamle Oslo",
      coordinates: "59.920978°N 10.783164°E",
    },
    {
      id: "park-22",
      name: "Hallénparken",
      size: 13,
      year: "*",
      area: "Dælenenga / Torshov",
      district: "Grünerløkka",
      coordinates: "59.906206°N 10.768855°E",
    },
    {
      id: "park-23",
      name: "Grünerhagen",
      size: 12,
      year: "1700-t. / 1950",
      area: "Grünerløkka",
      district: "Grünerløkka",
      coordinates: "59.930832°N 10.763249°E",
    },
    {
      id: "park-24",
      name: "Idioten",
      size: 12,
      year: 1930,
      area: "Valleløkken, Adamstuen",
      district: "St. Hanshaugen",
      coordinates: "59.921964°N 10.755076°E",
    },
    {
      id: "park-25",
      name: "Olaf Ryes plass",
      size: 10,
      year: "1888 / 1928",
      area: "Grünerløkka",
      district: "Grünerløkka",
      coordinates: "59.930993°N 10.737096°E",
    },
    {
      id: "park-26",
      name: "Rudolf Nilsens plass",
      size: 9,
      year: "1927 / 1999",
      area: "Tøyen",
      district: "Gamle Oslo",
      coordinates: "59.922818°N 10.758460°E",
    },
    {
      id: "park-27",
      name: "Sinsenparken",
      size: 8.5,
      year: "",
      area: "Sinsen",
      district: "Grünerløkka",
      coordinates: "59.5559°N 10.4782068°E",
    },
    {
      id: "park-28",
      name: "Framneshaven (Tinker'n)",
      size: 8,
      year: 1993,
      area: "Skillebekk",
      district: "Frogner",
      coordinates: "59.936506°N 10.757574°E",
    },
    {
      id: "park-29",
      name: "Gråbeinsletta",
      size: 7,
      year: 1922,
      area: "Sagene",
      district: "Sagene",
      coordinates: "59.937786°N 10.751809°E",
    },
    {
      id: "park-30",
      name: "Skarpsnoparken",
      size: 7,
      year: 1934,
      area: "Skarpsno",
      district: "Frogner",
      coordinates: "59.937786°N 10.751809°E",
    },
    {
      id: "park-31",
      name: "Alexander Kiellands plass",
      size: 7,
      year: "1927 / 2001",
      area: "Ila",
      district: "Grünerløkka",
      coordinates: "59.914929°N 10.700262°E",
    },
    {
      id: "park-32",
      name: "Kristparken",
      size: 7,
      year: 1964,
      area: "St. Hanshaugen",
      district: "St. Hanshaugen",
      coordinates: "59.927400°N 10.750551°E",
    },
    {
      id: "park-33",
      name: "Schous plass",
      size: 6,
      year: 1916,
      area: "Grünerløkka",
      district: "Grünerløkka",
      coordinates: "59.917460°N 10.748616°E",
    },
    {
      id: "park-34",
      name: "Langgaardsløkken",
      size: 6,
      year: 1930,
      area: "Briskeby",
      district: "Frogner",
      coordinates: "59.920492°N 10.760262°E",
    },
    {
      id: "park-35",
      name: "Hydroparken",
      size: 5,
      year: 1960,
      area: "Frogner",
      district: "Frogner",
      coordinates: "59.922871°N 10.715319°E",
    },
    {
      id: "park-36",
      name: "Amaldus Nielsens plass (Vestkanttorget)",
      size: 5,
      year: 1930,
      area: "Frogner",
      district: "Frogner",
      coordinates: "59.914553°N 10.715935°E",
    },
    {
      id: "park-37",
      name: "Sommerfrydhagen",
      size: 4,
      year: 1995,
      area: "Tøyen",
      district: "Gamle Oslo",
      coordinates: "59.924057°N 10.713881°E",
    },
    {
      id: "park-38",
      name: "Svartdalsparken",
      size: "*",
      year: "1930s",
      area: "Svartdalen",
      district: "Gamle Oslo",
      coordinates: "59.911738°N 10.776487°E",
    },
    {
      id: "park-39",
      name: "Evald Ryghs plass",
      size: 4,
      year: 1931,
      area: "Ila",
      district: "St. Hanshaugen",
      coordinates: "59.904479°N 10.792130°E",
    },
    {
      id: "park-40",
      name: "Bülow Hanssens plass",
      size: 4,
      year: 1939,
      area: "Carl Berner",
      district: "Grünerløkka",
      coordinates: "59.929289°N 10.747371°E",
    },
    {
      id: "park-41",
      name: "Kværnerparken",
      size: 3.5,
      year: 1922,
      area: "Enebakkveien",
      district: "Gamle Oslo",
      coordinates: "59.54949°N 10.4734°E",
    },
    {
      id: "park-42",
      name: "Frøyas have",
      size: "*",
      year: 1994,
      area: "Skarpsno",
      district: "Frogner",
      coordinates: "59.926808°N 10.775930°E",
    },
    {
      id: "park-43",
      name: "Akersveien (Akersbakken)",
      size: 2,
      year: 1869,
      area: "Gamle Aker",
      district: "St. Hanshaugen",
      coordinates: "59.916051°N 10.695710°E",
    },
    {
      id: "park-44",
      name: "Ankerhagen",
      size: 2,
      year: "1921 / 1985",
      area: "Ruseløkka",
      district: "Frogner",
      coordinates: "59.913066°N 10.721056°E",
    },
    {
      id: "park-45",
      name: "Josefines park",
      size: 1,
      year: "*",
      area: "Homansbyen",
      district: "Frogner",
      coordinates: "59.913066°N 10.721056°E",
    },
  ],
  dogs: [
    {
      id: "dog-1",
      name: "Buddy",
      age: 3,
      breed: "Golden Retriever",
      friends: ["dog-2", "dog-4", "dog-5", "alfa-bish"],
      atPark: "park-12",
    },
    {
      id: "dog-2",
      name: "Luna",
      age: 2,
      breed: "Labrador",
      friends: ["dog-1", "dog-3"],
      atPark: "park-20",
    },
    {
      id: "dog-3",
      name: "Max",
      age: 4,
      breed: "Bulldog",
      friends: ["dog-2", "dog-6", "dog-7"],
      atPark: "park-5",
    },
    {
      id: "dog-4",
      name: "Bella",
      age: 5,
      breed: "Beagle",
      friends: ["dog-1", "alfa-bish"],
      atPark: "park-10",
    },
    {
      id: "dog-5",
      name: "Charlie",
      age: 3,
      breed: null,
      friends: ["dog-1", "dog-6"],
      atPark: "park-3",
    },
    {
      id: "dog-6",
      name: "Rocky",
      age: 6,
      breed: "German Shepherd",
      friends: ["dog-3", "dog-5"],
      atPark: "park-2",
    },
    {
      id: "dog-7",
      name: "Coco",
      age: 2,
      breed: "Poodle",
      friends: ["dog-3", "alfa-bish"],
      atPark: "park-1",
    },
    {
      id: "dog-8",
      name: "Daisy",
      age: 1,
      breed: "Shih Tzu",
      friends: [],
      atPark: "park-1",
    },
    {
      id: "dog-9",
      name: "Rex",
      age: 5,
      breed: "Rottweiler",
      friends: ["dog-10"],
      atPark: "park-25",
    },
    {
      id: "dog-10",
      name: "Milo",
      age: 4,
      breed: null,
      friends: ["dog-9"],
      atPark: "park-18",
    },
    {
      id: "dog-11",
      name: "Zoe",
      age: 3,
      breed: "Border Collie",
      friends: ["dog-12"],
      atPark: "park-13",
    },
    {
      id: "dog-12",
      name: "Leo",
      age: 4,
      breed: "Dalmatian",
      friends: ["dog-11", "dog-13"],
      atPark: "park-7",
    },
    {
      id: "dog-13",
      name: "Chase",
      age: 2,
      breed: null,
      friends: ["dog-12"],
      atPark: "park-28",
    },
    {
      id: "dog-14",
      name: "Maggie",
      age: 6,
      breed: "Chihuahua",
      friends: [],
      atPark: null,
    },
    {
      id: "dog-15",
      name: "Scout",
      age: 5,
      breed: "Cocker Spaniel",
      friends: ["dog-16", "dog-17"],
      atPark: null,
    },
    {
      id: "dog-16",
      name: "Finn",
      age: 3,
      breed: "Husky",
      friends: ["dog-15"],
      atPark: "park-30",
    },
    {
      id: "dog-17",
      name: "Bailey",
      age: 2,
      breed: "Mastiff",
      friends: ["dog-15"],
      atPark: "park-22",
    },
    {
      id: "dog-18",
      name: "Ruby",
      age: 1,
      breed: "Australian Shepherd",
      friends: [],
      atPark: "park-33",
    },
    {
      id: "dog-19",
      name: "Jack",
      age: 4,
      breed: null,
      friends: ["dog-20"],
      atPark: "park-11",
    },
    {
      id: "dog-20",
      name: "Sadie",
      age: 3,
      breed: "Boxer",
      friends: ["dog-19"],
      atPark: "park-40",
    },
    {
      id: "dog-21",
      name: "Kira",
      age: 10,
      breed: "Border Collie",
      friends: ["dog-1", "dog-22", "alfa-bish"],
      atPark: "park-2",
    },
    {
      id: "dog-22",
      name: "Liucifer",
      age: 4,
      breed: "Samoyed",
      friends: ["dog-21", "dog-2", "alfa-bish"],
      atPark: "park-2",
    },
  ],
};

export const reasonsTheOtherDogIsAShithead = [
  "they farted in your face",
  "they didn't share their stick",
  "they peed on your favorite tree",
  "they didn't like your breath",
  "they stole your ball",
  "you got too exited and booped them too hard",
  "they got treats from your human",
  "they didn't like my toy",
  "they started humping your favorite tree",
];
