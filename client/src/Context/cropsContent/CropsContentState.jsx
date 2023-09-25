import CropsContentContext from "./CropsContentContext";

import cornImg from "../../assets/summer/corn.jpg";
import cucumber from "../../assets/summer/cucumber.jpg";
import pepper from "../../assets/summer/pepper.jpg";
import pumpkin from "../../assets/summer/pumpkin.jpg";
import summer_sun from "../../assets/summer/summer_sun.jpg";
import watermelon_summer from "../../assets/summer/watermelon_summer.jpg";

import broccoli from "../../assets/autumn/broccoli.jpg";
import carrot from "../../assets/autumn/carrot.jpg";
import cauliflower from "../../assets/autumn/cauliflower.jpg";
import kale from "../../assets/autumn/kale.jpg";
import Lettuce from "../../assets/autumn/Lettuce.jpg";
import spinach from "../../assets/autumn/spinach.jpg";

import black_gram from "../../assets/monsoon/black_gram.jpg";
import pigeon_pea from "../../assets/monsoon/pigeon_pea.jpg";
import sesame from "../../assets/monsoon/sesame.jpg";
import soybean from "../../assets/monsoon/soybean.jpg";
import sugarcane from "../../assets/monsoon/sugarcane.jpg";
import tea from "../../assets/monsoon/tea.jpg";

import beet from "../../assets/pre_winter/beet.jpg";
import garlic from "../../assets/pre_winter/garlic.jpg";
import methi from "../../assets/pre_winter/methi.jpg";
import onion from "../../assets/pre_winter/onion.jpg";
import radish from "../../assets/pre_winter/radish.jpg";
import spinachPreWinter from "../../assets/pre_winter/spinach.jpg";

import Asparagus from "../../assets/spring/Asparagus.jpg";
import ladyfinger from "../../assets/spring/ladyfinger.jpg";
import mango from "../../assets/spring/mango.jpg";
import swiss from "../../assets/spring/swiss.jpg";
import tomato from "../../assets/spring/tomato.jpg";
import Zucchini from "../../assets/spring/Zucchini.jpg";

import Brussels_Sprouts from "../../assets/winter/Brussels_Sprouts.jpg";
import cotton_winter from "../../assets/winter/cotton_winter.jpg";
import mustard_winter from "../../assets/winter/mustard_winter.jpg";
import peas_winter from "../../assets/winter/peas_winter.png";
import wheat from "../../assets/winter/wheat.jpg";
import { useState } from "react";

const CropsContentState = (props) => {
  const Summer = [
    {
      id: 1,
      name: "Corn",
      description:
        "Corn, also known as maize, is a widely cultivated cereal grain that originated in the Americas. It is characterized by tall, slender plants with large leaves and produces ears containing rows of kernels. Corn is a staple food in many parts of the world and is used in various culinary applications, including as a source of flour, oil, and animal feed.",
      imageName: cornImg,
      startMonth: "March",
      endMonth: "May",
      education: [
        {
          heading: "Origin, Distribution, and Uses:",
          paraGraph:
            "Corn, scientifically known as Zea mays, is believed to have originated in southern Mexico around 7000 years ago.It spread throughout the Americas and has become one of the most widely cultivated cereal crops in the world.Corn is a staple food in many countries and is also used in various industrial products like corn syrup, corn oil, and cornstarch.",
        },
        {
          heading: "Area, Production, and Productivity:",
          paraGraph:
            "Corn is grown in numerous countries around the world, with the United States, China, Brazil, and Argentina being the leading producers. In 2019, global production of corn was approximately 1.1 billion metric tons.",
        },
      ],
      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Corn is a warm-season crop and requires temperatures between 60-95°F (15-35°C) for optimal growth.It is sensitive to frost, so it is important to plant after the last frost date in your area.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Corn can grow in a wide range of soil types, but it thrives in well-drained loamy soils with a pH of 5.8-7.0. ",
        },
        {
          heading: "Varieties of Corn:",
          paraGraph:
            "Dent Corn: Used primarily for livestock feed and industrial purposes.Sweet Corn: Consumed as a vegetable, it is harvested in the milk stage when kernels are still tender. Flint Corn: Known for its hard outer layer, it is used for decorations, grinding into cornmeal, and livestock feed. Popcorn: This variety pops when heated due to its unique moisture content. ",
        },
      ],
    },
    {
      id: 2,
      name: "Cucumber",
      imageName: cucumber,
      startMonth: "April",
      endMonth: "June",
    },
    {
      id: 3,
      name: "Pepper",
      imageName: pepper,
      startMonth: "April",
      endMonth: "May",
    },
    {
      id: 4,
      name: "Pumpkin",
      imageName: pumpkin,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 5,
      name: "watermelon",
      imageName: watermelon_summer,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 6,
      name: "summer",
      imageName: summer_sun,
      startMonth: "March",
      endMonth: "June",
    },
  ];
  const Autumn = [
    {
      id: 1,
      name: "broccoli",
      imageName: broccoli,
      startMonth: "October",
      endMonth: "November",
    },
    {
      id: 2,
      name: "carrot",
      imageName: carrot,
      startMonth: "October",
      endMonth: "November",
    },
    {
      id: 3,
      name: "cauliflower",
      imageName: cauliflower,
      startMonth: "November",
      endMonth: "February",
    },
    {
      id: 4,
      name: "Kale",
      imageName: kale,
      startMonth: "September",
      endMonth: "November",
    },
    {
      id: 5,
      name: "Lettuce",
      imageName: Lettuce,
      startMonth: "october",
      endMonth: "december",
    },
    {
      id: 6,
      name: "spinach",
      imageName: spinach,
      startMonth: "october",
      endMonth: "december",
    },
  ];
  const Monsoon = [
    {
      id: 1,
      name: "black_gram",
      imageName: black_gram,
      startMonth: "October",
      endMonth: "March",
    },
    {
      id: 2,
      name: "pigeon_pea",
      imageName: pigeon_pea,
      startMonth: "October",
      endMonth: "March",
    },
    {
      id: 3,
      name: "sesame",
      imageName: sesame,
      startMonth: "October",
      endMonth: "March",
    },
    {
      id: 4,
      name: "soybean",
      imageName: soybean,
      startMonth: "October",
      endMonth: "March",
    },
    {
      id: 5,
      name: "sugarcane",
      imageName: sugarcane,
      startMonth: "February",
      endMonth: "March",
    },
    {
      id: 6,
      name: "tea",
      imageName: tea,
      startMonth: "September",
      endMonth: "october",
    },
  ];
  const PreWinter = [
    {
      id: 1,
      name: "beet",
      imageName: beet,
      startMonth: "April",
      endMonth: "May",
    },
    {
      id: 2,
      name: "garlic",
      imageName: garlic,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 3,
      name: "methi",
      imageName: methi,
      startMonth: "April",
      endMonth: "June",
    },
    {
      id: 4,
      name: "onion",
      imageName: onion,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 5,
      name: "radish",
      imageName: radish,
      startMonth: "April",
      endMonth: "May",
    },
    {
      id: 6,
      name: "spinach",
      imageName: spinachPreWinter,
      startMonth: "May",
      endMonth: "June",
    },
  ];
  const Winter = [
    {
      id: 1,
      name: "Brussels_Sprouts",
      imageName: Brussels_Sprouts,
      startMonth: "April",
      endMonth: "May",
    },
    {
      id: 2,
      name: "cotton_winter",
      imageName: cotton_winter,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 3,
      name: "mustard_winter",
      imageName: mustard_winter,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 4,
      name: "peas_winter",
      imageName: peas_winter,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 5,
      name: "wheat",
      imageName: wheat,
      startMonth: "May",
      endMonth: "June",
    },
  ];
  const Spring = [
    {
      id: 1,
      name: "Asparagus",
      imageName: Asparagus,
      startMonth: "February",
      endMonth: "April",
    },
    {
      id: 2,
      name: "ladyfinger",
      imageName: ladyfinger,
      startMonth: "March",
      endMonth: "June",
    },
    {
      id: 3,
      name: "mango",
      imageName: mango,
      startMonth: "March",
      endMonth: "June",
    },
    {
      id: 4,
      name: "swiss",
      imageName: swiss,
      startMonth: "March",
      endMonth: "June",
    },
    {
      id: 5,
      name: "tomato",
      imageName: tomato,
      startMonth: "March",
      endMonth: "May",
    },
    {
      id: 6,
      name: "Zucchini",
      imageName: Zucchini,
      startMonth: "May",
      endMonth: "June",
    },
  ];

  const [uniqueMonth, setUniqueMonth] = useState([]);

  const fetchMonths = (season) => {
    let outputArray = [];
    let start = false;
    for (let j = 0; j < season.length; j++) {
      for (let k = 0; k < outputArray.length; k++) {
        if (season[j].startMonth === outputArray[k]) {
          start = true;
        }
      }
      if (start === false) {
        outputArray.push(season[j].startMonth);
      }
      start = false;
    }
    setUniqueMonth(outputArray);
  };

  return (
    <CropsContentContext.Provider
      value={{
        Summer,
        Autumn,
        Spring,
        Winter,
        PreWinter,
        Monsoon,
        fetchMonths,
        uniqueMonth,
      }}
    >
      {props.children}
    </CropsContentContext.Provider>
  );
};

export default CropsContentState;
