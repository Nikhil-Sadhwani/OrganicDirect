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
      description:
        "Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cylindrical fruits used as culinary vegetables. Cucumbers are popular in salads, pickles, and various dishes around the world.",
      imageName: cucumber,
      startMonth: "April",
      endMonth: "June",
    },
    {
      id: 3,
      name: "Pepper",
      description:
        "Pepper, also known as bell pepper or capsicum, is a fruit of plants in the nightshade family. It is typically green, yellow, orange, or red when ripe, and can be eaten raw or cooked. Peppers are rich in vitamins and are a popular ingredient in many cuisines.",
      imageName: pepper,
      startMonth: "April",
      endMonth: "May",
    },
    {
      id: 4,
      name: "Pumpkin",
      description:
        "Pumpkin is a type of winter squash that is native to North America. It is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration. Pumpkins are used in a wide variety of culinary preparations and are also a popular decoration during Halloween.",
      imageName: pumpkin,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 5,
      name: "watermelon",
      description:
        "Watermelon is a vine-like flowering plant originating from West Africa. It is a large, juicy fruit known for its sweet taste and high water content. Watermelons are commonly consumed fresh in slices, but can also be used in salads, smoothies, and other dishes.",
      imageName: watermelon_summer,
      startMonth: "May",
      endMonth: "June",
    },
    {
      id: 6,
      name: "sunflower",
      description:
        "Sunflower is an annual plant native to the Americas. It has a large flowering head, called the capitulum, with bright yellow petals and a central disk of seeds. Sunflower seeds are rich in nutrients and are commonly used in cooking or as a snack.",
      imageName: summer_sun,
      startMonth: "March",
      endMonth: "June",
    },
  ];
  const Autumn = [
    {
      id: 1,
      name: "broccoli",
      description:
        "Broccoli is a green vegetable that belongs to the cabbage family. It is characterized by its compact green flower heads and thick, edible stems. Broccoli is a nutritious vegetable and is often steamed, boiled, or used in stir-fries.",
      imageName: broccoli,
      startMonth: "September",
      endMonth: "October",
    },
    {
      id: 2,
      name: "carrot",
      description:
        "Carrot is a root vegetable that is typically orange in color, though purple, black, red, white, and yellow varieties also exist. It is crunchy, tasty, and highly nutritious. Carrots are commonly eaten raw or cooked and are a versatile ingredient in various dishes.",
      imageName: carrot,
      startMonth: "September",
      endMonth: "October",
    },
    {
      id: 3,
      name: "cauliflower",
      description:
        "Cauliflower is a cruciferous vegetable that resembles a white version of its cousin, broccoli. It is composed of compact florets that form a rounded head. Cauliflower is a versatile ingredient and can be roasted, boiled, mashed, or used in various recipes.",
      imageName: cauliflower,
      startMonth: "september",
      endMonth: "October",
    },
    {
      id: 4,
      name: "Kale",
      description:
        "Kale is a leafy green vegetable that belongs to the cabbage family. It is known for its dark green, curly leaves and is highly nutritious. Kale is often used in salads, smoothies, and as a cooked side dish.",
      imageName: kale,
      startMonth: "September",
      endMonth: "October",
    },
    {
      //incomplete description
      id: 5,
      name: "Lettuce",

      imageName: Lettuce,
      startMonth: "September",
      endMonth: "October",
    },
    {
      id: 6,
      name: "spinach",
      description:
        "Spinach is a leafy green vegetable that is rich in vitamins and minerals. It is commonly used in salads, smoothies, and cooked dishes. Spinach is known for its dark green, tender leaves.",
      imageName: spinach,
      startMonth: "September",
      endMonth: "October",
    },
  ];
  const Monsoon = [
    {
      id: 1,
      name: "black_gram",
      description:
        "Black gram, also known as urad dal, is a type of lentil that is native to South Asia. It is commonly used in Indian cuisine and is known for its high protein content. Black gram is used to make a variety of dishes, including soups, stews, and curries.",
      imageName: black_gram,
      startMonth: "July",
      endMonth: "August",
    },
    {
      id: 2,
      name: "pigeon_pea",
      description:
        "Pigeon pea, also known as arhar dal or toor dal, is a type of legume that is native to India. It is a rich source of protein and is commonly used in Indian cuisine. Pigeon pea is used to make various dishes, including soups, stews, and curries.",
      imageName: pigeon_pea,
      startMonth: "July",
      endMonth: "August",
    },
    {
      id: 3,
      name: "sesame",
      description:
        "Sesame is a flowering plant that produces seeds known as sesame seeds. These seeds are used in a wide variety of culinary applications, including as a topping for bread and pastries. Sesame seeds are also used to make sesame oil.",
      imageName: sesame,
      startMonth: "July",
      endMonth: "August",
    },
    {
      id: 4,
      name: "soybean",
      description:
        "Soybean is a legume native to East Asia. It is a rich source of protein and is commonly used in various forms, including tofu, soy milk, and as an ingredient in processed foods. Soybeans are also used to make soybean oil.",
      imageName: soybean,
      startMonth: "July",
      endMonth: "August",
    },
    {
      id: 5,
      name: "sugarcane",
      description:
        "Sugarcane is a tall, perennial grass that is native to Southeast Asia. It is primarily grown for its juice, which is used to make sugar and other products. Sugarcane is an important crop in many tropical and subtropical regions.",
      imageName: sugarcane,
      startMonth: "July",
      endMonth: "August",
    },
    {
      id: 6,
      name: "tea",
      description:
        "Tea is a beverage made from the dried leaves of the Camellia sinensis plant. It is one of the most widely consumed beverages in the world and is known for its various flavors and health benefits. Tea is commonly prepared by steeping the leaves in hot water.",
      imageName: tea,
      startMonth: "July",
      endMonth: "August",
    },
  ];
  const PreWinter = [
    {
      id: 1,
      name: "beet",
      description:
        "Beet is a root vegetable known for its deep red color and sweet, earthy flavor. It is commonly used in salads, soups, and as a cooked side dish. Beet juice is also popular for its vibrant color and potential health benefits.",
      imageName: beet,
      startMonth: "November",
      endMonth: "December",
    },
    {
      id: 2,
      name: "garlic",
      description:
        "Garlic is a pungent bulbous plant that is widely used as a seasoning in various cuisines around the world. It is known for its strong flavor and aroma. Garlic is used in both raw and cooked forms to add flavor to dishes.",
      imageName: garlic,
      startMonth: "November",
      endMonth: "December",
    },
    {
      id: 3,
      name: "methi",
      description:
        "Methi, also known as fenugreek, is a herbaceous plant that is native to the Mediterranean region. Both its leaves and seeds are used in cooking. Methi leaves have a slightly bitter flavor and are used in a variety of dishes, while the seeds are used as a spice.",
      imageName: methi,
      startMonth: "November",
      endMonth: "December",
    },
    {
      id: 4,
      name: "onion",
      description:
        "Onion is a bulbous plant known for its pungent flavor and aroma. It is widely used as a flavoring agent in various dishes and is a staple ingredient in many cuisines around the world. Onions can be consumed raw, cooked, or as a seasoning.",
      imageName: onion,
      startMonth: "November",
      endMonth: "December",
    },
    {
      id: 5,
      name: "radish",
      description:
        "Radish is a root vegetable that comes in various colors, including red, white, and black. It has a crisp texture and a slightly peppery flavor. Radishes are commonly eaten raw in salads, but can also be cooked in a variety of dishes.",
      imageName: radish,
      startMonth: "November",
      endMonth: "December",
    },
    {
      id: 6,
      name: "spinach",
      description:
        "Spinach is a leafy green vegetable that is rich in vitamins and minerals. It is commonly used in salads, smoothies, and cooked dishes. Spinach is known for its dark green, tender leaves.",
      imageName: spinachPreWinter,
      startMonth: "November",
      endMonth: "December",
    },
  ];
  const Winter = [
    {
      id: 1,
      name: "Brussels_Sprouts",
      description:
        "Brussels Sprouts are small, leafy green vegetables that belong to the cabbage family. They grow in clusters along the stem and are known for their slightly bitter flavor. Brussels sprouts are commonly roasted, sautéed, or used in salads.",
      imageName: Brussels_Sprouts,
      startMonth: "January",
      endMonth: "February",
    },
    {
      id: 2,
      name: "cotton",
      description:
        "Cotton is a soft, fluffy fiber that surrounds the seeds of the cotton plant. It is primarily used to make textiles, including clothing, bedding, and industrial products. Cotton is one of the most widely used natural fibers in the world.",
      imageName: cotton_winter,
      startMonth: "January",
      endMonth: "February",
    },
    {
      id: 3,
      name: "mustard",
      description:
        "Mustard is a plant in the cabbage family that produces seeds used as a spice. It is known for its pungent flavor and is commonly used in condiments, sauces, and pickles. Mustard seeds can also be pressed to extract mustard oil.",
      imageName: mustard_winter,
      startMonth: "January",
      endMonth: "February",
    },
    {
      id: 4,
      name: "peas_winter",
      description:
        "Wheat is a cereal grain that is a staple food in many parts of the world. It is used to make a wide range of products, including bread, pasta, and cereals. Wheat is known for its high carbohydrate content and is a significant source of energy.",
      imageName: peas_winter,
      startMonth: "January",
      endMonth: "February",
    },
    {
      id: 5,
      name: "wheat",
      description:
        "Wheat is a cereal grain that is a staple food in many parts of the world. It is used to make a wide range of products, including bread, pasta, and cereals. Wheat is known for its high carbohydrate content and is a significant source of energy.",
      imageName: wheat,
      startMonth: "January",
      endMonth: "February",
    },
  ];
  const Spring = [
    {
      id: 1,
      name: "Asparagus",
      description:
        "Asparagus is a perennial vegetable known for its tender, edible spears. It is typically green or white in color and is highly nutritious. Asparagus can be boiled, steamed, roasted, or used in a variety of dishes.",
      imageName: Asparagus,
      startMonth: "March",
      endMonth: "April",
    },
    {
      id: 2,
      name: "ladyfinger",
      description:
        "Ladyfinger, also known as okra, is a green, pod-shaped vegetable that is commonly used in various cuisines, especially in Southern and Asian dishes. It is known for its slimy texture when cooked and is used in stews, soups, and stir-fries.",
      imageName: ladyfinger,
      startMonth: "March",
      endMonth: "April",
    },
    {
      id: 3,
      name: "mango",
      description:
        "Mango is a tropical fruit known for its sweet and juicy flesh. It comes in various shapes, sizes, and colors, depending on the variety. Mangoes are commonly eaten fresh, but can also be used in smoothies, salads, and desserts.",
      imageName: mango,
      startMonth: "March",
      endMonth: "April",
    },
    {
      id: 4,
      name: "swiss",
      description:
        "Swiss chard is a leafy green vegetable that is related to beets and spinach. It has colorful stems and dark green leaves. Swiss chard is known for its slightly bitter flavor and is used in salads, sautés, and other dishes.",
      imageName: swiss,
      startMonth: "March",
      endMonth: "April",
    },
    {
      id: 5,
      name: "tomato",
      description:
        "Tomato is a red or yellowish fruit with a juicy pulp, used as a vegetable in cooking. It is an essential ingredient in many cuisines around the world, used in sauces, soups, salads, and various cooked dishes.",
      imageName: tomato,
      startMonth: "March",
      endMonth: "April",
    },
    {
      id: 6,
      name: "Zucchini",
      description:
        "Zucchini, also known as courgette, is a summer squash that is typically dark or light green in color. It has a mild flavor and tender texture. Zucchini can be grilled, sautéed, baked, or used in various dishes.",
      imageName: Zucchini,
      startMonth: "May",
      endMonth: "April",
    },
  ];

  const Crops = [
    //Summer
    {
      id: 1,
      name: "Corn",
      description:
        "Corn, also known as maize, is a widely cultivated cereal grain that originated in the Americas. It is characterized by tall, slender plants with large leaves and produces ears containing rows of kernels. Corn is a staple food in many parts of the world and is used in various culinary applications, including as a source of flour, oil, and animal feed.",
      imageName: cornImg,
      startMonth: "May",
      endMonth: "June",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Corn, scientifically known as Zea mays, is grown in various countries around the world. The United States, China, and Brazil are some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of corn in 2019 was approximately 1.1 billion metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of corn can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding corn crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Corn is believed to have originated in Mesoamerica and was later spread to other parts of the world. It has a long history of cultivation and has undergone significant domestication.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Corn is grown in numerous countries, with the United States being the largest producer. It is a staple food crop and is also used in various industrial applications.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Corn has diverse uses, including as a staple food, animal feed, and for industrial purposes like ethanol production. It is also processed into various products such as cornmeal and corn oil.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Corn thrives in warm temperatures and requires adequate rainfall or irrigation. It is typically grown during specific growing seasons, such as spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Corn prefers well-drained soils with good fertility. Loamy soils with a pH range of 5.8-6.8 are suitable for optimal growth.",
        },
        {
          heading: "Varieties of Corn:",
          paraGraph:
            "There are various types of corn, including dent, flint, flour, and sweet corn. Each variety has distinct characteristics and uses.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Corn is harvested when the kernels are mature and have reached the desired moisture content. The timing of harvest is crucial for quality and yield.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of corn include corn earworm, armyworm, and aphids. Diseases like gray leaf spot and common rust can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, weed control, and pest management are essential for healthy corn plants. Fertilization and irrigation are also key aspects of corn cultivation.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Corn requires balanced nutrient levels, with a focus on nitrogen, phosphorus, and potassium. Soil testing helps determine specific nutrient needs.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Weed control is critical for corn, as competition for resources can reduce yields. Practices like herbicide application and crop rotation are common.",
        },
      ],

      season: "Summer",
    },
    {
      id: 2,
      name: "Cucumber",
      imageName: cucumber,
      startMonth: "May",
      endMonth: "June",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Cucumber, scientifically known as Cucumis sativus, is grown in various countries around the world. China, India, and Russia are some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of cucumbers in 2019 was approximately 81 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of cucumbers can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding cucumber crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Cucumbers are believed to have originated in India, and they have a long history of cultivation dating back thousands of years.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Cucumbers are grown in numerous countries, with China being the largest producer. They are a versatile vegetable used in various culinary dishes.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Cucumbers are primarily consumed fresh in salads and sandwiches. They are also used for pickling and in various culinary preparations.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Cucumbers thrive in warm temperatures and require a frost-free growing season. They are typically grown during spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Cucumbers prefer well-drained soils with good organic matter content. Soil pH should be in the range of 6.0-6.8 for optimal growth.",
        },
        {
          heading: "Varieties of Cucumbers:",
          paraGraph:
            "There are various cucumber varieties, including slicing cucumbers, pickling cucumbers, and specialty varieties. Each type is suited for specific culinary purposes.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Cucumbers are harvested when they are young and tender, usually when they reach the desired size. Regular harvesting encourages continued production.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of cucumbers include aphids, cucumber beetles, and spider mites. Diseases like powdery mildew and downy mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, trellising, and pest control measures are essential for healthy cucumber plants. Adequate water and nutrients are also crucial for growth.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Cucumbers benefit from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like boron are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around cucumber plants. Competition from weeds can hinder growth and yield.",
        },
      ],

      season: "Summer",
    },
    {
      id: 3,
      name: "Pepper",
      imageName: pepper,
      startMonth: "May",
      endMonth: "June",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Peppers, scientifically known as Capsicum annuum, are grown in various countries around the world. China, Mexico, and Indonesia are some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of peppers in 2019 was approximately 38 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of peppers can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding pepper crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Peppers are believed to have originated in Central and South America, and they have been cultivated for thousands of years.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Peppers are grown in numerous countries, with China being the largest producer. They are a versatile vegetable used in various culinary dishes.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Peppers are used in a wide range of culinary applications, both fresh and processed. They can be consumed raw in salads, cooked in dishes, or processed into products like sauces and powders.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Peppers thrive in warm temperatures and require a frost-free growing season. They are typically grown during spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Peppers prefer well-drained soils with good organic matter content. Soil pH should be in the range of 6.0-6.8 for optimal growth.",
        },
        {
          heading: "Varieties of Peppers:",
          paraGraph:
            "There are various pepper varieties, including sweet peppers and hot peppers. Each type has distinct characteristics in terms of flavor, heat level, and appearance.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Peppers can be harvested at different stages of maturity, depending on the desired use. They can be picked green or left on the plant to ripen to red, yellow, or other colors.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of peppers include aphids, pepper maggots, and flea beetles. Diseases like bacterial spot and powdery mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, staking, and pest control measures are essential for healthy pepper plants. Adequate water and nutrients are also crucial for growth.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Peppers benefit from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like calcium and magnesium are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around pepper plants. Competition from weeds can hinder growth and yield.",
        },
      ],

      season: "Summer",
    },
    {
      id: 4,
      name: "Pumpkin",
      imageName: pumpkin,
      startMonth: "May",
      endMonth: "July",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Pumpkins, scientifically known as Cucurbita pepo, are grown in various countries around the world. The top producers include China, India, and Russia.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of pumpkins in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of pumpkins can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding pumpkin crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Pumpkins are believed to have originated in North America, and they have been cultivated for thousands of years. They are now grown worldwide.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Pumpkins are grown in numerous countries, with China being the largest producer. They are used in a wide range of culinary dishes and also for decorative purposes.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Pumpkins are used in various culinary applications, both in savory and sweet dishes. They are also carved for decorations during festivals like Halloween.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Pumpkins thrive in warm temperatures and require a frost-free growing season. They are typically grown during spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Pumpkins prefer well-drained soils with good organic matter content. Soil pH should be in the range of 6.0-6.8 for optimal growth.",
        },
        {
          heading: "Varieties of Pumpkins:",
          paraGraph:
            "There are various pumpkin varieties, including Jack-o'-lantern types and pie pumpkins. Each type has distinct characteristics in terms of size, shape, and flavor.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Pumpkins are typically harvested when they reach full maturity and the skin has hardened. They should have a deep, uniform color and a hard rind.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of pumpkins include cucumber beetles and squash bugs. Diseases like powdery mildew and downy mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, pest control measures, and providing support for the developing fruit are essential for healthy pumpkin plants. Adequate water and nutrients are also crucial.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Pumpkins benefit from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like calcium and boron are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around pumpkin plants. Competition from weeds can hinder growth and yield.",
        },
      ],

      season: "Summer",
    },
    {
      id: 5,
      name: "watermelon",
      imageName: watermelon_summer,
      startMonth: "June",
      endMonth: "July",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Watermelons, scientifically known as Citrullus lanatus, are grown in various countries around the world. The top producers include China, India, and Turkey.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of watermelons in 2019 was approximately 97 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of watermelons can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding watermelon crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Watermelons are believed to have originated in Africa and have been cultivated for thousands of years. They are now grown worldwide.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Watermelons are grown in numerous countries, with China being the largest producer. They are widely consumed as a refreshing fruit in various forms.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Watermelons are primarily consumed as a juicy, hydrating fruit. They are also used in salads, smoothies, and various culinary preparations.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Watermelons thrive in warm temperatures and require a frost-free growing season. They are typically grown during spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Watermelons prefer well-drained, sandy loam soils with good organic matter content. Soil pH should be in the range of 6.0-6.8 for optimal growth.",
        },
        {
          heading: "Varieties of Watermelons:",
          paraGraph:
            "There are various watermelon varieties, including seeded and seedless types. Each type has distinct characteristics in terms of size, color, and flavor.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Watermelons are typically harvested when they reach full maturity. The skin should be dull, and the bottom should have a creamy yellow spot.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of watermelons include aphids, cucumber beetles, and spider mites. Diseases like powdery mildew and anthracnose can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, pest control measures, and providing support for developing fruit are essential for healthy watermelon plants. Adequate water and nutrients are also crucial.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Watermelons benefit from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like calcium and boron are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around watermelon plants. Competition from weeds can hinder growth and yield.",
        },
      ],

      season: "Summer",
    },
    {
      id: 6,
      name: "sunflower",
      imageName: summer_sun,
      startMonth: "June",
      endMonth: "July",

      education: [
        {
          heading: "Area:",
          paraGraph:
            "Sunflowers, scientifically known as Helianthus annuus, are grown in various countries around the world. The top producers include Russia, Ukraine, and Argentina.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of sunflowers in 2019 was approximately 53 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of sunflowers can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding sunflower crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Sunflowers are believed to have originated in North America, specifically in regions that are now part of the United States. They have a long history of cultivation by indigenous peoples.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Sunflowers are grown in numerous countries, with Russia being the largest producer. They are cultivated for their oil-rich seeds and as ornamental plants.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Sunflowers have various uses. The seeds are used to extract sunflower oil, which is widely consumed for its health benefits. Additionally, sunflowers are grown for their bright, cheerful flowers and as a source of birdseed.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Sunflowers thrive in temperate climates with full sun exposure. They require a frost-free growing season and are typically grown during spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Sunflowers prefer well-drained soils with a pH range of 6.0-7.5. They are adaptable to various soil types but perform best in loamy soils with good organic matter content.",
        },
        {
          heading: "Varieties of Sunflowers:",
          paraGraph:
            "There are different varieties of sunflowers, including oilseed types and ornamental varieties. Oilseed sunflowers are cultivated for their oil-rich seeds, while ornamental sunflowers are grown for their aesthetic appeal.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Sunflowers are typically harvested when the back of the flower head turns yellow and the seeds are plump. The heads can be cut and dried for seed extraction.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of sunflowers include aphids, caterpillars, and sunflower beetles. Diseases like downy mildew and rust can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, pest control measures, and providing support for developing flower heads are essential for healthy sunflower plants. Adequate water and nutrients are also crucial.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Sunflowers benefit from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like zinc and manganese are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around sunflower plants. Competition from weeds can hinder growth and yield.",
        },
      ],

      season: "Summer",
    },

    //Spring
    {
      id: 1,
      name: "Asparagus",
      imageName: Asparagus,
      startMonth: "March",
      endMonth: "April",

      education: [
        {
          heading: "Area:",
          paraGraph:
            "Asparagus is cultivated in several countries, with China, Peru, and Mexico being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of asparagus in 2019 was approximately 8 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of asparagus can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive asparagus crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Asparagus, scientifically known as Asparagus officinalis, is believed to have originated in the eastern Mediterranean and Asia Minor regions. It has been cultivated for over 2,000 years and is now grown in various countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Asparagus is cultivated in several countries, with China, Peru, and Mexico being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Asparagus is valued for its tender shoots, which are used as a culinary vegetable. It is a versatile ingredient in various dishes, including salads, stir-fries, and pasta.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Asparagus thrives in temperate climates with well-defined seasons. It is a perennial plant that requires a period of dormancy during winter.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Asparagus prefers well-drained, sandy loam soils with a pH range of 6.5-7.5. Good drainage is crucial to prevent waterlogging.",
        },
        {
          heading: "Propagation:",
          paraGraph:
            "Asparagus is typically propagated through crown divisions or by planting seeds. Crowns are the most common method and consist of the plant's fleshy roots and a bud cluster.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Asparagus spears are harvested when they reach a length of about 6-8 inches. Harvesting is typically done in the spring season.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of asparagus include asparagus beetles and aphids. Diseases such as rust and fusarium wilt can also affect the plant.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper crop management involves practices like regular monitoring for pests and diseases, providing adequate water and nutrients, and implementing weed control measures.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Asparagus benefits from balanced nutrient levels in the soil. This may involve the addition of organic matter or specific fertilizers based on soil tests.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Effective weed management is essential to prevent competition for nutrients and resources. This may include mulching, manual weeding, or the use of herbicides.",
        },
      ],

      season: "Spring",
    },
    {
      id: 2,
      name: "ladyfinger",
      imageName: ladyfinger,
      startMonth: "March",
      endMonth: "April",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Ladyfinger is grown in various countries around the world, with India, Nigeria, and Pakistan being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of ladyfinger in 2019 was approximately 13 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of ladyfinger can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive ladyfinger crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Ladyfinger, scientifically known as Abelmoschus esculentus, is believed to have originated in Africa. It is now cultivated in many countries and is a popular vegetable known for its unique texture and flavor.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Ladyfinger is grown in various countries around the world, with India, Nigeria, and Pakistan being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Ladyfinger is valued for its edible green pods. It is a versatile vegetable and is used in various cuisines for its nutritional content.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Ladyfinger is a warm-season crop and requires temperatures between 70-90°F (21-32°C) for optimal growth. It is sensitive to frost, so it is important to plant after the last frost date in your area.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Ladyfinger thrives in well-drained, loamy soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing between plants, regular watering, and providing support for the plants can help in healthy growth and yield of ladyfinger.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Ladyfinger benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium is essential for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that ladyfinger plants have access to essential nutrients and water.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Ladyfinger should be harvested when they are young and tender, usually when they reach a length of 3-4 inches. Regular harvesting encourages continued production.",
        },
      ],

      season: "Spring",
    },
    {
      id: 3,
      name: "mango",
      imageName: mango,
      startMonth: "March",
      endMonth: "April",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Mangoes are grown in various countries around the world, with India, China, and Thailand being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of mangoes in 2019 was approximately 55 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of mangoes can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive mango trees.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Mango, scientifically known as Mangifera indica, is believed to have originated in South Asia, specifically in the Indian subcontinent. It has been cultivated for over 4,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Mangoes are grown in various countries around the world, with India, China, and Thailand being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Mangoes are valued for their sweet, juicy fruit. They are consumed fresh, dried, or processed into various products like juices, jams, and chutneys.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Mangoes thrive in tropical and subtropical climates. They require warm temperatures and are sensitive to frost. They have distinct seasons for flowering, fruiting, and dormancy.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Mango trees prefer well-drained, loamy soils with a pH range of 5.5-7.5. They are adaptable to a wide range of soil types, but good drainage is crucial.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Pruning, shaping, and providing support for young trees are important aspects of mango tree management. Proper care helps in healthy growth and fruit production.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Mango trees benefit from balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy growth and fruiting.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around the base of the mango tree. This ensures that the tree has access to essential nutrients and water.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Mangoes should be harvested when they are mature but still firm. They continue to ripen after harvest. Harvesting is typically done by hand, using long poles with a harvesting tool at the end.",
        },
      ],

      season: "Spring",
    },
    {
      id: 4,
      name: "swiss",
      imageName: swiss,
      startMonth: "March",
      endMonth: "April",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Swiss chard is grown in various countries around the world, with Italy, France, and the United States being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of Swiss chard in 2019 was approximately 710,000 metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of Swiss chard can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive Swiss chard crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Swiss chard, scientifically known as Beta vulgaris subsp. vulgaris, is believed to have originated in the Mediterranean region. It is now cultivated in many countries and is known for its vibrant, colorful stems and nutritious leaves.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Swiss chard is grown in various countries around the world, with Italy, France, and the United States being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Swiss chard is valued for its tender leaves and colorful stems. It is a versatile leafy green and is used in salads, sautés, and various culinary dishes for its nutritional content.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Swiss chard is a cool-season crop that thrives in temperatures between 50-75°F (10-24°C). It is best grown in areas with distinct seasons.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Swiss chard prefers well-drained, fertile soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing between plants, regular watering, and providing adequate sunlight can help in healthy growth and yield of Swiss chard.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Swiss chard benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium is essential for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that Swiss chard plants have access to essential nutrients and water.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Swiss chard leaves can be harvested when they are young and tender, usually around 6-8 inches in length. Regular harvesting encourages continued production.",
        },
      ],

      season: "Spring",
    },
    {
      id: 5,
      name: "tomato",
      imageName: tomato,
      startMonth: "April",
      endMonth: "May",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Tomato is grown in various countries around the world, with China, India, and the United States being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of tomatoes in 2019 was approximately 182 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of tomatoes can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive tomato crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Tomato, scientifically known as Solanum lycopersicum, is believed to have originated in western South America. It is now cultivated in many countries and is a widely used vegetable in various cuisines.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Tomato is grown in various countries around the world, with China, India, and the United States being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Tomato is valued for its versatile culinary uses. It is used in salads, sauces, soups, and a wide range of dishes. It is also consumed fresh.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Tomato is a warm-season crop that thrives in temperatures between 70-85°F (21-29°C). It is sensitive to frost, so it is important to plant after the last frost date in your area.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Tomato thrives in well-drained, loamy soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper staking or caging, regular watering, and providing support for the plants can help in healthy growth and yield of tomatoes.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Tomato benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium is essential for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that tomato plants have access to essential nutrients and water.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Tomatoes should be harvested when they reach full color and firmness. They can be picked individually as they ripen.",
        },
      ],

      season: "Spring",
    },
    {
      id: 6,
      name: "Zucchini",
      imageName: Zucchini,
      startMonth: "April",
      endMonth: "May",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Zucchini, scientifically known as Cucurbita pepo, is grown in various countries around the world. The United States, China, and Russia are some of the leading producers of zucchini.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of zucchini in 2019 was approximately 54 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of zucchini can vary based on factors like climate, soil conditions, and agricultural practices. Providing proper care and management can lead to healthy and productive zucchini plants.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Zucchini is believed to have originated in the Americas. It has been cultivated for centuries and is now grown in various countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Zucchini is grown in various countries around the world, with the United States, China, and Russia being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Zucchini is valued for its tender fruits, which are consumed as a vegetable. It is a versatile ingredient in various dishes, including salads, stir-fries, and baked goods.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Zucchini thrives in warm temperatures between 70-90°F (21-32°C). It is a warm-season crop and is sensitive to frost. Zucchini plants have a relatively short growing season.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Zucchini prefers well-drained, fertile soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.5 is ideal for optimal growth.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing between plants, regular watering, and providing support for the plants can help in healthy growth and yield of zucchini.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Zucchini benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy growth and fruiting.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds around the base of the zucchini plants. This ensures that the plants have access to essential nutrients and water.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Zucchini should be harvested when they are young and tender, usually when they reach a length of 6-8 inches. Regular harvesting encourages continued production.",
        },
      ],

      season: "Spring",
    },

    // Autumn
    {
      id: 1,
      name: "broccoli",
      imageName: broccoli,
      startMonth: "September",
      endMonth: "October",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Broccoli is cultivated in numerous countries, with China, India, the United States, and Russia being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of broccoli in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of broccoli can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive broccoli crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Broccoli, scientifically known as Brassica oleracea var. italica, is believed to have originated in the Mediterranean region. It has been cultivated for over 2,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Broccoli is valued for its nutritious green flower heads, which are consumed as a vegetable.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Broccoli is valued for its nutritious green flower heads, which are consumed as a vegetable.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Broccoli is a cool-season crop that thrives in temperatures between 45-75°F (7-24°C). It is best grown in areas with distinct seasons, as exposure to cold temperatures induces the development of flower heads.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Broccoli prefers well-drained, fertile soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Broccoli:",
          paraGraph:
            "There are different varieties of broccoli, including Calabrese broccoli with large, green heads, and sprouting broccoli with smaller, numerous heads.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Broccoli heads are harvested when the buds are tight and compact, typically 6-8 inches in diameter. Harvesting should be done in the morning for the best quality.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of broccoli include aphids, cabbage worms, and flea beetles. Diseases like downy mildew and clubroot can also affect the plant.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper crop management involves practices like regular monitoring for pests and diseases, providing adequate water and nutrients, and implementing weed control measures.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Balanced nutrient levels in the soil are crucial for optimal broccoli growth. This may involve the addition of organic matter or specific fertilizers based on soil tests.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Effective weed management is essential to prevent competition for nutrients and resources. This may include mulching, manual weeding, or the use of herbicides.",
        },
      ],

      season: "Autumn",
    },
    {
      id: 2,
      name: "carrot",
      imageName: carrot,
      startMonth: "September",
      endMonth: "October",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Carrots are grown in various countries around the world, with China, Russia, and the United States being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of carrots in 2019 was approximately 40 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of carrots can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive carrot crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Carrot, scientifically known as Daucus carota subsp. sativus, is believed to have originated in Central Asia. It has been cultivated for over 1,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Carrots are grown in numerous countries, with China, Russia, and the United States being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Carrots are valued for their sweet, crunchy taproots, which are consumed as a vegetable.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Carrots thrive in cool-seasons with temperatures between 50-75°F (10-24°C). They can be grown in areas with distinct seasons, and exposure to cold temperatures induces root development.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Carrots prefer well-drained, loose soils with a pH range of 6.0-7.0. Soil that is free of rocks, clumps, and debris is ideal for straight, uniform roots.",
        },
        {
          heading: "Varieties of Carrots:",
          paraGraph:
            "There are various carrot varieties, including Imperator, Nantes, Chantenay, and Danvers, each with distinct characteristics like shape, size, and flavor.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Carrot roots are ready for harvest when they reach a desirable size, usually 1/2 to 3/4 inch in diameter. Harvesting is best done in the morning for optimal quality.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of carrots include carrot rust fly and nematodes. Diseases like powdery mildew and bacterial soft rot can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, thinning, and providing consistent moisture are crucial for healthy carrot growth. Weed control is also important to prevent competition.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Carrots benefit from well-balanced fertilization, especially with a focus on phosphorus and potassium. Avoid excessive nitrogen, which can lead to forked roots.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. Carrots are sensitive to competition, so it's important to keep the area around them weed-free.",
        },
      ],

      season: "Autumn",
    },
    {
      id: 3,
      name: "cauliflower",
      imageName: cauliflower,
      startMonth: "September",
      endMonth: "October",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Cauliflower is grown in various countries around the world, with China, India, and the United States being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of cauliflower in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of cauliflower can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive cauliflower crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Cauliflower, scientifically known as Brassica oleracea var. botrytis, is believed to have originated in the Mediterranean region. It has been cultivated for over 2,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Cauliflower is grown in numerous countries, with China, India, and the United States being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Cauliflower is valued for its compact, white curd, which is consumed as a vegetable. It is a versatile ingredient in various dishes, including stir-fries, curries, and salads.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Cauliflower is a cool-season crop that thrives in temperatures between 50-75°F (10-24°C). It is best grown in areas with distinct seasons, as exposure to cold temperatures induces curd development.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Cauliflower prefers well-drained, fertile soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Cauliflower:",
          paraGraph:
            "There are different varieties of cauliflower, including white, purple, and green varieties. Each has distinct flavor profiles and uses in culinary applications.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Cauliflower heads are harvested when they reach a desirable size and are firm and compact. Harvesting should be done in the morning for the best quality.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of cauliflower include aphids, cabbage worms, and cabbage loopers. Diseases like clubroot and downy mildew can also affect the plant.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular monitoring for pests and diseases, and providing adequate water and nutrients are crucial for healthy cauliflower growth.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Cauliflower benefits from balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy growth and curd formation.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that cauliflower plants have access to essential nutrients and water without competition.",
        },
      ],

      season: "Autumn",
    },
    {
      id: 4,
      name: "Kale",
      imageName: kale,
      startMonth: "October",
      endMonth: "November",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Kale is grown in various countries around the world, with the United States, Canada, and Russia being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of kale in 2019 was approximately 10 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of kale can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive kale crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Kale, scientifically known as Brassica oleracea var. sabellica, is believed to have originated in the eastern Mediterranean and Asia Minor regions. It has been cultivated for over 2,000 years and is now grown in various countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Kale is grown in numerous countries, with the United States, Canada, and Russia being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Kale is valued for its highly nutritious leaves, which are consumed as a leafy green vegetable. It is a popular ingredient in salads, smoothies, and various cooked dishes.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Kale is a cool-season crop that thrives in temperatures between 45-75°F (7-24°C). It is well-suited for areas with distinct seasons and can withstand light frosts.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Kale prefers well-drained, fertile soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Kale:",
          paraGraph:
            "There are different varieties of kale, including curly kale, Lacinato (or dinosaur) kale, and Red Russian kale, each with distinct leaf textures and flavors.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Kale leaves can be harvested when they reach a desirable size, typically 8-10 inches in length. Harvesting young leaves promotes continued growth and productivity.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of kale include aphids, cabbage worms, and flea beetles. Diseases like black rot and powdery mildew can also affect the plant.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular monitoring for pests and diseases, and providing adequate water and nutrients are crucial for healthy kale growth.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Kale benefits from balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy leaf development.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that kale plants have access to essential nutrients and water without competition.",
        },
      ],

      season: "Autumn",
    },
    {
      id: 5,
      name: "Lettuce",
      imageName: Lettuce,
      startMonth: "October",
      endMonth: "November",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Lettuce is grown in various countries around the world, with the United States, China, and India being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of lettuce in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of lettuce can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive lettuce crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Lettuce, scientifically known as Lactuca sativa, is believed to have originated in the Mediterranean region. It has been cultivated for over 2,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Lettuce is grown in numerous countries, with the United States, China, and India being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Lettuce is valued for its tender leaves, which are consumed as a leafy green vegetable. It is a popular ingredient in salads, sandwiches, and wraps.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Lettuce is a cool-season crop that thrives in temperatures between 45-65°F (7-18°C). It is well-suited for areas with mild climates and can tolerate light frosts.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Lettuce prefers well-drained, loamy soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Lettuce:",
          paraGraph:
            "There are different varieties of lettuce, including iceberg, romaine, butterhead, and leaf lettuce, each with distinct leaf shapes, textures, and flavors.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Lettuce leaves can be harvested when they reach a desirable size, typically 6-8 inches in length. Harvesting outer leaves promotes continued growth and productivity.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of lettuce include aphids, slugs, and snails. Diseases like downy mildew and lettuce mosaic virus can also affect the plant.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular monitoring for pests and diseases, and providing adequate water and nutrients are crucial for healthy lettuce growth.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Lettuce benefits from balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy leaf development.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that lettuce plants have access to essential nutrients and water without competition.",
        },
      ],

      season: "Autumn",
    },
    {
      id: 6,
      name: "spinach",
      imageName: spinach,
      startMonth: "September",
      endMonth: "October",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Spinach is grown in various countries around the world, with China, United States, and India being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of spinach in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of spinach can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive spinach crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Spinach, scientifically known as Spinacia oleracea, is believed to have originated in ancient Persia (modern-day Iran). It has been cultivated for over 2,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Spinach is grown in numerous countries, with China, United States, and India being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Spinach is valued for its dark green, nutrient-rich leaves, which are consumed as a leafy green vegetable. It is a versatile ingredient in salads, soups, and various cooked dishes.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Spinach is a cool-season crop that thrives in temperatures between 50-70°F (10-21°C). It is well-suited for areas with mild winters and moderate summers.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Spinach prefers well-drained, fertile soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Spinach:",
          paraGraph:
            "There are different varieties of spinach, including savoy, flat-leafed, and semi-savoy, each with distinct leaf textures and shapes.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Spinach leaves can be harvested when they reach a desirable size, typically 4-6 inches in length. Harvesting outer leaves encourages continued growth and productivity.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of spinach include aphids, leaf miners, and slugs. Diseases like downy mildew and fusarium wilt can also affect the plant.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular monitoring for pests and diseases, and providing adequate water and nutrients are crucial for healthy spinach growth.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Spinach benefits from balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy leaf development.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. This ensures that spinach plants have access to essential nutrients and water without competition.",
        },
      ],

      season: "Autumn",
    },

    // Monsoon
    {
      id: 1,
      name: "black_gram",
      imageName: black_gram,
      startMonth: "July",
      endMonth: "August",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Black Gram is grown in various countries around the world, with India, Myanmar, and Brazil being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of Black Gram in 2019 was approximately 3.5 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of Black Gram can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive Black Gram crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Black Gram, scientifically known as Vigna mungo, is believed to have originated in the Indian subcontinent. It has been cultivated for over 4,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Black Gram is grown in numerous countries, with India, Myanmar, and Brazil being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Black Gram is valued for its protein-rich seeds, which are consumed as a pulse. It is a staple ingredient in various cuisines, especially in South Asia.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Black Gram thrives in warm, tropical climates. It requires temperatures between 70-80°F (21-27°C) for optimal growth. It is sensitive to frost and grows well during the summer season.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Black Gram prefers well-drained, loamy soils rich in organic matter. A slightly acidic to neutral pH range of 6.0-7.5 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Black Gram:",
          paraGraph:
            "There are different varieties of Black Gram, each with distinct seed size, color, and cooking characteristics. Some popular varieties include TAU-1, Pant U-30, and PDU-1.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Black Gram pods are harvested when they turn yellowish-brown and the seeds are fully mature. Harvesting is typically done by hand, and the pods are dried before threshing.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of Black Gram include pod borer, aphids, and whitefly. Diseases like powdery mildew and root rot can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, timely irrigation, and pest control measures are crucial for healthy Black Gram growth. Crop rotation and residue management also play a role in disease prevention.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Black Gram benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy plant development.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Cultivation practices like intercropping and mulching help in controlling weeds. Manual weeding or the use of herbicides may also be employed.",
        },
      ],

      season: "Monsoon",
    },
    {
      id: 2,
      name: "pigeon_pea",
      imageName: pigeon_pea,
      startMonth: "July",
      endMonth: "August",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Pigeon Pea is grown in various countries around the world, with India, Myanmar, and Kenya being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of Pigeon Pea in 2019 was approximately 6 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of Pigeon Pea can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive Pigeon Pea crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Pigeon Pea, scientifically known as Cajanus cajan, is believed to have originated in India. It has been cultivated for over 3,500 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Pigeon Pea is grown in numerous countries, with India, Myanmar, and Kenya being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Pigeon Pea is valued for its protein-rich seeds, which are consumed as a pulse. It is a staple ingredient in various cuisines, especially in South Asia and Africa.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Pigeon Pea thrives in warm, tropical climates. It requires temperatures between 75-85°F (24-30°C) for optimal growth. It is sensitive to frost and grows well during the summer season.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Pigeon Pea prefers well-drained, sandy loam soils with a pH range of 6.0-7.0. It is tolerant of slightly acidic to alkaline conditions.",
        },
        {
          heading: "Varieties of Pigeon Pea:",
          paraGraph:
            "There are different varieties of Pigeon Pea, each with distinct seed color, size, and cooking characteristics. Some popular varieties include ICPL 88039, ICPL 87119, and Bahar.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Pigeon Pea pods are harvested when they turn yellowish-brown and the seeds are fully mature. Harvesting is typically done by hand, and the pods are dried before threshing.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of Pigeon Pea include pod borer, aphids, and whitefly. Diseases like Fusarium wilt and sterility mosaic can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, timely irrigation, and pest control measures are crucial for healthy Pigeon Pea growth. Crop rotation and residue management also play a role in disease prevention.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Pigeon Pea benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy plant development.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Cultivation practices like intercropping and mulching help in controlling weeds. Manual weeding or the use of herbicides may also be employed.",
        },
      ],

      season: "Monsoon",
    },
    {
      id: 3,
      name: "sesame",
      imageName: sesame,
      startMonth: "July",
      endMonth: "August",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Sesame is grown in various countries around the world, with India, China, and Sudan being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of Sesame in 2019 was approximately 6 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of Sesame can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive Sesame crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Sesame, scientifically known as Sesamum indicum, is believed to have originated in Africa. It has been cultivated for over 5,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Sesame is grown in numerous countries, with India, China, and Sudan being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Sesame seeds are valued for their oil content and are used in various cuisines and food products. Sesame oil is also used for its flavor and nutritional properties.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Sesame thrives in warm climates with temperatures between 75-85°F (24-30°C). It is a drought-tolerant crop and requires well-distributed rainfall for optimal growth.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Sesame prefers well-drained, loamy soils with a pH range of 5.5-8.0. It is adaptable to different soil types but does best in soils with good moisture-holding capacity.",
        },
        {
          heading: "Varieties of Sesame:",
          paraGraph:
            "There are different varieties of Sesame, each with variations in seed color, size, and oil content. Some popular varieties include Indian White, Black, and Brown Sesame.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Sesame pods are harvested when they turn brown and begin to split open. Harvesting is typically done using a combine harvester, and the seeds are then dried and threshed.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of Sesame include aphids, armyworms, and white grubs. Diseases like root rot and leaf spot can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, timely irrigation, and pest control measures are crucial for healthy Sesame plant development. Crop rotation and residue management also play a role in disease prevention.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Sesame benefits from well-balanced fertilization. Providing adequate nitrogen, phosphorus, and potassium, along with micronutrients, supports healthy plant development.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Cultivation practices like intercropping and mulching help in controlling weeds. Manual weeding or the use of herbicides may also be employed.",
        },
      ],

      season: "Monsoon",
    },
    {
      id: 4,
      name: "soybean",
      imageName: soybean,
      startMonth: "July",
      endMonth: "August",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Soybean, scientifically known as Glycine max, is believed to have originated in East Asia. It has been cultivated for over 5,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Soybean is cultivated in numerous countries, with the United States, Brazil, and Argentina being some of the leading producers. Global production of soybeans in 2019 was approximately 336 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Soybeans are valued for their high protein and oil content. They are used in various food products, including tofu, soy milk, and cooking oil. Additionally, soybean meal is a crucial component of animal feed.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Soybeans thrive in regions with warm temperatures during the growing season. They are a summer crop and require a frost-free period for optimal growth.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Soybean is a major global crop, with significant production in countries like the United States, Brazil, and Argentina. Global production of soybeans in 2019 was approximately 336 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of soybeans can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive soybean crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Soybeans thrive in warm temperatures between 60-80°F (15-27°C). They are a summer crop and require a growing season of at least 4-5 months without frost.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Soybeans prefer well-drained, loamy soils with a pH range of 6.0-6.8. They have a symbiotic relationship with nitrogen-fixing bacteria, which reduces the need for additional nitrogen fertilization.",
        },
        {
          heading: "Varieties of Soybeans:",
          paraGraph:
            "There are different varieties of soybeans, including determinate and indeterminate types. Varieties also differ in maturity groups, which affect the length of the growing season required.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Soybeans are harvested when the pods are fully mature and the beans inside have reached their full size. Harvesting is typically done using a combine harvester.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of soybeans include soybean aphids, bean leaf beetles, and caterpillars. Diseases like soybean rust and root rot can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper seeding rates, row spacing, and weed control measures are crucial for healthy soybean plant development. Crop rotation and residue management also play a role in disease prevention.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Soybeans benefit from well-balanced fertilization. They have a high demand for nitrogen and benefit from inoculation with rhizobia bacteria for nitrogen fixation.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Cultivation practices like row spacing and herbicide application help in controlling weeds. Additionally, cover crops can be used to suppress weed growth.",
        },
      ],

      season: "Monsoon",
    },
    {
      id: 5,
      name: "sugarcane",
      imageName: sugarcane,
      startMonth: "August",
      endMonth: "September",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Sugarcane, scientifically known as Saccharum officinarum, is believed to have originated in New Guinea. It has been cultivated for over 3,000 years and is now grown in many tropical and subtropical regions around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Sugarcane is cultivated in numerous countries, with Brazil, India, China, and Thailand being some of the leading producers. Global production of sugarcane in 2019 was approximately 1.9 billion metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Sugarcane is primarily grown for the production of sugar, both crystalline and molasses. Additionally, it is used for producing ethanol, rum, and as livestock fodder after processing.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Sugarcane thrives in tropical and subtropical climates with temperatures between 60-95°F (15-35°C). It requires a frost-free period and consistent rainfall for optimal growth.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Sugarcane is a major global crop, with significant production in countries like Brazil, India, China, and Thailand. Global production of sugarcane in 2019 was approximately 1.9 billion metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of sugarcane can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding sugarcane crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Sugarcane thrives in tropical and subtropical climates with temperatures between 60-95°F (15-35°C). It requires a frost-free period and consistent rainfall for optimal growth.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Sugarcane prefers well-drained, deep soils with good moisture-holding capacity. A slightly acidic to neutral pH range of 5.5-7.0 is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Sugarcane:",
          paraGraph:
            "There are different varieties of sugarcane, each with variations in sugar content, fiber content, and adaptability to different climates.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Sugarcane is typically harvested when it reaches full maturity, which is indicated by changes in color and firmness of the stalks. Mechanized harvesters or manual cutting can be used.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of sugarcane include sugarcane borers, white grubs, and aphids. Diseases like smut and rust can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, weed control, and pest management are crucial for healthy sugarcane growth. Irrigation and nutrient management also play a significant role in crop development.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Sugarcane has high nutrient requirements, particularly for nitrogen, phosphorus, and potassium. Micronutrients like boron and zinc are also essential for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "A combination of practices including manual weeding, mechanical cultivation, and the use of herbicides are employed for effective weed control in sugarcane fields.",
        },
      ],

      season: "Monsoon",
    },
    {
      id: 6,
      name: "tea",
      imageName: tea,
      startMonth: "August",
      endMonth: "September",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Tea, scientifically known as Camellia sinensis, is believed to have originated in the Yunnan province of China. It has been cultivated for over 2,000 years and is now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Tea is grown in many countries, with China, India, Kenya, and Sri Lanka being some of the leading producers. Global production of tea in 2019 was approximately 6.2 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Tea is primarily consumed as a beverage, enjoyed for its diverse flavors and potential health benefits. It is also used in various culinary applications and for its medicinal properties.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Tea plants thrive in tropical and subtropical climates with well-distributed rainfall. They require acidic soils and are often grown at higher elevations for better quality leaves.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Tea is a major global crop, with significant production in countries like China, India, Kenya, and Sri Lanka. Global production of tea in 2019 was approximately 6.2 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of tea can vary based on factors like climate, altitude, and agricultural practices. Proper care and management can lead to healthy and high-quality tea leaves.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Tea plants thrive in tropical and subtropical climates with well-distributed rainfall. They require acidic soils and are often grown at higher elevations for better quality leaves.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Tea plants prefer acidic soils with a pH range of 4.5-5.5. Well-drained loamy soils with good organic matter content are ideal for optimal growth.",
        },
        {
          heading: "Varieties of Tea:",
          paraGraph:
            "There are different varieties of tea plants, including Camellia sinensis var. sinensis and Camellia sinensis var. assamica, each with distinct leaf characteristics and flavor profiles.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Tea leaves are typically harvested by hand-picking the top two leaves and a bud. The timing of harvest can greatly influence the flavor and quality of the tea.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of tea plants include tea mosquito bug, red spider mite, and tea thrips. Diseases like gray blight and root rot can also affect the plants.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Pruning, proper spacing, and regular monitoring for pests and diseases are essential for healthy tea plant development. Shade management is also important for quality leaves.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Tea plants benefit from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like iron and manganese are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching, manual weeding, and the use of herbicides are employed for effective weed control in tea plantations. Weed competition can significantly affect tea plant health.",
        },
      ],

      season: "Monsoon",
    },

    // PreWinter
    {
      id: 1,
      name: "beet",
      imageName: beet,
      startMonth: "November",
      endMonth: "December",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Beet, scientifically known as Beta vulgaris, is believed to have originated in the Mediterranean region. It has been cultivated for over 4,000 years and is now grown in various countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Beets are cultivated in numerous countries, with Russia, the United States, and France being some of the leading producers. Global production of beets in 2019 was approximately 307 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Beets are valued for their edible roots, which are used in salads, pickles, and various culinary dishes. They are also processed into sugar and used for their nutritional content.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Beets thrive in temperate climates with well-defined seasons. They are a biennial plant but are typically grown as an annual crop for their roots.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Beets are cultivated in numerous countries, with Russia, the United States, and France being some of the leading producers. Global production of beets in 2019 was approximately 307 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of beets can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding beet crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Beets thrive in cool-seasons with temperatures between 50-75°F (10-24°C). They can be grown in areas with distinct seasons, and exposure to cold temperatures induces root development.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Beets prefer well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is free of rocks, clumps, and debris is ideal for straight, uniform roots.",
        },
        {
          heading: "Varieties of Beets:",
          paraGraph:
            "There are different varieties of beets, including globe-shaped and cylindrical varieties, each with distinct characteristics like shape, size, and color.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Beet roots are ready for harvest when they reach a desirable size, usually 1.5-3 inches in diameter. Harvesting is best done by gently loosening the soil around the roots and pulling them out by hand.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of beets include aphids, leaf miners, and flea beetles. Diseases like powdery mildew and downy mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, thinning, and providing consistent moisture are crucial for healthy beet growth. Weed control is also important to prevent competition.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Beets benefit from well-balanced fertilization, especially with a focus on phosphorus and potassium. Avoid excessive nitrogen, which can lead to excessive foliage growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. Beets are sensitive to competition, so it's important to keep the area around them weed-free.",
        },
      ],

      season: "PreWinter",
    },
    {
      id: 2,
      name: "garlic",
      imageName: garlic,
      startMonth: "November",
      endMonth: "December",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Garlic, scientifically known as Allium sativum, is believed to have originated in Central Asia. It has been cultivated for over 5,000 years and is now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Garlic is cultivated in many countries, with China, India, and Bangladesh being some of the leading producers. Global production of garlic in 2019 was approximately 30 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Garlic is valued for its culinary and medicinal properties. It is used as a flavoring agent in various cuisines and is also believed to have health benefits, including anti-inflammatory and antioxidant properties.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Garlic thrives in temperate climates with well-defined seasons. It is typically grown as an annual crop.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Garlic is cultivated in many countries, with China, India, and Bangladesh being some of the leading producers. Global production of garlic in 2019 was approximately 30 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of garlic can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding garlic crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Garlic thrives in cool-seasons with temperatures between 50-70°F (10-21°C). It requires a period of cold weather (vernalization) for bulb formation.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Garlic prefers well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter is ideal for optimal bulb development.",
        },
        {
          heading: "Varieties of Garlic:",
          paraGraph:
            "There are different varieties of garlic, including softneck and hardneck varieties, each with distinct characteristics like bulb size, color, and flavor.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Garlic cloves are planted in the fall, typically in October or November. They should be spaced about 4-6 inches apart, with the pointed end facing upwards.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of garlic include thrips, nematodes, and onion maggots. Diseases like white rot and downy mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, adequate irrigation, and timely removal of flower stalks (scape) are important for healthy garlic bulb development.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Garlic bulbs are ready for harvest when the leaves have turned brown and dried. They should be carefully dug up, and the roots and tops trimmed before curing.",
        },
        {
          heading: "Curing and Storage:",
          paraGraph:
            "Garlic bulbs should be cured in a warm, dry place for about 2-3 weeks. Once cured, they can be stored in a cool, dry, well-ventilated area.",
        },
      ],

      season: "PreWinter",
    },
    {
      id: 3,
      name: "methi",
      imageName: methi,
      startMonth: "November",
      endMonth: "December",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Fenugreek, scientifically known as Trigonella foenum-graecum, is believed to have originated in the Mediterranean region. It has been cultivated for both culinary and medicinal purposes for thousands of years.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Fenugreek is grown in various countries around the world, with India, Nepal, and Bangladesh being some of the leading producers. Global production of fenugreek in 2019 was approximately 60,000 metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Fenugreek is valued for its aromatic seeds and leaves. It is used as a spice in various cuisines and is also known for its medicinal properties, including aiding digestion and supporting lactation.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Fenugreek thrives in regions with cool winters and moderate summers. It is typically grown as an annual crop.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Fenugreek is grown in various countries around the world, with India, Nepal, and Bangladesh being some of the leading producers. Global production of fenugreek in 2019 was approximately 60,000 metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of fenugreek can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding fenugreek crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Fenugreek thrives in cool-seasons with temperatures between 50-70°F (10-21°C). It is typically grown in the winter season.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Fenugreek prefers well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Fenugreek:",
          paraGraph:
            "There are different varieties of fenugreek, each with variations in leaf shape, color, and seed size. Some popular varieties include Kasuri, Desi, and Kasuri Methi.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Fenugreek seeds are sown directly in the soil. They should be planted about 1 inch apart and covered lightly with soil.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of fenugreek include aphids, whiteflies, and powdery mildew. Diseases like damping off and wilt can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular watering, and timely weeding are essential for healthy fenugreek plant development. Thinning may be necessary for better air circulation.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Fenugreek leaves can be harvested once they reach a desirable size, typically about 3-4 inches in height. Seeds are harvested when the pods turn yellow and begin to split open.",
        },
        {
          heading: "Drying and Storage:",
          paraGraph:
            "Fenugreek leaves can be dried in a shaded area and stored in an airtight container. Seeds should be dried thoroughly before storage.",
        },
      ],

      season: "PreWinter",
    },
    {
      id: 4,
      name: "onion",
      imageName: onion,
      startMonth: "December",
      endMonth: "January",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Onion, scientifically known as Allium cepa, is believed to have originated in Central Asia. It has been cultivated for over 5,000 years and is now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Onions are grown in various countries, with China, India, and the United States being some of the leading producers. Global production of onions in 2019 was approximately 100 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Onions are valued for their distinctive flavor and are used as a key ingredient in various culinary dishes around the world. They can be consumed raw, cooked, or dried for later use.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Onions thrive in regions with cool temperatures. They are typically grown as an annual or biennial crop, depending on the variety.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Onions are grown in various countries, with China, India, and the United States being some of the leading producers. Global production of onions in 2019 was approximately 100 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of onions can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding onion crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Onions thrive in cool-seasons with temperatures between 55-75°F (13-24°C). They are typically grown in the winter or spring season, depending on the variety.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Onions prefer well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Onions:",
          paraGraph:
            "There are different varieties of onions, including yellow, red, and white onions. Each variety has distinct flavor profiles and uses in culinary applications.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Onion sets or seeds can be planted directly in the soil. They should be spaced appropriately to allow for bulb development.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of onions include onion fly and thrips. Diseases like downy mildew and white rot can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular watering, and timely weeding are essential for healthy onion bulb development. Mulching may be used to conserve soil moisture.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Onions can be harvested once the tops have dried and fallen over. They should be pulled and left in the field to dry further before storage.",
        },
        {
          heading: "Storage:",
          paraGraph:
            "Onions should be stored in a cool, dry place with good air circulation. They can be stored for several months under the right conditions.",
        },
      ],

      season: "PreWinter",
    },
    {
      id: 5,
      name: "radish",
      imageName: radish,
      startMonth: "November",
      endMonth: "December",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Radish, scientifically known as Raphanus sativus, is believed to have originated in Southeast Asia. It has been cultivated for over 2,000 years and is now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Radishes are grown in various countries, with China, Russia, and the United States being some of the leading producers. Global production of radishes in 2019 was approximately 17 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Radishes are valued for their crisp texture and mild peppery flavor. They are consumed raw in salads, pickled, or cooked in various dishes.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Radishes thrive in regions with cool temperatures. They are typically grown as an annual crop and can be harvested quickly.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Radishes are grown in various countries, with China, Russia, and the United States being some of the leading producers. Global production of radishes in 2019 was approximately 17 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of radishes can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding radish crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Radishes thrive in cool-seasons with temperatures between 50-65°F (10-18°C). They are typically grown in the spring or fall season.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Radishes prefer well-drained, loamy soils with a pH range of 5.8-6.8. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Radishes:",
          paraGraph:
            "There are different varieties of radishes, including round, long, and daikon radishes. Each variety has distinct characteristics in terms of shape, color, and flavor.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Radish seeds can be sown directly in the soil. They should be planted at the appropriate depth and spaced to allow for proper root development.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of radishes include flea beetles and root maggots. Diseases like clubroot and powdery mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular watering, and timely thinning are essential for healthy radish root development. Mulching may be used to conserve soil moisture.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Radishes can be harvested once they reach a desirable size, typically about 1-2 inches in diameter. They should be pulled gently to avoid damage to the roots.",
        },
        {
          heading: "Storage:",
          paraGraph:
            "Radishes should be stored in a cool, humid environment to maintain crispness. They are best consumed soon after harvest for optimal flavor and texture.",
        },
      ],

      season: "PreWinter",
    },
    {
      id: 6,
      name: "spinach",
      imageName: spinachPreWinter,
      startMonth: "December",
      endMonth: "january",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Spinach, scientifically known as Spinacia oleracea, is believed to have originated in ancient Persia (modern-day Iran). It has been cultivated for over 2,000 years and is now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Spinach is grown in various countries, with China, United States, and India being some of the leading producers. Global production of spinach in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Spinach is valued for its tender, dark green leaves, which are consumed as a nutritious vegetable. It can be eaten raw in salads or cooked in various dishes.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Spinach thrives in regions with cool temperatures. It is typically grown as a cool-season crop, and can tolerate light frosts.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Spinach is grown in various countries, with China, United States, and India being some of the leading producers. Global production of spinach in 2019 was approximately 27 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of spinach can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding spinach crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Spinach thrives in cool-seasons with temperatures between 50-70°F (10-21°C). It is typically grown in the spring or fall season, or as a winter crop in milder climates.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Spinach prefers well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Spinach:",
          paraGraph:
            "There are different varieties of spinach, including savoy, semi-savoy, and flat-leafed types. Each variety has distinct leaf textures and flavors.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Spinach seeds can be sown directly in the soil or started indoors for later transplanting. They should be spaced appropriately to allow for leafy growth.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of spinach include aphids and leaf miners. Diseases like downy mildew and powdery mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular watering, and timely thinning are essential for healthy spinach leaf development. Mulching may be used to conserve soil moisture.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Spinach leaves can be harvested once they reach a desirable size, typically before they start to bolt (produce flowers). They can be harvested as whole plants or by cutting individual leaves.",
        },
        {
          heading: "Storage:",
          paraGraph:
            "Spinach should be stored in a cool, humid environment to maintain freshness. It is best consumed soon after harvest for optimal flavor and nutrition.",
        },
      ],

      season: "PreWinter",
    },

    //Winter
    {
      id: 1,
      name: "Brussels_Sprouts",
      imageName: Brussels_Sprouts,
      startMonth: "January",
      endMonth: "February",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Brussels Sprouts, scientifically known as Brassica oleracea var. gemmifera, are believed to have originated in ancient Rome. They have been cultivated for over 2,000 years and are now grown in various countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Brussels Sprouts are grown in various countries, with China, United States, and India being some of the leading producers. Global production of Brussels Sprouts in 2019 was approximately 1.5 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Brussels Sprouts are valued for their small, cabbage-like heads that grow along the stem. They are consumed as a nutritious vegetable and can be cooked in various dishes.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Brussels Sprouts thrive in regions with cool temperatures. They are typically grown as a cool-season crop and can tolerate light frosts.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Brussels Sprouts are grown in various countries, with China, United States, and India being some of the leading producers. Global production of Brussels Sprouts in 2019 was approximately 1.5 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of Brussels Sprouts can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding Brussels Sprout crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Brussels Sprouts thrive in cool-seasons with temperatures between 45-75°F (7-24°C). They are typically grown in the late summer, fall, and early winter seasons.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Brussels Sprouts prefer well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Brussels Sprouts:",
          paraGraph:
            "There are different varieties of Brussels Sprouts, each with variations in head size and maturity period. Some popular varieties include 'Long Island Improved' and 'Jade Cross'.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Brussels Sprout seeds can be started indoors and later transplanted, or sown directly in the garden. They should be spaced appropriately to allow for head development.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of Brussels Sprouts include cabbage worms and aphids. Diseases like clubroot and downy mildew can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, regular watering, and pest control measures are essential for healthy Brussels Sprout head development. Staking may be required for support.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Brussels Sprout heads can be harvested once they reach a desirable size, typically about 1-2 inches in diameter. They should be picked from the bottom of the stem upwards.",
        },
        {
          heading: "Storage:",
          paraGraph:
            "Brussels Sprouts should be stored in a cool, humid environment to maintain freshness. They can be refrigerated for up to a few weeks after harvest.",
        },
      ],

      season: "Winter",
    },
    {
      id: 2,
      name: "cotton",
      imageName: cotton_winter,
      startMonth: "January",
      endMonth: "February",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Cotton, scientifically known as Gossypium, is believed to have been first cultivated in ancient India and Pakistan. It has been grown for thousands of years and is now a major global fiber crop.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Cotton is grown in numerous countries around the world, with China, India, United States, and Pakistan being some of the leading producers. Global production of cotton in 2019 was approximately 120 million bales.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Cotton is primarily cultivated for its fibers, which are used in the textile industry to make a wide range of products, including clothing, fabrics, and industrial materials.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Cotton thrives in warm climates with temperatures between 60-95°F (16-35°C). It requires a frost-free growing season and ample sunlight for optimal growth.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Cotton is a major global crop, with significant production in countries like China, India, United States, and Pakistan. Global production of cotton in 2019 was approximately 120 million bales.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of cotton can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and pest management are crucial for high-yielding cotton crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Cotton thrives in warm climates with temperatures between 60-95°F (16-35°C). It requires a frost-free growing season and ample sunlight for optimal growth.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Cotton plants prefer well-drained, loamy soils with a pH range of 5.5-7.0. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Cotton:",
          paraGraph:
            "There are different varieties of cotton, each with variations in fiber length, color, and quality. Some popular varieties include 'Upland' and 'Pima' cotton.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Cotton seeds are typically planted directly in the field. They should be spaced appropriately to allow for healthy plant development and fiber production.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of cotton include boll weevils, aphids, and cotton stainers. Diseases like cotton root rot and verticillium wilt can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper irrigation, pest control, and timely defoliation are essential for healthy cotton boll development. Crop rotation may also be used to prevent soil-borne diseases.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Cotton bolls are typically harvested once they have matured and opened. The fibers are then separated from the seeds through a process called ginning.",
        },
        {
          heading: "Ginning and Processing:",
          paraGraph:
            "After harvest, the cotton fibers are separated from the seeds using a gin. The fibers are then processed, spun into yarn, and used to make various products.",
        },
      ],

      season: "Winter",
    },
    {
      id: 3,
      name: "mustard",
      imageName: mustard_winter,
      startMonth: "January",
      endMonth: "February",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Mustard is grown in various countries around the world, with Canada, India, and China being some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of mustard in 2019 was approximately 11 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of mustard can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and productive mustard crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Mustard, scientifically known as Brassica juncea, is believed to have originated in the Himalayan region of India. It has been cultivated for over 5,000 years and is now grown in many countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Mustard is grown in various countries around the world, with Canada, India, and China being some of the leading producers.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Mustard seeds are valued for their oil content and are used in various culinary applications. Mustard oil is also used for cooking, and the leaves of the plant are used as a green vegetable.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Mustard thrives in cool to moderate climates. It is a winter crop in many regions, but can also be grown in spring. It requires temperatures between 10-25°C (50-77°F) for optimal growth.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Mustard prefers well-drained loamy soils with a pH range of 6.0-7.5. Good drainage is crucial to prevent waterlogging.",
        },
        {
          heading: "Varieties of Mustard:",
          paraGraph:
            "There are different varieties of mustard, each with distinct characteristics like seed color, oil content, and pungency. Some popular varieties include brown mustard and yellow mustard.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Mustard plants are typically harvested when the seeds have matured and the pods have turned brown. Harvesting is done by cutting the plants and allowing them to dry before threshing.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of mustard include aphids, flea beetles, and caterpillars. Diseases like powdery mildew and white rust can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, timely irrigation, and pest control measures are crucial for healthy mustard plant development. Crop rotation is also important for disease management.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Mustard benefits from balanced fertilization, with a focus on nitrogen, phosphorus, and potassium. Micronutrients like sulfur are also important for optimal growth.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Mulching and regular weeding help in controlling weeds. Mustard is sensitive to competition, so it's important to keep the area around them weed-free.",
        },
      ],

      season: "Winter",
    },
    {
      id: 4,
      name: "peas",
      imageName: peas_winter,
      startMonth: "January",
      endMonth: "February",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Peas, scientifically known as Pisum sativum, are believed to have originated in the Mediterranean region. They have been cultivated for thousands of years and are now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Peas are grown in various countries, with China, India, Russia, and Canada being some of the leading producers. Global production of peas in 2019 was approximately 19 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Peas are cultivated for their edible seeds, which are consumed as a nutritious vegetable. They can be eaten fresh, frozen, or dried, and are used in a variety of culinary dishes.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Peas thrive in regions with cool to temperate climates. They are typically grown as a cool-season crop and can tolerate light frosts.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Peas are grown in various countries, with China, India, Russia, and Canada being some of the leading producers. Global production of peas in 2019 was approximately 19 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of peas can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and pest management are crucial for high-yielding pea crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Peas thrive in regions with cool to temperate climates. They are typically grown as a cool-season crop in the spring or fall season.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Pea plants prefer well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Peas:",
          paraGraph:
            "There are different varieties of peas, including garden peas, snow peas, and sugar snap peas, each with distinct pod types and flavors.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Pea seeds can be sown directly in the garden. They should be spaced appropriately to allow for healthy plant development and pod production.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of peas include pea aphids and pea moths. Diseases like powdery mildew and pea enation mosaic virus can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Providing support for climbing varieties, proper irrigation, and pest control measures are essential for healthy pea plant development. Crop rotation may also be used to prevent soil-borne diseases.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Peas can be harvested once the pods have filled out and the seeds are tender. Harvesting should be done regularly to encourage continuous pod production.",
        },
        {
          heading: "Storage and Uses:",
          paraGraph:
            "Fresh peas should be consumed soon after harvest for optimal flavor and nutrition. They can also be blanched and frozen for longer-term storage and use.",
        },
      ],

      season: "Winter",
    },
    {
      id: 5,
      name: "wheat",
      imageName: wheat,
      startMonth: "February",
      endMonth: "March",
      education: [
        {
          heading: "Origin:",
          paraGraph:
            "Wheat, scientifically known as Triticum aestivum, is believed to have originated in the ancient Near East. It has been cultivated for over 10,000 years and is now grown in numerous countries around the world.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Wheat is a major global crop, with significant production in countries like China, India, Russia, and the United States. Global production of wheat in 2019 was approximately 733 million metric tons.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Wheat is primarily cultivated for its edible grains, which are processed into various food products. It is a staple in many diets and is used to make bread, pasta, flour, and other food items.",
        },
        {
          heading: "Area:",
          paraGraph:
            "Wheat is grown in regions with temperate climates. It is typically sown in the fall and harvested in the spring or early summer, depending on the variety and location.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Wheat is a major global crop, with significant production in countries like China, India, Russia, and the United States. Global production of wheat in 2019 was approximately 733 million metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of wheat can vary based on factors like climate, soil conditions, and agricultural practices. Proper care, nutrient management, and pest control are crucial for high-yielding wheat crops.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Wheat is typically grown in regions with temperate climates. It requires a period of cold weather (vernalization) to initiate flowering and seed development.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Wheat plants prefer well-drained, loamy soils with a pH range of 6.0-7.5. Soil that is rich in organic matter and nutrients is ideal for optimal growth.",
        },
        {
          heading: "Varieties of Wheat:",
          paraGraph:
            "There are different varieties of wheat, including hard wheat, soft wheat, and durum wheat, each with distinct characteristics like grain hardness and protein content.",
        },
        {
          heading: "Planting:",
          paraGraph:
            "Wheat seeds are sown directly in the field in the fall season. They should be spaced appropriately to allow for healthy tillering and grain development.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of wheat include aphids, wireworms, and armyworms. Diseases like rust, powdery mildew, and Fusarium head blight can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper nutrient management, irrigation, and pest control measures are essential for healthy wheat plant development. Crop rotation may also be used to prevent soil-borne diseases.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Wheat is ready for harvest when the grains have fully developed and the crop has matured. Harvesting is typically done using combine harvesters.",
        },
        {
          heading: "Storage and Uses:",
          paraGraph:
            "After harvest, wheat grains can be stored for long periods if kept in dry, cool conditions. They are processed into flour for various food products.",
        },
      ],

      season: "Winter",
    },
    {
      id: 6,
      name: "Corn",
      description:
        "Corn, also known as maize, is a widely cultivated cereal grain that originated in the Americas. It is characterized by tall, slender plants with large leaves and produces ears containing rows of kernels. Corn is a staple food in many parts of the world and is used in various culinary applications, including as a source of flour, oil, and animal feed.",
      imageName: cornImg,
      startMonth: "February",
      endMonth: "March",
      education: [
        {
          heading: "Area:",
          paraGraph:
            "Corn, scientifically known as Zea mays, is grown in various countries around the world. The United States, China, and Brazil are some of the leading producers.",
        },
        {
          heading: "Production:",
          paraGraph:
            "Global production of corn in 2019 was approximately 1.1 billion metric tons.",
        },
        {
          heading: "Productivity:",
          paraGraph:
            "Productivity of corn can vary based on factors like climate, soil conditions, and agricultural practices. Proper care and management can lead to healthy and high-yielding corn crops.",
        },
        {
          heading: "Origin:",
          paraGraph:
            "Corn is believed to have originated in Mesoamerica and was later spread to other parts of the world. It has a long history of cultivation and has undergone significant domestication.",
        },
        {
          heading: "Distribution:",
          paraGraph:
            "Corn is grown in numerous countries, with the United States being the largest producer. It is a staple food crop and is also used in various industrial applications.",
        },
        {
          heading: "Uses:",
          paraGraph:
            "Corn has diverse uses, including as a staple food, animal feed, and for industrial purposes like ethanol production. It is also processed into various products such as cornmeal and corn oil.",
        },
      ],

      cultivation: [
        {
          heading: "Climate and Seasons:",
          paraGraph:
            "Corn thrives in warm temperatures and requires adequate rainfall or irrigation. It is typically grown during specific growing seasons, such as spring and summer.",
        },
        {
          heading: "Soils:",
          paraGraph:
            "Corn prefers well-drained soils with good fertility. Loamy soils with a pH range of 5.8-6.8 are suitable for optimal growth.",
        },
        {
          heading: "Varieties of Corn:",
          paraGraph:
            "There are various types of corn, including dent, flint, flour, and sweet corn. Each variety has distinct characteristics and uses.",
        },
        {
          heading: "Harvesting:",
          paraGraph:
            "Corn is harvested when the kernels are mature and have reached the desired moisture content. The timing of harvest is crucial for quality and yield.",
        },
        {
          heading: "Pests and Diseases:",
          paraGraph:
            "Common pests of corn include corn earworm, armyworm, and aphids. Diseases like gray leaf spot and common rust can also affect the crop.",
        },
        {
          heading: "Crop Management:",
          paraGraph:
            "Proper spacing, weed control, and pest management are essential for healthy corn plants. Fertilization and irrigation are also key aspects of corn cultivation.",
        },
        {
          heading: "Nutrient Management:",
          paraGraph:
            "Corn requires balanced nutrient levels, with a focus on nitrogen, phosphorus, and potassium. Soil testing helps determine specific nutrient needs.",
        },
        {
          heading: "Weed Management:",
          paraGraph:
            "Weed control is critical for corn, as competition for resources can reduce yields. Practices like herbicide application and crop rotation are common.",
        },
      ],

      season: "Winter",
    },
  ];

  const [uniqueMonth, setUniqueMonth] = useState([]);

  const fetchMonths = (season) => {
    let outputArray = [];
    let start = false;

    for (let j = 0; j < Crops.length; j++) {
      if (Crops[j].season === season) {
        for (let k = 0; k < outputArray.length; k++) {
          if (Crops[j].startMonth === outputArray[k]) {
            start = true;
          }
        }
        if (start === false) {
          outputArray.push(Crops[j].startMonth);
        }
        start = false;
      }
    }
    console.log(outputArray);
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
        Crops,
      }}
    >
      {props.children}
    </CropsContentContext.Provider>
  );
};

export default CropsContentState;
